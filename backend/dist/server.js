"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/types/route"));
const route_2 = __importDefault(require("./routes/sizes/route"));
const route_3 = __importDefault(require("./routes/transports/route"));
const route_4 = __importDefault(require("./routes/address/route"));
const route_5 = __importDefault(require("./routes/bands/route"));
const route_6 = __importDefault(require("./routes/genders/route"));
const route_7 = __importDefault(require("./routes/colors/route"));
const route_8 = __importDefault(require("./routes/products/route"));
const route_9 = __importDefault(require("./routes/product_details/route"));
const route_10 = __importDefault(require("./routes/registers/route"));
const route_11 = __importDefault(require("./routes/employee/route"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
//  router
app.use("/api/types", route_1.default);
app.use("/api/sizes", route_2.default);
app.use("/api/transports", route_3.default);
app.use("/api/addreses", route_4.default); //ยังไม่ได้
app.use("/api/bands", route_5.default);
app.use("/api/genders", route_6.default);
app.use("/api/colors", route_7.default);
app.use("/api/products", route_8.default);
app.use("/api/product_details", route_9.default);
app.use("/api/registers", route_10.default);
app.use("/api/employee", route_11.default);
// เริ่มต้นเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
