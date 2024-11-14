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
// Fetch all sizes
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.default.query("SELECT * FROM sizes");
        res.json(rows);
    }
    catch (error) {
        console.error("Error fetching sizes:", error);
        res.status(500).json({ error: "Failed to fetch sizes" });
    }
}));
// Add a new size
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { size_name } = data;
        const [result] = yield db_1.default.query(`INSERT INTO sizes (size_name) VALUES (?)`, [size_name]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error inserting size:", error);
        res.status(500).json({ error: "Failed to add size" });
    }
}));
// Update an existing size
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { size_id, size_name } = data;
        const [result] = yield db_1.default.query(`UPDATE sizes SET size_name = ? WHERE size_id = ?`, [size_name, size_id]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error updating size:", error);
        res.status(500).json({ error: "Failed to update size" });
    }
}));
// Delete an existing size
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { size_id } = data;
        const [result] = yield db_1.default.query(`DELETE FROM sizes WHERE size_id = ?`, [
            size_id,
        ]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error deleting size:", error);
        res.status(500).json({ error: "Failed to delete size" });
    }
}));
exports.default = router;
