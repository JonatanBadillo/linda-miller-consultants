import React from 'react';
import { motion } from 'framer-motion';

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
}

export function TextArea({
  label,
  name,
  value,
  onChange,
  error,
  required,
}: TextAreaProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-[#007B8A]">*</span>}
      </label>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          className={`w-full px-4 py-3 rounded-xl border ${
            error ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-[#007B8A] focus:border-transparent transition-all duration-300 resize-none`}
          required={required}
        />
      </motion.div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}