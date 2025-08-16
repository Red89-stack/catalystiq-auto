export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const security = new SecurityMiddleware();
  
  // Security validation
  const validation = security.validateRequest(req);
  if (!validation.valid) {
    const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
    security.logSecurityEvent('REQUEST_BLOCKED', { reason: validation.error }, clientIP);
    
    return res.status(403).json({
      success: false,
      error: {
        code: validation.error,
        message: 'Request blocked for security reasons'
      }
    });
  }

  // Initialize chatbot with security context
  const chatbot = new BusinessChatbot();
  const sessionId = req.headers['x-session-id'] as string;
  
  try {
    const { message, context } = req.body;
    
    // Validate session
    if (!chatbot.validateSession(sessionId)) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'INVALID_SESSION',
          message: 'Session expired or invalid'
        }
      });
    }
    
    // Process message
    const response = chatbot.processMessage(message, context);
    
    // Log successful interaction
    security.logSecurityEvent('CHAT_MESSAGE', { 
      messageLength: message.length,
      hasContext: !!context 
    }, req.ip || 'unknown');
    
    return res.status(200).json({
      success: true,
      data: { response },
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Chat API error:', error);
    
    security.logSecurityEvent('CHAT_ERROR', { 
      error: error.message 
    }, req.ip || 'unknown');
    
    return res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'An internal error occurred'
      }
    });
  }
}
