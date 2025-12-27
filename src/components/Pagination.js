const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center gap-2 mt-4 py-2">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-3 py-1 font-bold border bg-purple-700 text-white  rounded disabled:opacity-50"
            >
                {"<"}
            </button>

            <button
                className="px-3 py-1 border rounded text-black"
            >
                {currentPage} of {totalPages}
            </button>


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
