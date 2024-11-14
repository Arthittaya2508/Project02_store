"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface Order {
  orderNumber: string;
  customerName: string;
  deliveryAddress: string;
  totalPrice: number;
  orderStatus: string;
  productDetails: string;
  orderDateTime: string;
}

const OrderDetail = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderNumber = searchParams.get("orderNumber");

  useEffect(() => {
    // สมมติว่าคุณดึงข้อมูลคำสั่งซื้อจาก API หรือแหล่งข้อมูลในที่เดียวกัน
    const fetchOrder = async () => {
      const orderData = {
        orderNumber: "001",
        customerName: "John Doe",
        deliveryAddress: "123 Main St, Bangkok",
        totalPrice: 500,
        orderStatus: "ที่ส่งเรียบร้อย",
        productDetails: "Product A, Product B",
        orderDateTime: "2024-08-11 14:30:00",
      };
      setOrder(orderData);
    };

    if (orderNumber) {
      fetchOrder();
    }
  }, [orderNumber]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        รายละเอียดออเดอร์ {order.orderNumber}
      </h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-4 font-semibold bg-gray-100">ชื่อลูกค้า</td>
            <td className="py-2 px-4">{order.customerName}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-semibold bg-gray-100">
              ที่อยู่ที่จัดส่ง
            </td>
            <td className="py-2 px-4">{order.deliveryAddress}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-semibold bg-gray-100">
              วันเวลาที่สั่ง
            </td>
            <td className="py-2 px-4">{order.orderDateTime}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-semibold bg-gray-100">ราคารวม</td>
            <td className="py-2 px-4">{order.totalPrice} บาท</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-semibold bg-gray-100">
              สถานะการสั่ง
            </td>
            <td className="py-2 px-4">{order.orderStatus}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4 font-semibold bg-gray-100">
              รายละเอียดสินค้า
            </td>
            <td className="py-2 px-4">{order.productDetails}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => router.back()}
        className="mt-4 text-blue-500 hover:underline"
      >
        ย้อนกลับ
      </button>
    </div>
  );
};

export default OrderDetail;
