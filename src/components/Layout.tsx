import { motion, TransitionDefinition } from "framer-motion";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
    <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{
            type: 1,
            stiffness: 200,
            damping: 20,
            duration: 1.5
        }}
    >
        {children}
    </motion.div>
);

export default Layout;