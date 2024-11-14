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
// Fetch all bands
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.default.query("SELECT * FROM bands");
        res.json(rows);
    }
    catch (error) {
        console.error("Error fetching bands:", error);
        res.status(500).json({ error: "Failed to fetch bands" });
    }
}));
// Add a new bands
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { band_name } = data;
        const [result] = yield db_1.default.query(`INSERT INTO bands (band_name) VALUES (?)`, [band_name]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error inserting band:", error);
        res.status(500).json({ error: "Failed to add band" });
    }
}));
// Update an existing band
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { band_id, band_name } = data;
        const [result] = yield db_1.default.query(`UPDATE bands SET band_name = ? WHERE band_id = ?`, [band_name, band_id]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error updating band:", error);
        res.status(500).json({ error: "Failed to update band" });
    }
}));
// Delete an existing band
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { band_id } = data;
        const [result] = yield db_1.default.query(`DELETE FROM bands WHERE band_id = ?`, [
            band_id,
        ]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error deleting band:", error);
        res.status(500).json({ error: "Failed to delete band" });
    }
}));
exports.default = router;
