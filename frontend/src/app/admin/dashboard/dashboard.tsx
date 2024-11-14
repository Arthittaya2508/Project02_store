"use client";

import React from "react";
import Sort from "@/app/components/Sorting/orderSorting";
import PaginationComponent from "@/app/components/Navigation/Pagination/page";
import StatusFilter from "@/app/components/DataDisplay/Filter/statusfilter";
import StatusFilterIndicator from "@/app/components/DataDisplay/Filter/statusfilterindicator";
import OrderTable from "@/app/components/DataDisplay/Table/orderTable";

//
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

const Dashboard: React.FC = () => {
  // State declarations
  const [sortOrder, setSortOrder] = React.useState("date-desc");
  const [sortedOrders, setSortedOrders] = React.useState([...orders]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [statusFilter, setStatusFilter] = React.useState<string | null>(null);
  const ordersPerPage = 8;

  const orderStatuses = [
    { label: "ที่ยังไม่ได้รับ", count: 20, bgColor: "bg-yellow-400" },
    { label: "ที่กำลังจัดเตรียม", count: 15, bgColor: "bg-orange-400" },
    { label: "รอขนส่งมารับ", count: 10, bgColor: "bg-blue-400" },
    { label: "ที่จัดส่งแล้ว", count: 25, bgColor: "bg-indigo-400" },
    { label: "ที่ส่งเรียบร้อย", count: 18, bgColor: "bg-green-400" },
    { label: "ที่ยกเลิก", count: 5, bgColor: "bg-red-400" },
  ];

  const statusColorMap: { [key: string]: string } = {
    ที่ยังไม่ได้รับ: "bg-yellow-400",
    ที่กำลังจัดเตรียม: "bg-orange-400",
    รอขนส่งมารับ: "bg-blue-400",
    ที่จัดส่งแล้ว: "bg-indigo-400",
    ที่ส่งเรียบร้อย: "bg-green-400",
    ที่ยกเลิก: "bg-red-400",
  };

  const statusOrder = [
    "ที่ยังไม่ได้รับ",
    "ที่กำลังจัดเตรียม",
    "รอขนส่งมารับ",
    "ที่จัดส่งแล้ว",
    "ที่ส่งเรียบร้อย",
    "ที่ยกเลิก",
  ];
  const handleSort = (value: string) => {
    setSortOrder(value);
    let sorted = [...orders];
    if (statusFilter) {
      sorted = sorted.filter((order) => order.orderStatus === statusFilter);
    }
    switch (value) {
      case "date-desc":
        sorted.sort(
          (a, b) =>
            new Date(b.orderDateTime).getTime() -
            new Date(a.orderDateTime).getTime()
        );
        break;
      case "date-asc":
        sorted.sort(
          (a, b) =>
            new Date(a.orderDateTime).getTime() -
            new Date(b.orderDateTime).getTime()
        );
        break;
      case "status":
        sorted.sort(
          (a, b) =>
            statusOrder.indexOf(a.orderStatus) -
            statusOrder.indexOf(b.orderStatus)
        );
        break;
      default:
        break;
    }
    setSortedOrders(sorted);
  };

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status === statusFilter ? null : status);
    setCurrentPage(1);
  };

  const handleClearFilter = () => {
    setStatusFilter(null);
    setCurrentPage(1);
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(sortedOrders.length / ordersPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  React.useEffect(() => {
    handleSort(sortOrder);
  }, [statusFilter]);

  const openModal = (order: any) => {
    console.log("Modal opened for:", order);
  };

  return (
    <div>
      <div className="p-4 lg:p-6 lg:ml-10">
        <h1 className="text-xl lg:text-2xl font-bold mb-4">Dashboard</h1>
        <StatusFilter
          orderStatuses={orderStatuses}
          statusFilter={statusFilter}
          handleStatusFilter={handleStatusFilter}
        />
        <StatusFilterIndicator
          statusFilter={statusFilter}
          statusColorMap={statusColorMap}
          handleClearFilter={handleClearFilter}
        />
        <Sort sortOrder={sortOrder} handleSort={handleSort} />
        {/* Adding the order table component with the openModal prop */}
        <OrderTable orders={currentOrders} openModal={openModal} />
        <div className="flex justify-center mt-4">
          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
