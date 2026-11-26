import 'dotenv/config';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getChatHealth, handleChatRequest } from './server/chatService.js';
import {
  handleContactInquiry,
  handleHomeTuitionInquiry,
  handleTrialBooking,
} from './server/submissionsService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '100kb' }));

  app.get('/api/health', (_req, res) => {
    res.json(getChatHealth());
  });

  app.post('/api/chat', async (req, res) => {
    const result = await handleChatRequest(req.body);
    res.status(result.status).json(result.json);
  });

  app.post('/api/bookings', async (req, res) => {
    const result = await handleTrialBooking(req.body);
    res.status(result.status).json(result.json);
  });

  app.post('/api/home-tuition', async (req, res) => {
    const result = await handleHomeTuitionInquiry(req.body);
    res.status(result.status).json(result.json);
  });

  app.post('/api/contact', async (req, res) => {
    const result = await handleContactInquiry(req.body);
    res.status(result.status).json(result.json);
  });

  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (req, res, next) => {
      if (req.path.startsWith('/api/')) {
        next();
        return;
      }
      const indexPath = path.join(distDir, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send('Production build not found. Run npm run build first.');
      }
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Noor Quran server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
