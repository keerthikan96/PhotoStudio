import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  in: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -10
  }
};

// Animation transition settings
const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.35
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTransition;