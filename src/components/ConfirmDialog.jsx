import React, { useEffect } from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

export function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  type = 'warning',
  onConfirm,
  onCancel
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  const icons = {
    warning: <AlertTriangle size={24} />,
    danger: <AlertCircle size={24} />,
    info: <Info size={24} />
  };

  const confirmBtnClass = type === 'danger' ? 'btn-danger' : 'btn-primary';

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dialog-title"
      aria-describedby="modal-dialog-description"
      onClick={onCancel}
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`modal-icon-header ${type}`}>
          {icons[type] || <Info size={24} />}
        </div>

        <h3 id="modal-dialog-title" className="modal-title">
          {title}
        </h3>

        <p id="modal-dialog-description" className="modal-description">
          {message}
        </p>

        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-outline"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            className={`btn ${confirmBtnClass}`}
            onClick={onConfirm}
            autoFocus
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

