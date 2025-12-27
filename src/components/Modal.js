import Button from "./Button";

/**
 * ContactModal
 * -------------
 * Reusable modal wrapper for creating/editing contacts.
 * Accepts dynamic form fields via `children` to keep it scalable.
 */
function Modal({
  isOpen,
  onClose,
  onSubmit,
  mode = "create",
  title,
  children,
}) {

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
      onClick={onClose} // click outside to close
    >
      {/* Modal Card */}
      <div
        className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()} // prevent close on inner click
      >
        {/* Header */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {title || (mode === "edit" ? "Edit Contact" : "New Contact")}
        </h2>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-4"
        >
          {/* Dynamic form fields */}
          {children}

          {/* Footer actions */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              text="Cancel"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2 shrink-0 bg-gray-500 hover:bg-gray-800"
            />

            <Button
              type="submit"
              text={mode === "edit" ? "Update" : "Create"}
              className="w-full sm:w-auto px-6 py-2 shrink-0 "
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
