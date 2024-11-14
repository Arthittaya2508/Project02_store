import React from "react";
import Link from "next/link";
import Badge from "../../Navigation/Badge/order-badge";
import OrderDetailModal from "../Modal/orderDetailModal";

interface Order {
  orderNumber: string;
  customerName: string;
  deliveryAddress: string;
  totalPrice: number;
  orderStatus: string;
  productDetails: string;
  orderDateTime: string;
}

interface OrderTableProps {
  orders: Order[];
  openModal: (order: Order) => void; // เพิ่ม prop นี้
}

const OrderTable: React.FC<OrderTableProps> = ({ orders, openModal }) => {
  const statusColorMap: { [key: string]: string } = {
    ที่ยังไม่ได้รับ: "bg-yellow-400",
    ที่กำลังจัดเตรียม: "bg-orange-400",
    รอขนส่งมารับ: "bg-blue-400",
    ที่จัดส่งแล้ว: "bg-indigo-400",
    ที่ส่งเรียบร้อย: "bg-green-400",
    ที่ยกเลิก: "bg-red-400",
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">เลขที่ออเดอร์</th>
            <th className="py-3 px-6 text-left">ชื่อลูกค้า</th>
            <th className="py-3 px-6 text-left">ที่อยู่ที่จัดส่ง</th>
            <th className="py-3 px-6 text-left">วันเวลาที่สั่ง</th>
            <th className="py-3 px-6 text-right">ราคารวม</th>
            <th className="py-3 px-6 text-left">สถานะการสั่ง</th>
            <th className="py-3 px-6 text-left">รายละเอียดสินค้า</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {orders.map((order) => (
            <tr
              key={order.orderNumber}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {order.orderNumber}
              </td>
              <td className="py-3 px-6 text-left">{order.customerName}</td>
              <td className="py-3 px-6 text-left">{order.deliveryAddress}</td>
              <td className="py-3 px-6 text-left">{order.orderDateTime}</td>
              <td className="py-3 px-6 text-right">{order.totalPrice} บาท</td>
              <td>
                <Badge
                  label={order.orderStatus}
                  bgColor={statusColorMap[order.orderStatus]}
                />
              </td>
              <td className="py-3 px-6 text-left">
                <Link href={`/orderDetail?orderNumber=${order.orderNumber}`}>
                  <button className="text-blue-500 hover:underline">
                    ดูรายละเอียด
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
