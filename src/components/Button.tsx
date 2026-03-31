import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, variant = 'primary', className = '', onClick, type = 'button' }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#5A3A22] text-white hover:bg-[#4A2A12] focus:ring-[#5A3A22]",
    secondary: "bg-[#D4AF37] text-[#1A1A1A] hover:bg-[#C49F27] focus:ring-[#D4AF37]",
    outline: "border-2 border-[#5A3A22] text-[#5A3A22] hover:bg-[#5A3A22] hover:text-white focus:ring-[#5A3A22]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
