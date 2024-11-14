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
// get api
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.default.query("SELECT * FROM transports");
        res.json(rows);
    }
    catch (error) {
        console.error("Error fetching transports:", error);
        res.status(500).json({ error: "Failed to fetch transports" });
    }
}));
// post
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body; // Use req.body to access the parsed JSON data
        const { transport_name, shipping_cost } = data; // Get shipping cost from request
        const [result] = yield db_1.default.query(`INSERT INTO transports (transport_name, shipping_cost) VALUES (?, ?)`, [transport_name, shipping_cost] // Insert shipping cost
        );
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error inserting transport:", error);
        res.status(500).json({ error: "Failed to add transport" });
    }
}));
// put
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body; // Use req.body to access the parsed JSON data
        const { transport_id, transport_name, shipping_cost } = data; // Get shipping cost from request
        const [result] = yield db_1.default.query(`UPDATE transports SET tran_name = ?, shipping_cost = ? WHERE tran_id = ?`, [transport_name, shipping_cost, transport_id] // Update shipping cost
        );
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error updating transport:", error);
        res.status(500).json({ error: "Failed to update transport" });
    }
}));
// Delete
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body; // Use req.body to access the parsed JSON data
        const { transport_id } = data;
        const [result] = yield db_1.default.query(`DELETE FROM transports WHERE transport_id = ?`, [transport_id]);
        res.json({ success: true, result });
    }
    catch (error) {
        console.error("Error deleting transport:", error);
        res.status(500).json({ error: "Failed to delete transport" });
    }
}));
exports.default = router;
