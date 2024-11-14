"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./../../lib/db"));
const router = express_1.default.Router();
// Fetch all types
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.default.query("SELECT * FROM types");
        res.json(rows);
    }
    catch (error) {
        console.error("Error fetching types:", error);
        res.status(500).json({ error: "Failed to fetch types" });
    }
}));
// Add a new type
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body; // ใช้ req.body แทน request.json()
        const { type_name } = data;
        const [result] = yield db_1.default.query(`INSERT INTO types (type_name) VALUES (?)`, [type_name]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error inserting type:", error);
        res.status(500).json({ error: "Failed to add type" });
    }
}));
// Update an existing type
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body; // ใช้ req.body แทน request.json()
        const { type_id, type_name } = data;
        console.log({ type_id, type_name }); // ตรวจสอบข้อมูลที่ได้รับ
        const [result] = yield db_1.default.query(`UPDATE types SET type_name = ? WHERE type_id = ?`, [type_name, type_id]);
        console.log(result); // ตรวจสอบผลลัพธ์
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error updating type:", error);
        res.status(500).json({ error: "Failed to update type" });
    }
}));
// Delete an existing type
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body; // ใช้ req.body แทน request.json()
        const { type_id } = data;
        console.log({ type_id }); // ตรวจสอบข้อมูลที่ได้รับ
        const [result] = yield db_1.default.query(`DELETE FROM types WHERE type_id = ?`, [
            type_id,
        ]);
        console.log(result); // ตรวจสอบผลลัพธ์
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error deleting type:", error);
        res.status(500).json({ error: "Failed to delete type" });
    }
}));
exports.default = router;
