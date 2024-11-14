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
const db_1 = __importDefault(require("../../lib/db"));
const router = express_1.default.Router();
// Fetch all products
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.default.query("SELECT * FROM products");
        res.json(rows);
    }
    catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
}));
// Add a new products
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pro_name, pro_des, type_id, band_id } = req.body;
        const [result] = yield db_1.default.query(`INSERT INTO products (pro_name, pro_des, type_id, band_id)
 VALUES (?, ?, ?, ?)`, [pro_name, pro_des, type_id, band_id]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error inserting products:", error);
        res.status(500).json({ error: "Failed to add products" });
    }
}));
// Update an existing products
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pro_id, pro_name, pro_des, type_id, band_id } = req.body;
        const [result] = yield db_1.default.query(`UPDATE products SET pro_id, pro_name, pro_des, type_id, band_id = ? WHERE pro_id = ?`, [pro_id, pro_name, pro_des, type_id, band_id]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error updating products:", error);
        res.status(500).json({ error: "Failed to update products" });
    }
}));
// Delete an existing products
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pro_id } = req.body;
        const [result] = yield db_1.default.query(`DELETE FROM products WHERE pro_id = ?`, [
            pro_id,
        ]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error deleting products:", error);
        res.status(500).json({ error: "Failed to delete products" });
    }
}));
exports.default = router;
