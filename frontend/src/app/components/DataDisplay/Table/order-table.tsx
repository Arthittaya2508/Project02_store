import React, { useState } from "react";
import Link from "next/link";
import OrderDetailModal from "../Modal/order-detail-modal";

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
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null); // เก็บออเดอร์ที่เลือก
  const [isModalOpen, setIsModalOpen] = useState(false); // สถานะเปิด/ปิด modal

  const openModal = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
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
              <td className="py-3 px-6 text-left">{order.orderStatus}</td>
              <td className="py-3 px-6 text-left">
                <button
                  onClick={() => openModal(order)}
                  className="text-blue-500 hover:underline"
                >
                  ดูรายละเอียด
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* แสดง modal เมื่อมีการเลือกออเดอร์ */}
      {selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default OrderTable;
