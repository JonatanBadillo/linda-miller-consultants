import React from 'react';
import { motion } from 'framer-motion';

interface SubmitButtonProps {
  children: React.ReactNode;
}

export function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      className="bg-gradient-to-r from-[#007B8A] to-[#006270] text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 w-full md:w-auto"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}