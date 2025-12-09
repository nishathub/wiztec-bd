import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 6;
const TOTAL_ITEMS = 120;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

  const getPaginationNumbers = useMemo(() => {
    const firstSet = [1, 2, 3];
    const lastSet = [totalPages - 2, totalPages - 1, totalPages];
    const middleSet = [
      currentPage - 1,
      currentPage,
      currentPage + 1,
    ].filter(
      (p) => p > 3 && p < totalPages - 2
    );

    const allPages = [...firstSet, ...middleSet, ...lastSet];
    // Sort + remove duplicates
    const sorted = [...new Set(allPages)].sort((a, b) => a - b);

    // Insert "..." gap indicators
    const finalPages = [];
    sorted.forEach((p, idx) => {
      if (idx === 0) {
        finalPages.push(p);
      } else {
        if (p - sorted[idx - 1] > 1) {
          finalPages.push("...");
        }
        finalPages.push(p);
      }
    });

    return finalPages;
  }, [currentPage, totalPages]);

  const handlePageClick = (page) => {
    if (page === "...") return;
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-2 py-6 md:py-10 px-4 md:px-0">

      {/* Prev Button */}
      <button
        className="btn btn-outline border md:text-[16px] rounded-lg px-4 py-2 flex items-center gap-2"
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={18} /> Previous
      </button>

      {/* Center Pagination Numbers */}
      <div className="flex flex-wrap items-center gap-2">
        {getPaginationNumbers.map((page, idx) => (
          <button
            key={idx}
            onClick={() => handlePageClick(page)}
            className={`
              w-10 h-10 flex items-center justify-center rounded-xl text-sm 
              ${page === currentPage
                ? "bg-[#6a004b] text-white"
                : page === "..."
                ? "bg-gray-200 cursor-default"
                : "bg-gray-200 hover:bg-gray-300"
              }
            `}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="btn btn-outline border md:text-[16px] rounded-lg px-4 py-2 flex items-center gap-2"
        onClick={() =>
          currentPage < totalPages && setCurrentPage(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        Next <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
