import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

// Import the images from assets
import image1 from "../../assets/Images/image1.jpg";
import image2 from "../../assets/Images/image2.jpg";
import image3 from "../../assets/Images/image3.jpg";
import image4 from "../../assets/Images/image4.jpg";
import image5 from "../../assets/Images/image5.jpg";
import image6 from "../../assets/Images/image6.jpg";
import image7 from "../../assets/Images/image7.jpg";
import image8 from "../../assets/Images/image8.jpg";
import image9 from "../../assets/Images/image9.jpg";
import image10 from "../../assets/Images/image10.jpg";
import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";

const PortfolioPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 10;
  const gridRef = useRef(null);

  // Portfolio items array with categories
  const portfolioItems = [
    {
      id: 1,
      image: image1,
      category: "Luxury Wedding Photography in Sri Lanka",
      price: "₹55,000",
    },
    {
      id: 2,
      image: image2,
      category: "Wedding Photography Packages",
      price: "₹45,000",
    },
    {
      id: 3,
      image: image3,
      category: "Top Wedding Outdoor Photography",
      price: "₹30,000",
    },
    {
      id: 4,
      image: image4,
      category: "Candid Wedding Photography",
      price: "₹25,000",
    },
    {
      id: 5,
      image: image5,
      category: "Best Budget Wedding Photography in Sri Lanka",
      price: "₹20,000",
    },
    {
      id: 6,
      image: image6,
      category: "South Indian Wedding Photography Studio",
      price: "₹35,000",
    },
    {
      id: 7,
      image: image7,
      category: "Pre-Wedding Photography in Scenic Locations",
      price: "₹15,000",
    },
    {
      id: 8,
      image: image8,
      category: "Brahmin Wedding Photography in Sri Lanka",
      price: "₹28,000",
    },
    {
      id: 9,
      image: image9,
      category: "Outdoor Photography for Weddings",
      price: "₹22,000",
    },
    {
      id: 10,
      image: image10,
      category: "Luxury Wedding Photography in Sri Lanka",
      price: "₹45,000",
    },
    {
      id: 11,
      image: image1,
      category: "Evening Reception Photography",
      price: "₹18,000",
    },
    {
      id: 12,
      image: image2,
      category: "Traditional Wedding Photography",
      price: "₹30,000",
    },
    {
      id: 13,
      image: image3,
      category: "Celebrity Style Wedding Photography",
      price: "₹65,000",
    },
    {
      id: 14,
      image: image4,
      category: "Destination Wedding Photography",
      price: "₹80,000",
    },
    {
      id: 15,
      image: image5,
      category: "Intimate Wedding Photography Package",
      price: "₹25,000",
    },
    {
      id: 16,
      image: image6,
      category: "Post-Wedding Photography Session",
      price: "₹15,000",
    },
    {
      id: 17,
      image: image7,
      category: "Engagement Photography Package",
      price: "₹20,000",
    },
    {
      id: 18,
      image: image8,
      category: "Wedding Portrait Photography",
      price: "₹18,000",
    },
    {
      id: 19,
      image: image9,
      category: "Artistic Wedding Photography in Sri Lanka",
      price: "₹40,000",
    },
    {
      id: 20,
      image: image10,
      category: "Cinematic Wedding Photography",
      price: "₹50,000",
    },
    {
      id: 21,
      image: image1,
      category: "Full Day Wedding Coverage",
      price: "₹35,000",
    },
    {
      id: 22,
      image: image2,
      category: "Half Day Wedding Coverage",
      price: "₹22,000",
    },
    {
      id: 23,
      image: image3,
      category: "Wedding Videography and Photography",
      price: "₹60,000",
    },
    {
      id: 24,
      image: image4,
      category: "Bridal Photography Sessions",
      price: "₹18,000",
    },
  ];

  // Calculate pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = portfolioItems.slice(
    indexOfFirstImage,
    indexOfLastImage
  );
  const totalPages = Math.ceil(portfolioItems.length / imagesPerPage);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the page when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const text = "text-gray-500 font-extralight ";
  return (
    <div className="min-h-screen bg-[#f0f2f4] mt-10">
      <div className="flex flex-col items-center justify-center w-full mx-auto py-4 sm:py-6 md:py-8 text-gray-900">
        {/* Hero Section */}
        <div className="mx-4 md:mx-auto max-w-7xl md:w-full px-4 sm:px-6 md:px-8 bg-gray-800 text-white py-6 sm:py-8 md:py-10 text-center rounded-lg mb-8">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold">
            <TextTransition
              text={"Portfolio of Wedding Photography"}
            />
          </h1>
          <p className="text-xs sm:text-sm mt-2">Home / Portfolio</p>
        </div>

        <PagesUI>
          {/* Introduction Text */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white">
            <p className="text-gray-700 font-bold text-lg sm:text-xl mb-4">
                <TextTransition text={"The Best Wedding Candid Photographers in Colombo"} />
              </p>
              <RevealOnScroll>
                <p className={text + "text-sm sm:text-base mb-4"}>
                  Stories are what shape us — often without us even realizing
                  it. Each moment, each memory, becomes part of a bigger story
                  we are continuously building. That is why photography holds
                  such profound importance — it captures not just moments, but
                  the very essence of life’s story. Imagine a photograph of a
                  grandmother smiling at her daughter and granddaughter. It’s
                  more than just a smile. The curve of her lips speaks of wisdom
                  earned over a lifetime. The twinkle in her eyes reflects
                  warmth, memories, and boundless love. That single image is
                  more than a frozen moment; it’s the story of three generations
                  of women — rooted together, celebrating each other. It’s the
                  passing of the baton across time, the spirit of a family
                  captured forever. At Chamodh Delpearachchi Photography, we
                  don’t just take pictures — we preserve stories that live on
                  for generations.
                </p>
              </RevealOnScroll>
              <p className="text-gray-700 font-bold text-lg sm:text-xl mb-4">
                <TextTransition text={"Stories through the picture"} />
              </p>

              <RevealOnScroll>
                <p className={text + "text-sm sm:text-base mb-2"}>
                  At <a href="">Chamodh Delpearachchi Photography</a>, we deeply
                  value <b>your stories</b>. That’s why we put immense care and
                  passion into every shot — because your photographs aren’t just
                  images, they are stories that deserve to be captured with
                  heart, preserved for a lifetime, and cherished forever.
                </p>
              </RevealOnScroll>

              <RevealOnScroll>
                <p className={text + "text-sm sm:text-base mb-2"}>
                  When it comes to snapping the best shots at your wedding,
                  photographers play an important role. But choosing the{" "}
                  <a href="">best candid wedding photographers</a> in Sri Lanka
                  or all over world for the big day can be overwhelming,
                  especially if you’re planning something big or are just
                  stepping into the world of weddings. That’s why it’s important
                  to find someone who can capture the spirit of your wedding and
                  tell a story that will be worth remembering forever through
                  their photography.
                </p>
              </RevealOnScroll>

              <RevealOnScroll>
                <p className={text + "text-sm sm:text-base mb-2"}>
                  And if you want to create stories through our pictures, don’t
                  forget to <a href="">contact us</a> for your big days. Let’s
                  create magic together, just allow us to stitch your life story
                  by capturing your big moments. A picture does speak volumes!
                </p>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>

          {/* Portfolio Section Title */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 text-center my-8">
              
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className=" flex flex-col items-center justify-center ">
              <div className="max-w-7xl px-4 sm:px-6 md:px-8 flex md:flex-row md:justify-between flex-col justify-center">
                <div className="md:basis-[30%] md:sticky md:top-4 md:self-start md:pt-20 md:pb-0 pt-2 pb-4">
                  <p className="text-gray-700 font-bold text-lg sm:text-2xl mb-4">
                    <TextTransition text={"Pictures = Stories"} />
                  </p>

                  <RevealOnScroll>
                    <p
                      className={text + "text-lg sm:text-xl mb-2 text-justify"}
                    >
                      It is often said that stories are what shape us. But it is
                      also through stories that we continue to shape ourselves,
                      and each other- whether or not we realize it at the time.
                      This is why here we are the great candid wedding
                      photographers to shape and preserve your moments as it
                      unfolds.
                    </p>

                    <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition duration-300 mt-4">
                      Book Now
                    </button>
                  </RevealOnScroll>
                </div>

                <div className="md:basis-[65%] flex flex-col justify-center items-center">
                  <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full"
                  >
                    {currentImages.map((item, index) => (
                      <RevealOnScroll
                        key={item.id}
                        threshold={0.1}
                        delay={index % 2 === 0 ? 0 : 0.2}
                      >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                          <div className="relative">
                            <img
                              src={item.image}
                              alt={item.category}
                              className="w-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="text-sm font-medium text-center">
                              {item.category}
                            </h3>
                          </div>
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>
                  <div className=" flex flex-row w-full items-center justify-center my-8">
                    <nav className="flex items-center space-x-2 font-medium">
                      <button
                        onClick={() =>
                          currentPage > 1 && paginate(currentPage - 1)
                        }
                        disabled={currentPage === 1}
                        className={`px-3 py-1 flex flex-row justify-center items-center ${
                          currentPage === 1
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-gray-700 hover:text-black"
                        }`}
                      >
                        <span>Previous</span>
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (number) => {
                          // Show first 3 pages, current page, and last page
                          if (
                            number <= 3 ||
                            number === currentPage ||
                            number === totalPages
                          ) {
                            return (
                              <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`px-3 py-1 rounded-md ${
                                  currentPage === number
                                    ? "bg-black text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`}
                              >
                                {number}
                              </button>
                            );
                          } else if (
                            number === 4 &&
                            currentPage > 4 &&
                            totalPages > 5
                          ) {
                            // Show ellipsis after first 3 pages
                            return (
                              <span key="ellipsis" className="px-2">
                                ...
                              </span>
                            );
                          }
                          return null;
                        }
                      )}

                      <button
                        onClick={() =>
                          currentPage < totalPages && paginate(currentPage + 1)
                        }
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 flex flex-row justify-center items-center ${
                          currentPage === totalPages
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-gray-700 hover:text-black"
                        }`}
                      >
                        <span>Next</span>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Stories Section */}
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto my-12 bg-white shadow-lg rounded-lg overflow-hidden">
              <h2 className="text-xl sm:text-2xl font-bold p-4 sm:p-6 border-b border-gray-200">
                Pictures + Stories
              </h2>

              <div className="p-4 sm:p-6">
                <p className="text-gray-700 text-sm sm:text-base mb-4">
                  At our studio, we believe that wedding photography isn&apos;t
                  just about taking pictures—it&apos;s about telling stories.
                  Every image we capture is a chapter in your unique love story,
                  carefully preserved for generations to come.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6">
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img
                      src={image5}
                      alt="Wedding Story"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="text-sm font-medium">
                        Anusha and Vikram&apos;s Beachside Wedding
                      </h3>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img
                      src={image6}
                      alt="Wedding Story"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="text-sm font-medium">
                        Priya and Rahul&apos;s Traditional Celebration
                      </h3>
                    </div>
                  </div>
                </div>

                <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition duration-300">
                  Read More Stories
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </PagesUI>
      </div>
    </div>
  );
};

export default PortfolioPage;
