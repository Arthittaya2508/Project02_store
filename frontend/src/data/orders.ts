export interface Order {
  orderNumber: string;
  customerName: string;
  deliveryAddress: string;
  totalPrice: number;
  orderStatus: string;
  productDetails: string;
  orderDateTime: string;
}

export const orders: Order[] = [
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