export interface OrderStatus {
  label: string;
  count: number;
  bgColor: string;
}

export const orderStatuses: OrderStatus[] = [
  { label: "ที่ยังไม่ได้รับ", count: 20, bgColor: "bg-yellow-400" },
  { label: "ที่กำลังจัดเตรียม", count: 15, bgColor: "bg-orange-400" },
  { label: "รอขนส่งมารับ", count: 10, bgColor: "bg-blue-400" },
  { label: "ที่จัดส่งแล้ว", count: 25, bgColor: "bg-indigo-400" },
  { label: "ที่ส่งเรียบร้อย", count: 18, bgColor: "bg-green-400" },
  { label: "ที่ยกเลิก", count: 5, bgColor: "bg-red-400" },
];

export const statusColorMap: { [key: string]: string } = {
  ที่ยังไม่ได้รับ: "bg-yellow-400",
  ที่กำลังจัดเตรียม: "bg-orange-400",
  รอขนส่งมารับ: "bg-blue-400",
  ที่จัดส่งแล้ว: "bg-indigo-400",
  ที่ส่งเรียบร้อย: "bg-green-400",
  ที่ยกเลิก: "bg-red-400",
};

// Optional: Add status text color mapping if needed
export const statusTextColorMap: { [key: string]: string } = {
  ที่ยังไม่ได้รับ: "text-yellow-700",
  ที่กำลังจัดเตรียม: "text-orange-700",
  รอขนส่งมารับ: "text-blue-700",
  ที่จัดส่งแล้ว: "text-indigo-700",
  ที่ส่งเรียบร้อย: "text-green-700",
  ที่ยกเลิก: "text-red-700",
};

// Optional: Add status descriptions if needed
export const statusDescriptions: { [key: string]: string } = {
  ที่ยังไม่ได้รับ: "ออเดอร์ใหม่ที่ยังไม่ได้รับการดำเนินการ",
  ที่กำลังจัดเตรียม: "กำลังจัดเตรียมสินค้าในออเดอร์",
  รอขนส่งมารับ: "สินค้าพร้อมส่ง รอขนส่งมารับ",
  ที่จัดส่งแล้ว: "สินค้าอยู่ในระหว่างการจัดส่ง",
  ที่ส่งเรียบร้อย: "จัดส่งสินค้าเรียบร้อยแล้ว",
  ที่ยกเลิก: "ออเดอร์ถูกยกเลิก",
};

// Optional: Add status order for sorting if needed
export const statusOrder: { [key: string]: number } = {
  ที่ยังไม่ได้รับ: 1,
  ที่กำลังจัดเตรียม: 2,
  รอขนส่งมารับ: 3,
  ที่จัดส่งแล้ว: 4,
  ที่ส่งเรียบร้อย: 5,
  ที่ยกเลิก: 6,
};
