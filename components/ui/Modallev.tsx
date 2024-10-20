// components/ui/Modal.tsx
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export function Modallev({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg relative text-black">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-[20px] text-initial-gradient font-bold"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
