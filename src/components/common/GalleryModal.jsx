import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// Add custom styles for animations
const galleryStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slide-in {
    from { transform: scale(0.95) translateY(20px); opacity: 0; }
    to { transform: scale(1) translateY(0); opacity: 1; }
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
  
  .animate-slide-in {
    animation: slide-in 0.4s ease-out;
  }
  
  .glass-effect {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
`;

// Inject styles
if (typeof document !== 'undefined' && !document.getElementById('gallery-modal-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'gallery-modal-styles';
  styleSheet.textContent = galleryStyles;
  document.head.appendChild(styleSheet);
}

const GalleryModal = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onImageChange 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex || 0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;
  // Update local state when currentIndex prop changes
  useEffect(() => {
    if (currentIndex !== undefined) {
      setCurrentImageIndex(currentIndex);
    }
  }, [currentIndex]);

  // Reset image loaded state when image changes
  useEffect(() => {
    setImageLoaded(false);
  }, [currentImageIndex]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    if (onImageChange) onImageChange(nextIndex);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    if (onImageChange) onImageChange(prevIndex);
    setTimeout(() => setIsAnimating(false), 300);
  };
  const goToImage = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex(index);
    if (onImageChange) onImageChange(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goToNext, goToPrevious]);

  // Handle touch events for swipe navigation
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !images.length) return null;

  const currentImage = images[currentImageIndex];  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center transition-all duration-500 animate-slide-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative max-w-7xl max-h-full mx-auto px-6 flex items-center justify-center">        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-60 p-3 bg-white/10 hover:bg-white/20 glass-effect rounded-2xl text-white transition-all duration-300 hover:scale-110 border border-white/20 shadow-xl group"
          aria-label="Close gallery"
        >
          <HiX className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Image Counter */}
        <div className="absolute top-6 left-6 z-60 px-4 py-2 bg-white/10 glass-effect rounded-2xl text-white text-sm font-medium border border-white/20 shadow-xl animate-fade-in">
          <span className="font-semibold">{currentImageIndex + 1}</span>
          <span className="text-white/70 mx-1">/</span>
          <span className="text-white/90">{images.length}</span>
        </div>        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={goToPrevious}
            disabled={isAnimating}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-60 p-4 bg-white/10 hover:bg-white/20 glass-effect rounded-2xl text-white transition-all duration-300 hover:scale-110 border border-white/20 shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous image"
          >
            <HiChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-300" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={goToNext}
            disabled={isAnimating}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-60 p-4 bg-white/10 hover:bg-white/20 glass-effect rounded-2xl text-white transition-all duration-300 hover:scale-110 border border-white/20 shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next image"
          >
            <HiChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
        )}{/* Main Image */}
        <div 
          className="relative max-w-5xl max-h-[85vh] mx-auto"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >          {/* Loading spinner */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/5 glass-effect rounded-3xl">
              <div className="w-10 h-10 border-3 border-white/20 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          
          <img
            src={currentImage.src || currentImage}
            alt={currentImage.alt || `Portfolio image ${currentImageIndex + 1}`}
            className={`max-w-full max-h-full w-auto h-auto object-contain rounded-3xl shadow-2xl glass-effect border border-white/20 transition-all duration-500 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ maxHeight: '85vh' }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
          
          {/* Image Title/Description (if provided) */}
          {currentImage.title && imageLoaded && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-3xl backdrop-blur-sm animate-fade-in">
              <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
                {currentImage.title}
              </h3>
              {currentImage.description && (
                <p className="text-gray-200 text-sm leading-relaxed">
                  {currentImage.description}
                </p>
              )}
            </div>
          )}
        </div>        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 max-w-full overflow-x-auto px-6 animate-fade-in">
            <div className="flex space-x-3 bg-white/10 glass-effect rounded-3xl px-5 py-4 border border-white/20 shadow-xl">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  disabled={isAnimating}
                  className={`relative w-16 h-16 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 border-2 group disabled:cursor-not-allowed ${
                    index === currentImageIndex 
                      ? 'border-white shadow-2xl scale-110 ring-2 ring-white/50' 
                      : 'border-white/30 opacity-70 hover:opacity-100 hover:border-white/60 hover:shadow-lg'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <img
                    src={image.src || image}
                    alt={image.alt || `Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Active indicator with gradient */}
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent glass-effect rounded-2xl" />
                  )}
                  {/* Subtle glow effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  } bg-gradient-to-br from-transparent via-white/5 to-white/10`} />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// PropTypes for type checking
GalleryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ])
  ).isRequired,
  currentIndex: PropTypes.number,
  onImageChange: PropTypes.func,
};

// Default props
GalleryModal.defaultProps = {
  currentIndex: 0,
  onImageChange: null,
};

export default GalleryModal;
