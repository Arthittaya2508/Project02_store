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
// Fetch all colors
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.default.query("SELECT * FROM colors");
        res.json(rows);
    }
    catch (error) {
        console.error("Error fetching colors:", error);
        res.status(500).json({ error: "Failed to fetchcolors" });
    }
}));
// Add a new color
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { color_name } = req.body;
        const [result] = yield db_1.default.query(`INSERT INTO colors (color_name) VALUES (?)`, [color_name]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error inserting color:", error);
        res.status(500).json({ error: "Failed to add color" });
    }
}));
// Update an existing color
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { color_id, color_name } = req.body;
        const [result] = yield db_1.default.query(`UPDATE colors SET color_name = ? WHERE color_id = ?`, [color_name, color_id]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error updating color:", error);
        res.status(500).json({ error: "Failed to update color" });
    }
}));
// Delete an existing color
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { color_id } = req.body;
        const [result] = yield db_1.default.query(`DELETE FROM colors WHERE color_id = ?`, [
            color_id,
        ]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error deleting color:", error);
        res.status(500).json({ error: "Failed to delete color" });
    }
}));
exports.default = router;
