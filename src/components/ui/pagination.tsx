import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  // Display first page, last page, and 1 page before and after current page
  const visiblePages = pages.filter(page => 
    page === 1 ||
    page === totalPages ||
    Math.abs(page - currentPage) <= 1
  );

  const renderPageLink = (page: number) => {
    const isCurrentPage = page === currentPage;
    
    return (
      <Link
        key={page}
        href={`${baseUrl}${page === 1 ? '' : `?page=${page}`}`}
        className={`px-4 py-2 text-sm font-medium rounded-lg ${
          isCurrentPage 
            ? 'bg-gray-900 text-white' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        {page}
      </Link>
    );
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      {/* Previous button */}
      {currentPage > 1 && (
        <Link
          href={`${baseUrl}${currentPage - 1 === 1 ? '' : `?page=${currentPage - 1}`}`}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
      )}

      {/* Page numbers */}
      {visiblePages.map((page, index, array) => {
        // Add ellipsis if there's a gap
        if (index > 0 && page - array[index - 1] > 1) {
          return (
            <div key={`gap-${page}`} className="flex items-center">
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
              {renderPageLink(page)}
            </div>
          );
        }
        return renderPageLink(page);
      })}

      {/* Next button */}
      {currentPage < totalPages && (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
}