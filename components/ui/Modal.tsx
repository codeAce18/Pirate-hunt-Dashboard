// components/ui/Modal.tsx
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-initial-gradient w-[500px] p-6 rounded-lg shadow-lg relative text-white">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-[20px] text-white font-bold"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
