// src/components/ConfirmModal.js
import React from "react";

export default function ConfirmModal({ isOpen, title, message, confirmText = "Delete", cancelText = "Cancel", onConfirm, onClose }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div role="dialog" aria-modal="true" aria-labelledby="confirm-title" className="bg-white rounded p-4 z-10 w-full max-w-sm">
                <h3 id="confirm-title" className="font-semibold mb-2">{title}</h3>
                <p className="text-sm mb-4">{message}</p>
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-3 py-1 border rounded">{cancelText}</button>
                    <button onClick={() => { onConfirm(); }} className="px-3 py-1 bg-red-600 text-white rounded">{confirmText}</button>
                </div>
            </div>
        </div>
    );
}