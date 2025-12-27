/**
 * Pagination
 * Props:
 * - `currentPage` (number): 1-based index of the active page
 * - `totalPages` (number): total number of pages available
 * - `onPageChange` (function): callback invoked with the new page number
 *
 * This is a minimal pager with previous/next buttons and a simple
 * status display. Buttons are disabled at the boundaries.
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        // Container centers the pager and adds spacing
        <div className="flex justify-center gap-2 mt-4 py-2">
            {/* Previous button: disabled when on first page */}
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-3 py-1 font-bold border bg-purple-700 text-white  rounded disabled:opacity-50"
            >
                {"<"}
            </button>

            {/* Current page indicator (non-interactive). Could be expanded to show page numbers. */}
            <button className="px-3 py-1 border rounded text-black">
                {currentPage} of {totalPages}
            </button>

            {/* Next button: disabled when on last page */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-3 py-1 font-bold border bg-purple-700 text-white  rounded disabled:opacity-50"
            >
                {">"}
            </button>
        </div>
    );
};

export default Pagination;
