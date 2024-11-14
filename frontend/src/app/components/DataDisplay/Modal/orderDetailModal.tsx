import React, { useState } from "react";
import OrderDetailTable from "../Table/orderDetailTable";

const orders = [
  {
    orderNumber: "001",
    customerName: "John Doe",
    deliveryAddress: "123 Main St, Bangkok",
    totalPrice: 500,
    orderStatus: "ที่ส่งเรียบร้อย",
    productDetails: "Product A, Product B",
    orderDateTime: "2024-08-11 14:30:00",
  },
  {
    orderNumber: "002",
    customerName: "Jane Smith",
    deliveryAddress: "456 Another St, Bangkok",
    totalPrice: 300,
    orderStatus: "ที่กำลังจัดเตรียม",
    productDetails: "Product C",
    orderDateTime: "2024-08-13 11:00:00",
  },
  {
    orderNumber: "003",
    customerName: "John Doe",
    deliveryAddress: "123 Main St, Bangkok",
    totalPrice: 500,
    orderStatus: "รอขนส่งมารับ",
    productDetails: "Product A, Product B",
    orderDateTime: "2024-08-14 15:30:00",
  },
  {
    orderNumber: "004",
    customerName: "Jane Smith",
    deliveryAddress: "456 Another St, Bangkok",
    totalPrice: 300,
    orderStatus: "ที่จัดส่งแล้ว",
    productDetails: "Product C",
    orderDateTime: "2024-09-16 17:00:00",
  },
  {
    orderNumber: "005",
    customerName: "John Doe",
    deliveryAddress: "123 Main St, Bangkok",
    totalPrice: 500,
    orderStatus: "ที่ส่งเรียบร้อย",
    productDetails: "Product A, Product B",
    orderDateTime: "2024-10-11 18:30:00",
  },
  {
    orderNumber: "006",
    customerName: "Jane Smith",
    deliveryAddress: "456 Another St, Bangkok",
    totalPrice: 300,
    orderStatus: "ที่ยกเลิก",
    productDetails: "Product C",
    orderDateTime: "2024-10-21 11:00:00",
  },
  {
    orderNumber: "007",
    customerName: "John Doe",
    deliveryAddress: "123 Main St, Bangkok",
    totalPrice: 500,
    orderStatus: "ที่ส่งเรียบร้อย",
    productDetails: "Product A, Product B",
    orderDateTime: "2024-10-25 10:30:00",
  },
  {
    orderNumber: "008",
    customerName: "Jane Smith",
    deliveryAddress: "456 Another St, Bangkok",
    totalPrice: 300,
    orderStatus: "ที่ส่งเรียบร้อย",
    productDetails: "Product C",
    orderDateTime: "2024-10-28 09:00:00",
  },
  {
    orderNumber: "009",
    customerName: "John Doe",
    deliveryAddress: "123 Main St, Bangkok",
    totalPrice: 500,
    orderStatus: "ที่ยังไม่ได้รับ",
    productDetails: "Product A, Product B",
    orderDateTime: "2024-11-01 19:30:00",
  },
  {
    orderNumber: "010",
    customerName: "Jane Smith",
    deliveryAddress: "456 Another St, Bangkok",
    totalPrice: 300,
    orderStatus: "ที่ยังไม่ได้รับ",
    productDetails: "Product C",
    orderDateTime: "2024-11-02 20:00:00",
  },
  {
    orderNumber: "011",
    customerName: "John Doe",
    deliveryAddress: "123 Main St, Bangkok",
    totalPrice: 500,
    orderStatus: "ที่ยังไม่ได้รับ",
    productDetails: "Product A, Product B",
    orderDateTime: "2024-11-03 12:30:00",
  },
  {
    orderNumber: "012",
    customerName: "Jane Smith",
    deliveryAddress: "456 Another St, Bangkok",
    totalPrice: 300,
    orderStatus: "ที่ยังไม่ได้รับ",
    productDetails: "Product C",
    orderDateTime: "2024-11-04 09:00:00",
  },
  {
    orderNumber: "013",
    customerName: "John Doe",
    deliveryAddress: "123 Main St, Bangkok",
    totalPrice: 500,
    orderStatus: "ที่ยังไม่ได้รับ",
    productDetails: "Product A, Product B",
    orderDateTime: "2024-11-05 08:30:00",
  },
  {
    orderNumber: "014",
    customerName: "Jane Smith",
    deliveryAddress: "456 Another St, Bangkok",
    totalPrice: 300,
    orderStatus: "ที่ยังไม่ได้รับ",
    productDetails: "Product C",
    orderDateTime: "2024-11-06 09:00:00",
  },
];

// Define the Order interface
interface Order {
  orderNumber: string;
  customerName: string;
  deliveryAddress: string;
  totalPrice: number;
  orderStatus: string;
  productDetails: string;
  orderDateTime: string;
}

// Modal component
interface OrderDetailModalProps {
  order: Order;
  isOpen: boolean;
  onClose: () => void;
}
const OrderDetailModal: React.FC<OrderDetailModalProps> = ({
  order,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4">รายละเอียดออเดอร์</h2>
        {/* Pass the order prop to OrderDetailTable */}
        <OrderDetailTable order={order} />
        <div>
          <p>
            <strong>เลขที่ออเดอร์:</strong> {order.orderNumber}
          </p>
          <p>
            <strong>ชื่อลูกค้า:</strong> {order.customerName}
          </p>
          <p>
            <strong>ที่อยู่ที่จัดส่ง:</strong> {order.deliveryAddress}
          </p>
          <p>
            <strong>วันเวลาที่สั่ง:</strong> {order.orderDateTime}
          </p>
          <p>
            <strong>ราคารวม:</strong> {order.totalPrice} บาท
          </p>
          <p>
            <strong>สถานะการสั่ง:</strong> {order.orderStatus}
          </p>
          <p>
            <strong>รายละเอียดสินค้า:</strong> {order.productDetails}
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 text-white bg-red-500 py-2 px-4 rounded"
        >
          ปิด
        </button>
      </div>
    </div>
  );
};

export default OrderDetailModal;
