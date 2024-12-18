import React from "react";

interface StatusFilterProps {
  orderStatuses: { label: string; count: number; bgColor: string }[];
  statusFilter: string | null;
  handleStatusFilter: (status: string) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({
  orderStatuses,
  statusFilter,
  handleStatusFilter,
}) => {
  return (
    <div className="overflow-x-auto mb-6">
      <div className="flex items-center min-w-[800px]">
        {orderStatuses.map((status, index) => (
          <React.Fragment key={status.label}>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleStatusFilter(status.label)}
            >
              <div
                className={`${
                  status.bgColor
                } w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-base
                    ${
                      statusFilter === status.label
                        ? "ring-4 ring-offset-2 ring-blue-500"
                        : ""
                    }
                    transition-all duration-200 hover:opacity-80`}
              >
                {status.count}
              </div>
              <span className="text-xs lg:text-sm mt-2 text-center w-20 lg:w-24">
                {status.label}
              </span>
            </div>
            {index < orderStatuses.length - 1 && (
              <div className="h-[2px] bg-gray-300 flex-grow mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatusFilter;
