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
// Fetch all employees
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.default.query("SELECT * FROM employees");
        res.json(rows);
    }
    catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ error: "Failed to fetch employees" });
    }
}));
// Register a new employee
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield db_1.default.getConnection(); // Get connection for transaction
    try {
        const data = req.body; // Access the request body
        const { name, lastname, telephone, email, username, password, image, position, } = data;
        yield connection.beginTransaction(); // Start transaction
        // Insert employee data
        const [employeeResult] = yield connection.query(`INSERT INTO employees (name, lastname, telephone, email, username, password, image, position)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [name, lastname, telephone, email, username, password, image, position]);
        const emp_id = employeeResult.insertId; // Type assertion for insertId
        yield connection.commit(); // Commit transaction
        res.json({ success: true, emp_id });
    }
    catch (error) {
        yield connection.rollback(); // Rollback transaction in case of error
        console.error("Error inserting employee:", error);
        res.status(500).json({ error: "Failed to register employee" });
    }
    finally {
        connection.release(); // Release connection
    }
}));
// Update employee information
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield db_1.default.getConnection(); // Get connection for transaction
    try {
        const data = req.body;
        const { emp_id, name, lastname, telephone, email, username, password, image, position, } = data;
        yield connection.beginTransaction(); // Start transaction
        // Update employee data
        yield connection.query(`UPDATE employees SET name = ?, lastname = ?, telephone = ?, email = ?, username = ?, password = ?, image = ?, position = ?
       WHERE id = ?`, [
            name,
            lastname,
            telephone,
            email,
            username,
            password,
            image,
            position,
            emp_id,
        ]);
        yield connection.commit(); // Commit transaction
        res.json({ success: true });
    }
    catch (error) {
        yield connection.rollback(); // Rollback transaction in case of error
        console.error("Error updating employee:", error);
        res.status(500).json({ error: "Failed to update employee" });
    }
    finally {
        connection.release(); // Release connection
    }
}));
// Delete employee
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield db_1.default.getConnection(); // Get connection for transaction
    try {
        const { emp_id } = req.body;
        yield connection.beginTransaction(); // Start transaction
        // Delete employee data
        yield connection.query(`DELETE FROM employees WHERE id = ?`, [emp_id]);
        yield connection.commit(); // Commit transaction
        res.json({ success: true });
    }
    catch (error) {
        yield connection.rollback(); // Rollback transaction in case of error
        console.error("Error deleting employee:", error);
        res.status(500).json({ error: "Failed to delete employee" });
    }
    finally {
        connection.release(); // Release connection
    }
}));
exports.default = router;
