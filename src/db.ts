import { Pool } from 'pg';
import dbConfig from './db.config';

const pool = new Pool(dbConfig);

export default pool;
