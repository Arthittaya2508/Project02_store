import React from "react";
import { Pagination } from "@nextui-org/react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  handlePageChange,
}) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <Pagination
        loop
        showControls
        color="primary"
        total={totalPages}
        initialPage={1}
        page={currentPage}
        onChange={handlePageChange}
        aria-label="Pagination"
        className="rounded-lg p-2 shadow-lg"
      />
    </div>
  );
};

export default PaginationComponent;
