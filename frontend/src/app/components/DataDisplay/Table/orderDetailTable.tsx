import React from "react";

interface OrderDetailTableProps {
  order: {
    orderNumber: string;
    customerName: string;
    deliveryAddress: string;
    totalPrice: number;
    orderStatus: string;
    productDetails: string;
    orderDateTime: string;
  };
}

const OrderDetailTable: React.FC<OrderDetailTableProps> = ({ order }) => {
  return (
    <table className="min-w-full bg-white shadow-md rounded-lg">
      <tbody className="text-gray-600 text-sm font-light">
        <tr>
          <td className="py-3 px-6 text-left font-medium">เลขที่ออเดอร์:</td>
          <td className="py-3 px-6 text-left">{order.orderNumber}</td>
        </tr>
        <tr>
          <td className="py-3 px-6 text-left font-medium">ชื่อลูกค้า:</td>
          <td className="py-3 px-6 text-left">{order.customerName}</td>
        </tr>
        <tr>
          <td className="py-3 px-6 text-left font-medium">ที่อยู่ที่จัดส่ง:</td>
          <td className="py-3 px-6 text-left">{order.deliveryAddress}</td>
        </tr>
        <tr>
          <td className="py-3 px-6 text-left font-medium">วันเวลาที่สั่ง:</td>
          <td className="py-3 px-6 text-left">{order.orderDateTime}</td>
        </tr>
        <tr>
          <td className="py-3 px-6 text-left font-medium">ราคารวม:</td>
          <td className="py-3 px-6 text-left">{order.totalPrice} บาท</td>
        </tr>
        <tr>
          <td className="py-3 px-6 text-left font-medium">สถานะการสั่ง:</td>
          <td className="py-3 px-6 text-left">{order.orderStatus}</td>
        </tr>
        <tr>
          <td className="py-3 px-6 text-left font-medium">รายละเอียดสินค้า:</td>
          <td className="py-3 px-6 text-left">{order.productDetails}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailTable;
