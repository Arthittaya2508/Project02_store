import React from "react";

interface SortProps {
  sortOrder: string;
  handleSort: (value: string) => void;
}

const Sort: React.FC<SortProps> = ({ sortOrder, handleSort }) => {
  return (
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
  );
};

export default Sort;
