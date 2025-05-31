import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top for better UX with page transitions
    // This happens before the page transition animation starts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Using instant to avoid conflicting with page transition animations
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
