import express, { Request, Response } from "express";
import db from "./../../lib/db";
const router = express.Router();

// get api
router.get("/", async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query("SELECT * FROM transports");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching transports:", error);
    res.status(500).json({ error: "Failed to fetch transports" });
  }
});

// post
router.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body; // Use req.body to access the parsed JSON data
    const { transport_name, shipping_cost } = data; // Get shipping cost from request

    const [result] = await db.query(
      `INSERT INTO transports (transport_name, shipping_cost) VALUES (?, ?)`,
      [transport_name, shipping_cost] // Insert shipping cost
    );

    res.json({ success: true, result });
  } catch (error) {
    console.error("Error inserting transport:", error);
    res.status(500).json({ error: "Failed to add transport" });
  }
});

// put
router.put("/", async (req: Request, res: Response) => {
  try {
    const data = req.body; // Use req.body to access the parsed JSON data
    const { transport_id, transport_name, shipping_cost } = data; // Get shipping cost from request

    const [result] = await db.query(
      `UPDATE transports SET tran_name = ?, shipping_cost = ? WHERE tran_id = ?`,
      [transport_name, shipping_cost, transport_id] // Update shipping cost
    );

    res.json({ success: true, result });
  } catch (error) {
    console.error("Error updating transport:", error);
    res.status(500).json({ error: "Failed to update transport" });
  }
});

// Delete
router.delete("/", async (req: Request, res: Response) => {
  try {
    const data = req.body; // Use req.body to access the parsed JSON data
    const { transport_id } = data;

    const [result] = await db.query(
      `DELETE FROM transports WHERE transport_id = ?`,
      [transport_id]
    );

    res.json({ success: true, result });
  } catch (error) {
    console.error("Error deleting transport:", error);
    res.status(500).json({ error: "Failed to delete transport" });
  }
});

export default router;
