"use client";

import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Pagination } from "@heroui/react";

const PaginationControls = ({ totalPages, currentPage }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", newPage.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination className="justify-center">
      <Pagination.Content>
        {/* Previous */}
        <Pagination.Item>
          <Pagination.Previous
            isDisabled={currentPage === 1}
            onPress={() => handlePageChange(currentPage - 1)}
          >
            <Pagination.PreviousIcon />
            <span>Previous</span>
          </Pagination.Previous>
        </Pagination.Item>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <Pagination.Item key={pageNum}>
            <Pagination.Link
              isActive={pageNum === currentPage}
              onPress={() => handlePageChange(pageNum)}
            >
              {pageNum}
            </Pagination.Link>
          </Pagination.Item>
        ))}

        {/* Next */}
        <Pagination.Item>
          <Pagination.Next
            isDisabled={currentPage === totalPages}
            onPress={() => handlePageChange(currentPage + 1)}
          >
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
};

export default PaginationControls;