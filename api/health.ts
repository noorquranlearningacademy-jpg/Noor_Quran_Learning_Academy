import type { IncomingMessage, ServerResponse } from 'node:http';
import { getChatHealth } from '../server/chatService.js';

export default function handler(
  _req: IncomingMessage,
  res: ServerResponse & { status: (code: number) => any; json: (body: any) => void }
) {
  res.status(200).json(getChatHealth());
}
