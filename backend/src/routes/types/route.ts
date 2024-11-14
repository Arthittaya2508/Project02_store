import express, { Request, Response } from "express";
import db from "./../../lib/db"; // เชื่อมต่อกับฐานข้อมูล (ตามโค้ดที่ใช้)

const router = express.Router();

// Fetch all types (ดึงข้อมูลทั้งหมดจากตาราง 'types')
router.get("/", async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query("SELECT * FROM types");
    res.json(rows); // ส่งข้อมูลที่ได้กลับไปยัง client
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).json({ error: "Failed to fetch types" });
  }
});

// Add a new type (เพิ่มข้อมูลใหม่ลงในตาราง 'types')
router.post("/", async (req: Request, res: Response) => {
  try {
    const { type_name } = req.body; // ดึงข้อมูลที่ส่งมาใน request body
    if (!type_name) {
      return res.status(400).json({ error: "Type name is required" });
    }

    const [result] = await db.query(
      "INSERT INTO types (type_name) VALUES (?)",
      [type_name]
    );

    res.json({ success: true, result }); // ส่งผลลัพธ์ที่ได้รับจากการ insert
  } catch (error) {
    console.error("Error inserting type:", error);
    res.status(500).json({ error: "Failed to add type" });
  }
});

// Update an existing type (อัพเดทข้อมูลในตาราง 'types')
router.put("/", async (req: Request, res: Response) => {
  try {
    const { type_id, type_name } = req.body; // ดึงข้อมูลที่ส่งมาใน request body
    if (!type_id || !type_name) {
      return res.status(400).json({ error: "Type ID and name are required" });
    }

    const [result] = await db.query(
      "UPDATE types SET type_name = ? WHERE type_id = ?",
      [type_name, type_id]
    );

    res.json({ success: true, result }); // ส่งผลลัพธ์การอัพเดท
  } catch (error) {
    console.error("Error updating type:", error);
    res.status(500).json({ error: "Failed to update type" });
  }
});

// Delete an existing type (ลบข้อมูลในตาราง 'types')
router.delete("/", async (req: Request, res: Response) => {
  try {
    const { type_id } = req.body; // ดึงข้อมูลที่ส่งมาใน request body
    if (!type_id) {
      return res.status(400).json({ error: "Type ID is required" });
    }

    const [result] = await db.query("DELETE FROM types WHERE type_id = ?", [
      type_id,
    ]);

    res.json({ success: true, result }); // ส่งผลลัพธ์การลบ
  } catch (error) {
    console.error("Error deleting type:", error);
    res.status(500).json({ error: "Failed to delete type" });
  }
});

export default router;
