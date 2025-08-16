export class BusinessChatbot {
  validateSession(_sessionId: string | undefined): boolean {
    return true;
  }

  processMessage(message: string, _context?: any): string {
    return `Echo: ${message}`;
  }
}
