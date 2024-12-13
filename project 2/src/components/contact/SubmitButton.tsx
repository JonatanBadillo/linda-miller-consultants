import React from 'react';
import { Send } from 'lucide-react';

interface SubmitButtonProps {
  children: React.ReactNode;
}

export function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="bg-[#007B8A] hover:bg-[#006270] text-white px-6 py-3 rounded-md flex items-center gap-2 transition-colors"
    >
      {children}
      <Send className="w-4 h-4" />
    </button>
  );
}