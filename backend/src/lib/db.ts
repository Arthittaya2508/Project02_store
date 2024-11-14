import mysql from "mysql2";
import dotenv from "dotenv";

// โหลดค่า environment variables จาก .env
dotenv.config();

// ตั้งค่าการเชื่อมต่อฐานข้อมูล
const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ฟังก์ชัน query ที่ใช้กับ express
export async function query<T>(sql: string, values?: any[]): Promise<T[]> {
  const [rows] = await pool.promise().execute(sql, values);
  return rows as T[];
}

export default pool;
