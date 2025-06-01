import { useNavigate } from "react-router-dom";
import { RevealOnScroll } from "../RevealOnScroll";
import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";
import PricingPackage from "../PricingPackage";
import FAQ from "../FAQ"; // Import the new FAQ component

// Import all images used in pricing page
import bg3 from "../../assets/Images/bg-3.jpg";
import bg4 from "../../assets/Images/bg-4.jpg";
import bg5 from "../../assets/Images/bg-5.jpg";
import bg13 from "../../assets/Images/bg-13.jpg";
import image1 from "../../assets/Images/image1.jpg";
import image2 from "../../assets/Images/image2.jpg";
import image3 from "../../assets/Images/image3.jpg";
import image4 from "../../assets/Images/image4.jpg";
import image5 from "../../assets/Images/image5.jpg";
import pt1 from "../../assets/Images/pt-1.jpg";
import pt2 from "../../assets/Images/pt-2.jpg";
import pt3 from "../../assets/Images/pt-3.jpg";
import pt4 from "../../assets/Images/pt-4.jpg";
import chamodMain from "../../assets/Images/chamodMain.jpg";

const PricingPage = () => {
  const text = "text-gray-500 font-extralight ";  
  const navigate = useNavigate();

  const weddingPackages = [
    {
      title: "Package 01",
      subtitle: "Digital Coverage Only",
      price: "LKR 170,000",
      features: [
        "10 Hours Exclusive Coverage",
        "Bride & Groom getting ready at the hotel",
        "Ceremony & Reception Coverage", 
        "Couple shoot at preferred location",
        "2 Professional Photographers",
        "200 Retouched Images",
        "All Unedited Images on USB"
      ],
      delay: 0,
    },
    {
      title: "Package 02", 
      subtitle: "1 Album Package",
      price: "LKR 220,000",
      features: [
        "Includes all of Package 01 plus:",
        "12x30 Fine Art Album (50 pages)",
        "2 Enlargements (16x24)",
        "100 Thank You Cards"
      ],
      delay: 0.2,
    },
    {
      title: "Package 03",
      subtitle: "Wedding + Pre-Casual Session", 
      price: "LKR 260,000",
      features: [
        "5 Hours Preshoot",
        "10 Hours Wedding Day",
        "60 Preshoot + 200 Wedding Edited Photos",
        "12x30 Album (50 pages), 2 Enlargements",
        "100 Thank You Cards"
      ],
      delay: 0.4,
    },
    {
      title: "Package 04",
      subtitle: "Wedding + Preshoot + Homecoming",
      price: "LKR 330,000", 
      features: [
        "Includes Package 03 +",
        "2 Hours HC Coverage",
        "Additional Couple Shoot for HC"
      ],
      delay: 0.6,
    },
    {
      title: "Package 05",
      subtitle: "Wedding + HC (2 Albums)",
      price: "LKR 370,000",
      features: [
        "10 Hours Wedding, 8 Hours HC",
        "12x30 (Wedding) + 12x18 (HC) Albums",
        "4 Enlargements (Wedding)",
        "100 Thank You Cards"
      ],
      delay: 0.8,
    },
    {
      title: "Package 06",
      subtitle: "Wedding + Preshoot + HC (2 Albums)",
      price: "LKR 430,000",
      features: [
        "5 Hours Preshoot",
        "10 Hours Wedding",
        "8 Hours HC", 
        "2 Albums (12x30 & 12x18), 4 Enlargements",
        "60 Preshoot, 200 Wedding, 140 HC Edited Photos"
      ],
      delay: 1.0,
    }
  ];
  // Homecoming packages
  const homecomingPackages = [
    {
      title: "HC Package 01",
      subtitle: "Shoot Only",
      price: "LKR 70,000",
      features: [
        "Couple shoot at preferred location",
        "80 Retouched Photos"
      ],
      delay: 0,
    },
    {
      title: "HC Package 02", 
      subtitle: "Shoot + Reception Coverage",
      price: "LKR 140,000",
      features: [
        "Shoot + Reception Coverage",
        "12x16 Album + 1 Enlargement", 
        "150 Retouched Photos"
      ],
      delay: 0.2,
    },
    {
      title: "HC Package 03",
      subtitle: "Enhanced Coverage",
      price: "LKR 170,000", 
      features: [
        "Same as Package 02 +",
        "2 Enlargements",
        "100 Thank You Cards"
      ],
      delay: 0.4,
    }
  ];

  // Pre-casual and engagement packages  
  const otherPackages = [
    {
      category: "Pre-Casual Sessions",
      packages: [
        { name: "Preshoot 01", details: "60 Photos, USB", price: "LKR 100,000" },
        { name: "Preshoot 02", details: "+2 Wooden Enlargements", price: "LKR 120,000" },
        { name: "Preshoot 03", details: "+12x16/8x24 Album", price: "LKR 150,000" }
      ]
    },
    {
      category: "Engagement Packages", 
      packages: [
        { name: "Engagement 01", details: "5 Hrs, 80 Photos", price: "LKR 80,000" },
        { name: "Engagement 02", details: "+2 Wooden Enlargements", price: "LKR 100,000" },
        { name: "Engagement 03", details: "+Album & 2 Enlargements", price: "LKR 150,000" }
      ]
    }
  ];

  // Extras and add-ons
  const extras = [
    { item: "Album Extra Pages", price: "LKR 1,200–2,500 per sheet" },
    { item: "Thank You Cards", price: "LKR 200 each" },
    { item: "Enlargements", price: "LKR 5,000–20,000" },
    { item: "Signature Board (12x18)", price: "LKR 10,000 (2-week notice)" },
    { item: "Album Copies", price: "Main – LKR 60,000 / Preshoot – LKR 40,000" }
  ];
  // FAQ data for easier management
  const faqs = [
    {
      question: "What is your booking procedure?",
      answer:
        "To confirm your booking, we require a LKR 20,000 non-refundable advance payment. Full payment must be made 1 week before the event."
    },
    {
      question: "How long does it take to receive our photos?",
      answer:
        "Delivery timelines vary by package: 4 months for weddings, 3 months for engagements, and 2 months for preshoots. All edited images are delivered digitally."
    },
    {
      question: "Do you cover outstation events?",
      answer:
        "Yes, we cover events across Sri Lanka. Additional outstation charges will apply depending on the location and distance."
    },
    {
      question: "Can we get extra hours of coverage?",
      answer:
        "Absolutely! Extra hour coverage is available at LKR 10,000 per hour. Please discuss this requirement during booking."
    },
    {
      question: "What about social media usage of our photos?",
      answer:
        "Only selected images will be shared on our social media platforms for portfolio purposes. We maintain strict privacy and will not share images without permission."
    },
    {
      question: "When will we receive enlargements and albums?",
      answer:
        "Enlargements are delivered 2 weeks post-event. Albums are included in the delivery timeline mentioned above (2-4 months depending on the package)."
    }
  ];
  return (
    <div
      id="pricing"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Subtle background pattern with parallax effect */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/20"></div>      <div className="relative z-10">        {/* Hero Section */}
        <div className="relative h-screen bg-gradient-to-r from-black/80 to-black/50 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: `url(${bg13})`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
          
          {/* Floating elements for modern touch */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>            <div className="relative z-10 text-center text-white px-4">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider uppercase">
                Wedding Packages
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              <TextTransition text="PRICING" />
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
              Capturing life&apos;s most precious moments with passion and
              artistry
            </p>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
            <div className="animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content wrapped in PagesUI */}
        <PagesUI>
          {" "}
          {/* Introduction */}
          {/* <RevealOnScroll>
            <div className="relative max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white overflow-hidden">
            
              <div
                className="absolute right-0 top-0 w-1/3 h-full bg-cover bg-center opacity-10"
                style={{
                  backgroundImage: `url(${image1})`,
                }}
              ></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  <TextTransition
                    text={"Sri Lankan Wedding Photography Specialists"}
                  />
                </h2>
                <p className={text + "text-sm sm:text-base mb-4"}>
                  At Chamodh Delpearachchi Photography, we understand the rich
                  traditions and vibrant ceremonies that make Sri Lankan
                  weddings unique. Our expertise lies in capturing the essence
                  of your special day, from intimate Poruwa ceremonies to grand
                  hotel celebrations.
                </p>
                <RevealOnScroll>
                  <p className={text + "text-sm sm:text-base mb-4"}>
                    Your wedding day is more than just an event — it&apos;s a
                    reflection of love, laughter, and timeless connections. At
                    Chamodh Delpearachchi Photography, we know that every
                    emotion deserves to be beautifully preserved through
                    stunning photography. That&apos;s why our wedding
                    photography pricing is crafted to ensure that we capture
                    your day exactly, safely, and creatively that you can both
                    cherish and rejoice.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll>
                  <p className={text + "text-sm sm:text-base mb-4"}>
                    Unlike others, we don&apos;t have one-size-fits-all for
                    creative wedding photography. If you&apos;re wedding small,
                    heavily staged, or fifteenth portfolio, we may not be the
                    right studio. If you&apos;re getting married in a venue with
                    complicated lighting, varying backgrounds, and multiple
                    locations, you&apos;ve found the right partner! We excel
                    only in the right place.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll>
                  <p className={text + "text-sm sm:text-base"}>
                    We know something has to be functional, will truly be there
                    to capture every fleeting second. Our wedding photography
                    pricing packages are designed to give you clarity,
                    flexibility, and confidence. We are pricing as part of the
                    story — not just numbers, but a reflection of the value we
                    deliver to document every of the most meaningful events.
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          </RevealOnScroll> */}
          {/* How Pricing Works */}
          <RevealOnScroll>
            <div className="relative max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white overflow-hidden">
              {/* Background image overlay */}
              <div
                className="absolute left-0 top-0 w-full h-full bg-cover bg-center opacity-10"
                style={{
                  backgroundImage: `url(${image2})`,
                }}
              ></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  <TextTransition
                    text={"How Our Wedding Photography Pricing Works"}
                  />
                </h2>
                <RevealOnScroll>
                  <p className={text + "text-sm sm:text-base mb-4"}>
                    At Chamodh Delpearachchi Photography, we understand that no
                    two weddings are the same. That&apos;s why our pricing
                    structure has been crafted after we researched how real
                    weddings are the same — whether it&apos;s a cozy backyard
                    ceremony or a five-day destination event across multiple
                    sites. That&apos;s why our wedding photography pricing
                    structure adapts to your unique celebration, without
                    compromising on quality or creativity.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll>
                  <p className={text + "text-sm sm:text-base mb-4"}>
                    We pride ourselves on transparency — you&apos;ll always know
                    exactly what you&apos;re getting with us. We never upsell or
                    attempt to exploit what we know is a special event for
                    anyone. Our goal is to make your investment feel confident
                    and worthwhile.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll>
                  <p className={text + "text-sm sm:text-base"}>
                    No matter your code — from an intimate gathering to a grand
                    affair — our artistic approach, attending style, and editing
                    consistency stay the same. We don&apos;t inflate our
                    services by padding labels like &quot;basic&quot; or
                    &quot;luxury&quot;. Instead, our photography service pricing
                    is based purely on what&apos;s needed to tell your story the
                    best way possible.
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          </RevealOnScroll>{" "}
          {/* What Influences Pricing */}
          {/* <RevealOnScroll>
            <div className="relative max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white overflow-hidden">
            
              <div
                className="absolute right-0 top-0 w-2/5 h-full bg-cover bg-center opacity-15"
                style={{
                  backgroundImage: `url(${image3})`,
                }}
              ></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  <TextTransition text={"What influences pricing?"} />
                </h2>
                <p className="text-gray-700 text-sm sm:text-base mb-3">
                  Your pricing depends on several important factors:
                </p>
                <ul className="list-disc list-inside text-gray-500 font-extralight text-sm sm:text-base space-y-2">
                  <li>The scale of your event (intimate or grand)</li>
                  <li>The number of events covered</li>
                  <li>
                    The size of the photography and videography crew required
                  </li>
                  <li>
                    Additional services like drone coverage or extra
                    cinematography
                  </li>
                  <li>Travel requirements (if any)</li>
                </ul>
                <p className={text + "text-sm sm:text-base mt-4"}>
                  Rest assured, whether it&apos;s a outdoor view or an extended
                  hours, the quality, creativity, and storytelling style you
                  love in our portfolio will remain unchanged.
                </p>
              </div>
            </div>
          </RevealOnScroll> */}
          {/* Portfolio Showcase */}
          <RevealOnScroll>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  <TextTransition text={"Our Wedding Photography Portfolio"} />
                </h2>
                <p className={text + "text-base sm:text-lg"}>
                  Glimpse into the magical moments we&apos;ve captured
                </p>
              </div>

              {/* Image Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <RevealOnScroll delay={0}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
                    <img
                      src={pt1}
                      alt="Wedding Photography Sample 1"
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.1}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
                    <img
                      src={pt2}
                      alt="Wedding Photography Sample 2"
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.2}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
                    <img
                      src={pt3}
                      alt="Wedding Photography Sample 3"
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.3}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
                    <img
                      src={pt4}
                      alt="Wedding Photography Sample 4"
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Statistics Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <RevealOnScroll delay={0}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">
                      Weddings Captured
                    </div>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll delay={0.1}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      50K+
                    </div>
                    <div className="text-sm text-gray-600">
                      Photos Delivered
                    </div>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll delay={0.2}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      8+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll delay={0.3}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">Happy Couples</div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </RevealOnScroll>{" "}
          {/* Two-column layout for Packages and Text */}
          <RevealOnScroll>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-8 pb-6">
              {/* Background overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-5 rounded-lg"
                style={{
                  backgroundImage: `url(${bg5})`,
                }}
              ></div>
              <div className="relative z-10 text-center">
                <p className="text-gray-700 font-bold text-lg sm:text-2xl mb-4">
                  <TextTransition
                    text={"Wedding Photography Coverage Options"}
                  />
                </p>
                <RevealOnScroll>
                  <p
                    className={
                      text + "text-base sm:text-xl mb-6 max-w-3xl mx-auto"
                    }
                  >
                    To help you visualize what can be included, here are some
                    flexible structures we offer for your special day. Each
                    package is designed to capture your unique story.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll>
                  <button className="bg-black text-white px-6 py-3 rounded-lg text-sm hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Book Now
                  </button>
                </RevealOnScroll>
              </div>
            </div>            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-6 flex flex-col justify-center items-center">
              {/* Wedding Packages Section */}
              <div className="w-full mb-16">
                <div className="text-center mb-12">                  <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-black to-yellow-700 bg-clip-text text-transparent">
                    💍 Wedding Packages
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">Complete wedding photography solutions for your special day</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {weddingPackages.map((pkg, index) => (
                    <PricingPackage key={index} {...pkg} />
                  ))}
                </div>
              </div>

              {/* Homecoming Packages Section */}
              <div className="w-full mb-16">
                <div className="text-center mb-12">                  <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    🏡 Homecoming Packages
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">Specialized coverage for homecoming ceremonies</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {homecomingPackages.map((pkg, index) => (
                    <PricingPackage key={index} {...pkg} />
                  ))}
                </div>
              </div>

              {/* Pre-Casual and Engagement Packages */}
              <div className="w-full mb-16">
                <div className="text-center mb-12">                  <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                    📸 Additional Services
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">Pre-shoots, engagements, and other special occasions</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {otherPackages.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100">
                      <div className="text-center mb-8">
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">
                          {category.category === "Pre-Casual Sessions" ? "💑" : "💍"} {category.category}
                        </h4>
                        <div className="w-16 h-1 bg-gradient-to-r from-gray-600 via-gray-800 to-yellow-600 mx-auto rounded-full"></div>
                      </div>
                      <div className="space-y-6">
                        {category.packages.map((pkg, pkgIndex) => (
                          <div key={pkgIndex} className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-100">
                            <div className="flex justify-between items-center">
                              <div className="flex-1">
                                <h5 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-gray-900">{pkg.name}</h5>
                                <p className="text-sm text-gray-600 group-hover:text-gray-700">{pkg.details}</p>
                              </div>                              <div className="ml-4">
                                <span className="inline-block bg-gradient-to-r from-gray-800 via-black to-yellow-700 text-white font-bold px-4 py-2 rounded-full text-sm shadow-md">
                                  {pkg.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>              {/* Extras Section */}
              <div className="w-full mb-16">
                <div className="text-center mb-12">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent">
                    ➕ Extras & Add-ons
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">Additional services to enhance your photography package</p>
                </div>
                
                {/* Enhanced Extras Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {extras.map((extra, index) => (
                    <RevealOnScroll key={index} delay={index * 0.1}>
                      <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-50"></div>
                        
                        {/* Icon section */}
                        <div className="relative z-10 p-6 text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {/* Dynamic icon based on item type */}
                            {extra.item.includes('Album') && (
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            )}
                            {extra.item.includes('Cards') && (
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            )}
                            {extra.item.includes('Enlargements') && (
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            )}
                            {extra.item.includes('Board') && (
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            )}
                            {!extra.item.includes('Album') && !extra.item.includes('Cards') && !extra.item.includes('Enlargements') && !extra.item.includes('Board') && (
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            )}
                          </div>
                          
                          <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-200">
                            {extra.item}
                          </h4>
                          
                          <div className="mt-4">
                            <div className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold px-4 py-2 rounded-full text-sm shadow-md group-hover:shadow-lg transform group-hover:scale-105 transition-all duration-300">
                              {extra.price}
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-200/30 rounded-full blur-sm"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gray-300/40 rounded-full blur-sm"></div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
                
                {/* Call to Action */}
                <div className="text-center mt-12">
                  <div className="inline-block p-6 bg-white rounded-2xl shadow-lg border border-gray-100">                    <h4 className="text-xl font-bold text-gray-800 mb-3">Need Something Custom?</h4>
                    <p className="text-gray-600 mb-4 max-w-md">
                      Don&apos;t see what you&apos;re looking for? We offer custom add-ons and services tailored to your unique requirements.
                    </p>
                    <button className="bg-gradient-to-r from-gray-800 to-black text-white font-semibold px-6 py-3 rounded-xl hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Contact Us
                      </span>
                    </button>
                  </div>
                </div>
              </div></div>
          </RevealOnScroll>
          
          {/* Terms & Conditions */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white my-6 sm:my-8 md:my-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                <TextTransition text={" Terms & Conditions"} />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
                    <li>Only selected images will be shared on social media (no exceptions)</li>
                    <li>Enlargements delivered 2 weeks post-event</li>
                    <li>Booking: LKR 20,000 non-refundable advance</li>
                    <li>Extra hour coverage: LKR 10,000/hour</li>
                    <li>Full payment: 1 week before the event</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
                    <li>Outstation charges apply</li>
                    <li>Delivery Timeline: 4 months (Wedding), 3 months (Engagement), 2 months (Preshoot)</li>
                    <li>Reserve a table for the photography team at the reception</li>
                  </ul>
                </div>
              </div>

              {/* Important Notes */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-600">
                <h3 className="font-semibold text-gray-800 mb-2">Important Notes:</h3>
                <p className="text-gray-600 text-sm">
                  All packages are customizable based on your specific requirements. 
                  Contact us to discuss modifications or create a personalized package that fits your needs and budget.
                </p>
              </div>

              {/* Payment and negotiation info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <RevealOnScroll threshold={0.1} delay={0}>
                  <div className="col-span-1 flex flex-col items-center text-center p-4 bg-white shadow-2xl rounded-lg transition-transform duration-700 hover:scale-105">
                    <div className="mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      Price Negotiation
                    </h3>
                    <p className="text-sm text-gray-500 font-extralight">
                      We understand the importance of working within your
                      financial considerations. While we provide set pricing
                      packages to fit typical needs, we&apos;re happy to discuss
                      your specific budget requirements.
                    </p>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll threshold={0.1} delay={0.2}>
                  <div className="col-span-1 flex flex-col items-center text-center p-4 bg-white shadow-2xl rounded-lg transition-transform duration-700 hover:scale-105">
                    <div className="mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Payment</h3>
                    <p className="text-sm text-gray-500 font-extralight">
                      We accept payment via bank transfer, credit card, or
                      digital payment options. All prices are inclusive of
                      applicable taxes. The remaining balance must be cleared at
                      least one week prior to your final event.
                    </p>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll threshold={0.1} delay={0.4}>
                  <div className="col-span-1 flex flex-col items-center text-center p-4 bg-white shadow-2xl rounded-lg transition-transform duration-700 hover:scale-105">
                    <div className="mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      Our Editing & Filmmaking Philosophy
                    </h3>
                    <p className="text-sm text-gray-500 font-extralight">
                      We believe in capturing the raw essence of your special
                      day, resulting in images that tell a genuine story. Our
                      editing style maintains a natural look while enhancing the
                      best aspects of every image.
                    </p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </RevealOnScroll>
          {/* Copyright Policy */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-6 sm:my-8 md:my-10">
              <div className="relative p-4 sm:p-6 md:p-8 bg-white shadow-2xl rounded-lg flex flex-col items-center text-center overflow-hidden">
                {/* Background image overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-5"
                  style={{
                    backgroundImage: `url(${image4})`,
                  }}
                ></div>
                <div className="relative z-10">
                  <div className="mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Copyright Policy</h3>
                  <p className={text + "text-sm"}>
                    While you&apos;ll receive the digital rights to all images
                    captured at your event, we retain the copyright and may use
                    selected photos for our portfolio, website, social media
                    platforms, and marketing materials. All images will be
                    properly credited when used.
                  </p>
                </div>
              </div>

              <div className="relative p-4 sm:p-6 md:p-8 bg-white shadow-2xl rounded-lg overflow-hidden">
                {/* Background image overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-5"
                  style={{
                    backgroundImage: `url(${image5})`,
                  }}
                ></div>
                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-2 text-center">
                    Get Your Custom Quote
                  </h3>
                  <p className={text + "text-sm text-center mb-4"}>
                    Every wedding is unique. Contact us for a personalized quote
                    tailored to your specific needs.
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-black text-white px-6 py-3 rounded-lg text-sm hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>{" "}
          {/* FAQs */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white my-6 sm:my-8 md:my-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                <TextTransition text={"Some quick FAQs"} />
              </h2>
              <FAQ faqs={faqs} />
            </div>
          </RevealOnScroll>
          {/* Testimonial Section */}
          {/* <RevealOnScroll>
            <div className="relative max-w-7xl px-4 sm:px-6 md:px-8 mx-auto my-6 sm:my-8 md:my-10 overflow-hidden rounded-lg shadow-2xl">
             
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${chamodMain})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85"></div>{" "}
              <div className="relative z-10 p-8 sm:p-12 text-center text-white">
                <blockquote className="text-lg sm:text-xl italic mb-4 drop-shadow-lg">
                  &quot;Chamodh captured our wedding day beautifully. Every
                  moment was preserved with such artistry and emotion. We
                  couldn&apos;t be happier with our choice!&quot;
                </blockquote>
                <cite className="text-sm opacity-90 drop-shadow-md">
                  - Priya &amp; Kasun, Colombo Wedding 2024
                </cite>
              </div>
            </div>
          </RevealOnScroll> */}
          {/* Final CTA */}
          <RevealOnScroll>
            <div className="relative max-w-7xl px-4 sm:px-6 md:px-8 mx-auto my-6 sm:my-8 md:my-10 bg-white overflow-hidden rounded-lg shadow-2xl">
              {/* Background image overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${bg3})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>{" "}
              <div className="relative z-10 p-8 text-center text-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 drop-shadow-lg">
                  Ready to Capture Your Wedding Story?
                </h2>
                <p className="text-sm mb-6 drop-shadow-md opacity-90">
                  Let&apos;s discuss how we can perfectly document your special
                  day with our photography services.
                </p>                <button className="bg-white text-black px-6 py-3 rounded-lg text-sm hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold" onClick={() => navigate("/contactus")}>
                  Contact Us Now
                </button>
              </div>
            </div>{" "}
          </RevealOnScroll>
        </PagesUI>
      </div>
    </div>
  );
};

export default PricingPage;
