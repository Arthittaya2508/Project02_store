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
// Register a new user
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastname, telephone, email, username, password, image } = req.body;
        const userQuery = `
      INSERT INTO users (name, lastname, telephone, email, username, password, image) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
        // Run the query and get the result
        const [userResult] = yield db_1.default.query(userQuery, [
            name,
            lastname,
            telephone,
            email,
            username,
            password,
            image,
        ]);
        // Cast userResult to any to bypass TypeScript error
        const userId = userResult.insertId;
        res.json({ success: true, userId });
    }
    catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).json({ error: "Failed to register user" });
    }
}));
exports.default = router;
