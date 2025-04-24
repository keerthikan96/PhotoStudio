import React, { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

// Mock Google reviews data - replace this with actual API call in production
const mockGoogleReviews = [
  {
    id: "rev1",
    author_name: "Nomeesha Perera",
    rating: 5,
    text: "I've tried to write this review for Chamodh so many times, but words just can't do justice to how incredible he is! He's the most hassle-free photographer you'll ever meet, literally the chill guy.",
    time: 1741675463,
    relative_time_description: "a month ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/default-user",
  },
  {
    id: "rev2",
    author_name: "Dhanuka Jayasundara",
    rating: 5,
    text: "I highly recommend this talented and professional wedding photographer. Not only is he incredibly skilled, but he is also very friendly and easy to work with.",
    time: 1740675463,
    relative_time_description: "2 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/default-user",
  },
  {
    id: "rev3",
    author_name: "Anurudda Wathupola",
    rating: 5,
    text: "Perfectly covered our entire engagement ceremony with the morning shoot. Handed over the edits & enlargements within a month. No regrets with choosing them.",
    time: 1739675463,
    relative_time_description: "2 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/default-user",
  },
  {
    id: "rev4",
    author_name: "Michael Garcia",
    rating: 5,
    text: "Chandru and his team are truly talented! They photographed our corporate event and captured so many authentic moments. The turnaround time was impressive too.",
    time: 1738675463,
    relative_time_description: "3 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/default-user",
  },
  {
    id: "rev5",
    author_name: "Priya Patel",
    rating: 5,
    text: "We hired Focus Studios for our engagement photos and couldn't be happier! They knew exactly how to pose us to get the most flattering shots while still keeping everything feeling natural.",
    time: 1737675463,
    relative_time_description: "4 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/default-user",
  },
  {
    id: "rev6",
    author_name: "David Thompson",
    rating: 4,
    text: "Very professional service from start to finish. The photographers were creative and patient. The final photos exceeded our expectations.",
    time: 1736675463,
    relative_time_description: "5 months ago",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/default-user",
  },
];

const GoogleReviews = () => {
  const [current, setCurrent] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [reviews, setReviews] = useState([]); 
  
  // Filter reviews to only show those with ratings 4 and above
  const filteredReviews = reviews.length > 0 
    ? reviews.filter(review => review.rating >= 4)
    : mockGoogleReviews.filter(review => review.rating >= 4);
  
  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-yellow-500" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };
  
  // Responsive reviews per page
  const getReviewsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 3; // Desktop
    }
    return 3; // Default for SSR
  };
  
  const [reviewsPerPage, setReviewsPerPage] = useState(
    typeof window !== 'undefined' ? getReviewsPerPage() : 3
  );
  
  // Update reviewsPerPage on window resize
  useEffect(() => {
    const handleResize = () => {
      setReviewsPerPage(getReviewsPerPage());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

//   Function to fetch actual Google reviews - to be implemented with API key
const fetchGoogleReviews = async () => {
    const placeId = 'ChIJIfMquWj54joRlBLCLEJJCM8';
    const apiKey = 'AIzaSyDqDGNZwJIW-Zp7I9sV3h53xb3kKUJ_8FE'; 
    
    const corsProxy = 'https://corsproxy.io/?';
    const targetUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
  
    try {
      const response = await fetch(corsProxy + encodeURIComponent(targetUrl));
      console.log(response);
      const data = await response.json();
      console.log(data);
  
      const highRatedReviews = data.result.reviews.filter(review => review.rating >= 4);
      setReviews(highRatedReviews);
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      // Fallback to mock data if API fails
      setReviews(mockGoogleReviews);
    }
  };
  
  
  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  return (
    <section id="google-reviews" className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <RevealOnScroll>
        <div className="flex items-center justify-center mb-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/24px-Google_%22G%22_logo.svg.png" 
            alt="Google logo" 
            className="h-6 w-6 mr-2"
          />
          <p className="text-center text-gray-600 text-sm sm:text-base">Google Reviews</p>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-1 sm:mb-2">
          What Our Clients Say On Google
        </h2>
        <div className="flex justify-center items-center mb-6 sm:mb-8">
          <div className="flex items-center">
            {renderStars(4.8)}
            <span className="ml-2 text-yellow-500 font-semibold">4.8</span>
            <span className="ml-1 text-gray-600">/ 5</span>
          </div>
        </div>

        <div className="relative p-4 sm:p-8 rounded-lg max-w-7xl mx-auto min-h-[300px] sm:min-h-[400px] flex flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredReviews
              .slice(
                current * reviewsPerPage,
                current * reviewsPerPage + reviewsPerPage
              )
              .map((review) => (
                <div
                  key={review.id || review.time}
                  className={`bg-white p-6 rounded-lg shadow-lg flex flex-col h-full w-full transition-transform duration-300 ease-in-out ${
                    selectedCard === (review.id || review.time)
                      ? "transform scale-105 border-2 border-blue-400"
                      : "hover:scale-105 hover:shadow-xl"
                  }`}
                  onClick={() => setSelectedCard(review.id || review.time)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full object-cover border border-gray-200"
                          src={review.profile_photo_url}
                          alt={`${review.author_name}'s profile`}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(review.author_name) + "&background=random";
                          }}
                        />
                      </div>
                      <div className="ml-3 flex flex-col">
                        <p className="text-sm font-medium text-gray-900">{review.author_name}</p>
                        <p className="text-xs text-gray-500">{review.relative_time_description || "Recent"}</p>
                      </div>
                    </div>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/24px-Google_%22G%22_logo.svg.png" 
                      alt="Google logo" 
                      className="h-5 w-5 flex-shrink-0"
                    />
                  </div>
                  <div className="mb-3">{renderStars(review.rating)}</div>
                  <p className="text-gray-700 text-sm sm:text-base flex-grow overflow-hidden">
                    {review.text.length > 150
                      ? `${review.text.substring(0, 150)}...`
                      : review.text}
                  </p>
                </div>
              ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-3 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    current === index ? "w-6 bg-gray-700" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default GoogleReviews;