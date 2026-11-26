import fs from 'node:fs';
import path from 'node:path';
import { Pool } from 'pg';

export class MissingDatabaseConfigError extends Error {
  constructor(message = 'DATABASE_URL is not configured for production database storage.') {
    super(message);
    this.name = 'MissingDatabaseConfigError';
  }
}

export type StorageMode = 'postgres' | 'local-file';

export interface TrialBookingRecord {
  id: string;
  submittedAt: string;
  studentName: string;
  studentAge: string;
  parentName: string;
  country: string;
  whatsapp: string;
  email: string;
  course: string;
  preferredLanguage: string;
  preferredTeacher: string;
  classType: string;
  preferredDays: string;
  preferredTime: string;
  preferredApp: string;
  notes: string;
}

export interface HomeTuitionRecord {
  id: string;
  submittedAt: string;
  name: string;
  phone: string;
  location: string;
  details: string;
}

export interface ContactInquiryRecord {
  id: string;
  submittedAt: string;
  name: string;
  contact: string;
  topic: string;
  message: string;
}

interface LocalStoreShape {
  trials: TrialBookingRecord[];
  homeTuition: HomeTuitionRecord[];
  contacts: ContactInquiryRecord[];
}

let pool: Pool | null = null;
let schemaInitialized = false;

function getDatabaseUrl(): string | null {
  const url = process.env.DATABASE_URL?.trim();
  return url ? url : null;
}

function getPool(): Pool {
  if (!pool) {
    const connectionString = getDatabaseUrl();
    if (!connectionString) {
      throw new MissingDatabaseConfigError();
    }
    pool = new Pool({
      connectionString,
      ssl: connectionString.includes('localhost') || connectionString.includes('127.0.0.1')
        ? false
        : { rejectUnauthorized: false },
    });
  }
  return pool;
}

async function ensureSchema(dbPool: Pool): Promise<void> {
  if (schemaInitialized) return;
  await dbPool.query(`
    CREATE TABLE IF NOT EXISTS trial_bookings (
      id TEXT PRIMARY KEY,
      submitted_at TIMESTAMPTZ NOT NULL,
      student_name TEXT NOT NULL,
      student_age TEXT NOT NULL,
      parent_name TEXT NOT NULL DEFAULT '',
      country TEXT NOT NULL,
      whatsapp TEXT NOT NULL,
      email TEXT NOT NULL,
      course TEXT NOT NULL,
      preferred_language TEXT NOT NULL,
      preferred_teacher TEXT NOT NULL,
      class_type TEXT NOT NULL,
      preferred_days TEXT NOT NULL,
      preferred_time TEXT NOT NULL,
      preferred_app TEXT NOT NULL,
      notes TEXT NOT NULL DEFAULT ''
    );

    CREATE TABLE IF NOT EXISTS home_tuition_inquiries (
      id TEXT PRIMARY KEY,
      submitted_at TIMESTAMPTZ NOT NULL,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      location TEXT NOT NULL,
      details TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS contact_inquiries (
      id TEXT PRIMARY KEY,
      submitted_at TIMESTAMPTZ NOT NULL,
      name TEXT NOT NULL,
      contact TEXT NOT NULL,
      topic TEXT NOT NULL,
      message TEXT NOT NULL
    );
  `);
  schemaInitialized = true;
}

function getLocalStorePath(): string {
  return path.resolve(process.cwd(), 'data', 'submissions.json');
}

function readLocalStore(): LocalStoreShape {
  const filePath = getLocalStorePath();
  if (!fs.existsSync(filePath)) {
    return { trials: [], homeTuition: [], contacts: [] };
  }
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = JSON.parse(raw) as Partial<LocalStoreShape>;
  return {
    trials: Array.isArray(parsed.trials) ? parsed.trials : [],
    homeTuition: Array.isArray(parsed.homeTuition) ? parsed.homeTuition : [],
    contacts: Array.isArray(parsed.contacts) ? parsed.contacts : [],
  };
}

function writeLocalStore(data: LocalStoreShape): void {
  const filePath = getLocalStorePath();
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function assertLocalFallbackAllowed(): void {
  if (process.env.VERCEL === '1') {
    throw new MissingDatabaseConfigError(
      'DATABASE_URL is required on Vercel because serverless functions do not have persistent local disk storage.'
    );
  }
}

export async function insertTrialBooking(record: TrialBookingRecord): Promise<StorageMode> {
  if (getDatabaseUrl()) {
    const db = getPool();
    await ensureSchema(db);
    await db.query(
      `INSERT INTO trial_bookings (
        id, submitted_at, student_name, student_age, parent_name, country,
        whatsapp, email, course, preferred_language, preferred_teacher,
        class_type, preferred_days, preferred_time, preferred_app, notes
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)`,
      [
        record.id,
        record.submittedAt,
        record.studentName,
        record.studentAge,
        record.parentName,
        record.country,
        record.whatsapp,
        record.email,
        record.course,
        record.preferredLanguage,
        record.preferredTeacher,
        record.classType,
        record.preferredDays,
        record.preferredTime,
        record.preferredApp,
        record.notes,
      ]
    );
    return 'postgres';
  }

  assertLocalFallbackAllowed();
  const store = readLocalStore();
  store.trials.unshift(record);
  writeLocalStore(store);
  return 'local-file';
}

export async function insertHomeTuitionInquiry(record: HomeTuitionRecord): Promise<StorageMode> {
  if (getDatabaseUrl()) {
    const db = getPool();
    await ensureSchema(db);
    await db.query(
      `INSERT INTO home_tuition_inquiries (id, submitted_at, name, phone, location, details)
       VALUES ($1,$2,$3,$4,$5,$6)`,
      [record.id, record.submittedAt, record.name, record.phone, record.location, record.details]
    );
    return 'postgres';
  }

  assertLocalFallbackAllowed();
  const store = readLocalStore();
  store.homeTuition.unshift(record);
  writeLocalStore(store);
  return 'local-file';
}

export async function insertContactInquiry(record: ContactInquiryRecord): Promise<StorageMode> {
  if (getDatabaseUrl()) {
    const db = getPool();
    await ensureSchema(db);
    await db.query(
      `INSERT INTO contact_inquiries (id, submitted_at, name, contact, topic, message)
       VALUES ($1,$2,$3,$4,$5,$6)`,
      [record.id, record.submittedAt, record.name, record.contact, record.topic, record.message]
    );
    return 'postgres';
  }

  assertLocalFallbackAllowed();
  const store = readLocalStore();
  store.contacts.unshift(record);
  writeLocalStore(store);
  return 'local-file';
}
