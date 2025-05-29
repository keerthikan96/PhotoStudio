import { RevealOnScroll } from "../RevealOnScroll";
import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";
import PricingPackage from "../PricingPackage";
import FAQ from "../FAQ"; // Import the new FAQ component

const PricingPage = () => {
  const text = "text-gray-500 font-extralight ";

  // Define package data to pass as props
  const pricingPackages = [
    {
      title: "Essential Collection",
      subtitle: "Perfect for intimate ceremonies",
      headerBgClass: "bg-gray-200",
      headerTextClass: "text-black",
      features: [
        "1 Lead Photographer / 6 hours coverage",
        "Pre-wedding photoshoot",
        "Traditional Ceremony coverage",
        "Homecoming & Poruwa coverage",
        "150 edited digital images",
      ],
      delay: 0,
    },
    {
      title: "Premium Collection",
      subtitle: "For traditional Sri Lankan weddings",
      headerBgClass: "bg-gray-700",
      headerTextClass: "text-white",
      features: [
        "2 Photographers / 8 hours coverage",
        "Engagement shoot session",
        "Full ceremony & reception coverage",
        "Cinematic highlights video",
        "300 edited digital images",
      ],
      delay: 0.2,
    },
    {
      title: "Luxury Collection",
      subtitle: "Complete wedding documentation",
      headerBgClass: "bg-gray-500",
      headerTextClass: "text-white",
      features: [
        "3 Photographers + 2 Videographers",
        "Full day coverage (12 hours)",
        "4K Cinematic film",
        "Drone aerial coverage",
        "500+ premium edited images",
      ],
      delay: 0.4,
    },
  ];

  // FAQ data for easier management
  const faqs = [
    {
      question: "What areas in Sri Lanka do you cover?",
      answer:
        "We cover weddings throughout Sri Lanka, including Colombo, Kandy, Galle, Negombo, and destination weddings in locations like Nuwara Eliya and beaches.",
    },
    {
      question:
        "Do you have experience with traditional Sri Lankan ceremonies?",
      answer:
        "Yes, we specialize in covering all aspects of Sri Lankan weddings including Poruwa ceremonies, homecomings, and traditional customs specific to different communities.",
    },
    {
      question: "What is your payment structure?",
      answer:
        "We require a 40% booking fee to secure your date, with the remaining balance due one week before the wedding day.",
    },
    {
      question: "How long does it take to receive our photos?",
      answer:
        "Digital images are delivered within 3-4 weeks after your wedding. Cinematic films take 6-8 weeks for complete editing and delivery.",
    },
    {
      question: "Can you handle destination weddings within Sri Lanka?",
      answer:
        "Yes, we regularly cover destination weddings across Sri Lanka. Travel costs within the island are included for premium and luxury packages.",
    },
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
          backgroundImage: `url('/src/assets/Images/bg-4.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/20"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gradient-to-r from-black/80 to-black/50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/src/assets/Images/bg-3.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              <TextTransition text="Pricing" />
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
              Capturing life&apos;s most precious moments with passion and
              artistry
            </p>
          </div>
        </div>

        {/* Main Content wrapped in PagesUI */}
        <PagesUI>
          {" "}
          {/* Introduction */}
          <RevealOnScroll>
            <div className="relative max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white overflow-hidden">
              {/* Background image overlay */}
              <div
                className="absolute right-0 top-0 w-1/3 h-full bg-cover bg-center opacity-10"
                style={{
                  backgroundImage: `url('/src/assets/Images/image1.jpg')`,
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
          </RevealOnScroll>{" "}
          {/* How Pricing Works */}
          <RevealOnScroll>
            <div className="relative max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white overflow-hidden">
              {/* Background image overlay */}
              <div
                className="absolute left-0 top-0 w-1/3 h-full bg-cover bg-center opacity-10"
                style={{
                  backgroundImage: `url('/src/assets/Images/image2.jpg')`,
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
          <RevealOnScroll>
            <div className="relative max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white overflow-hidden">
              {/* Background image overlay */}
              <div
                className="absolute right-0 top-0 w-2/5 h-full bg-cover bg-center opacity-15"
                style={{
                  backgroundImage: `url('/src/assets/Images/image3.jpg')`,
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
          </RevealOnScroll>{" "}
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
                      src="/src/assets/Images/pt-1.jpg"
                      alt="Wedding Photography Sample 1"
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.1}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
                    <img
                      src="/src/assets/Images/pt-2.jpg"
                      alt="Wedding Photography Sample 2"
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.2}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
                    <img
                      src="/src/assets/Images/pt-3.jpg"
                      alt="Wedding Photography Sample 3"
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.3}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
                    <img
                      src="/src/assets/Images/pt-4.jpg"
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
                  backgroundImage: `url('/src/assets/Images/bg-5.jpg')`,
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
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-6 flex flex-col justify-center items-center">
              {/* Pricing Packages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {pricingPackages.map((pkg, index) => (
                  <PricingPackage key={index} {...pkg} />
                ))}
              </div>
            </div>
          </RevealOnScroll>
          {/* Booking Terms & Conditions */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white my-6 sm:my-8 md:my-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                <TextTransition text={"Booking Terms & Conditions"} />
              </h2>
              <ul className="list-disc list-inside text-gray-500 font-extralight text-sm sm:text-base space-y-2">
                <li>
                  To confirm your booking, a 40% deposit payment of the total
                  quoted amount is required.
                </li>
                <li>
                  The remaining balance must be cleared at least one week prior
                  to your final event.
                </li>
                <li>
                  Any extension of shooting hours will incur additional charges,
                  agreed upon beforehand.
                </li>
                <li>
                  Always mention your quotation number and include it in payment
                  references.
                </li>
              </ul>

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
          </RevealOnScroll>{" "}
          {/* Copyright Policy */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-6 sm:my-8 md:my-10">
              <div className="relative p-4 sm:p-6 md:p-8 bg-white shadow-2xl rounded-lg flex flex-col items-center text-center overflow-hidden">
                {/* Background image overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-5"
                  style={{
                    backgroundImage: `url('/src/assets/Images/image4.jpg')`,
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
                    backgroundImage: `url('/src/assets/Images/image5.jpg')`,
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
          <RevealOnScroll>
            <div className="relative max-w-7xl px-4 sm:px-6 md:px-8 mx-auto my-6 sm:my-8 md:my-10 overflow-hidden rounded-lg shadow-2xl">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/src/assets/Images/chamodMain.jpg')`,
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
          </RevealOnScroll>
          {/* Final CTA */}
          <RevealOnScroll>
            <div className="relative max-w-7xl px-4 sm:px-6 md:px-8 mx-auto my-6 sm:my-8 md:my-10 bg-white overflow-hidden rounded-lg shadow-2xl">
              {/* Background image overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/src/assets/Images/bg-3.jpg')`,
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
                </p>
                <button className="bg-white text-black px-6 py-3 rounded-lg text-sm hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold">
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
