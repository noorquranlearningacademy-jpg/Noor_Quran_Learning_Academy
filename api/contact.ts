import { handleContactInquiry } from '../server/submissionsService.js';

export default async function handler(req: { method?: string; body?: unknown }, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const result = await handleContactInquiry(req.body);
  res.status(result.status).json(result.json);
}
