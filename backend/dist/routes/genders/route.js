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
// Fetch all genders
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.default.query("SELECT * FROM genders");
        res.json(rows);
    }
    catch (error) {
        console.error("Error fetching genders:", error);
        res.status(500).json({ error: "Failed to fetch genders" });
    }
}));
// Add a new gender
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gender_name } = req.body;
        const [result] = yield db_1.default.query(`INSERT INTO genders (gender_name) VALUES (?)`, [gender_name]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error inserting gender:", error);
        res.status(500).json({ error: "Failed to add gender" });
    }
}));
// Update an existing gender
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gender_id, gender_name } = req.body;
        const [result] = yield db_1.default.query(`UPDATE genders SET gender_name = ? WHERE gender_id = ?`, [gender_name, gender_id]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error updating gender:", error);
        res.status(500).json({ error: "Failed to update gender" });
    }
}));
// Delete an existing gender
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gender_id } = req.body;
        const [result] = yield db_1.default.query(`DELETE FROM genders WHERE gender_id = ?`, [
            gender_id,
        ]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error deleting gender:", error);
        res.status(500).json({ error: "Failed to delete gender" });
    }
}));
exports.default = router;
