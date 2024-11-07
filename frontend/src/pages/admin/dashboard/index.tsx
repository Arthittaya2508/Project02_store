"use client";
import React from "react";
import { Pagination } from "@nextui-org/react";
import { OrderStepper } from "@/components/DataDisplay/Stepper/orderstepper";
import { StatusFilter } from "@/components/DataDisplay/Filter/orderstatusfilter";
import { orderStatuses, statusColorMap } from "@/constants/orderstatus";
import { orders } from "@/data/orders";

const Dashboard: React.FC = () => {
  // State declarations
  const [sortOrder, setSortOrder] = React.useState("date-desc");
  const [sortedOrders, setSortedOrders] = React.useState([...orders]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [statusFilter, setStatusFilter] = React.useState<string | null>(null);
  const ordersPerPage = 8;

  // Sorting function with status filter
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
        sorted.sort((a, b) => a.orderStatus.localeCompare(b.orderStatus));
        break;
      default:
        break;
    }

    setSortedOrders(sorted);
  };

  // Status filter handler
  const handleStatusFilter = (status: string) => {
    setStatusFilter(status === statusFilter ? null : status);
    setCurrentPage(1);
  };

  // Pagination calculations
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(sortedOrders.length / ordersPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Effect for sorting and filtering
  React.useEffect(() => {
    handleSort(sortOrder);
  }, [statusFilter]);

  return (
    <div className="p-4 lg:p-6 lg:ml-10">
      <h1 className="text-xl lg:text-2xl font-bold mb-4">Dashboard</h1>

      <OrderStepper
        orderStatuses={orderStatuses}
        statusFilter={statusFilter}
        onStatusFilter={handleStatusFilter}
      />

      <StatusFilter
        statusFilter={statusFilter}
        statusColorMap={statusColorMap}
        onStatusFilter={handleStatusFilter}
      />

      {/* Sort Dropdown */}
      <div className="flex justify-end mb-4">
        <div className="relative">
          <select
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="" disabled>
              เรียงลำดับตาม
            </option>
            <option value="date-desc">วันที่ล่าสุด</option>
            <option value="date-asc">วันที่เก่าสุด</option>
            <option value="status">สถานะ</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Pagination
          loop
          showControls
          color="success"
          total={totalPages}
          initialPage={1}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Dashboard;
