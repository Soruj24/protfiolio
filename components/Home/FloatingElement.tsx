// components/ui/FloatingElement.tsx
import { motion } from "framer-motion";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
}

const FloatingElement = ({ children, delay = 0 }: FloatingElementProps) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -5 }}
    className="relative"
  >
    {children}
  </motion.div>
);

export default FloatingElement;