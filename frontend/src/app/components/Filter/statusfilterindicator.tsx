import React from "react";

interface StatusFilterIndicatorProps {
  statusFilter: string | null;
  statusColorMap: { [key: string]: string };
  handleClearFilter: () => void;
}

const StatusFilterIndicator: React.FC<StatusFilterIndicatorProps> = ({
  statusFilter,
  statusColorMap,
  handleClearFilter,
}) => {
  if (!statusFilter) return null;

  return (
    <div className="mb-4 flex items-center">
      <span className="mr-2">กำลังกรอง:</span>
      <span
        className={`${statusColorMap[statusFilter]} text-white px-2 py-1 rounded-full text-xs`}
      >
        {statusFilter}
      </span>
      <button
        onClick={handleClearFilter}
        className="ml-2 text-sm text-gray-500 hover:text-gray-700"
      >
        (ล้างตัวกรอง)
      </button>
    </div>
  );
};

export default StatusFilterIndicator;
