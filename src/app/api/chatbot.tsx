// pages/api/chatbot.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { BusinessChatbot } from '../../lib/chatbot';

const chatbot = new BusinessChatbot();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing "message"' });
  }

  try {
    const response = chatbot.processMessage(message);
    res.status(200).json({ response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
