import creatorImage from "../../assets/Images/chamodProfile.jpg";
import creatorImageProtrait from "../../assets/Images/chamodMain.jpg";
import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";
import { RevealOnScroll } from "../RevealOnScroll";
// Import background images
import bg4 from "../../assets/Images/bg-4.jpg";
import bg8 from "../../assets/Images/bg-8.jpg";

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f0f2f4] ">
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-r from-black/80 to-black/50 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${bg8})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
        
        {/* Floating elements for modern touch */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider uppercase">
              About Our Studio
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            <TextTransition text="ABOUT US" />
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
        <div className="space-y-16">
          {/* Creator Section */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    <TextTransition text="Meet the Creator" />
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Chamodh Delpearachchi
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    With over 8 years of experience in photography, I specialize
                    in capturing the authentic emotions and candid moments that
                    make each celebration unique. My journey began with a simple
                    passion for storytelling through imagery, and has evolved
                    into a dedicated craft of preserving life&apos;s most
                    treasured memories.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    I believe that every couple has a unique story to tell, and
                    my mission is to document that story with creativity,
                    professionalism, and a keen eye for the details that matter
                    most. From intimate ceremonies to grand celebrations,
                    I&apos;m committed to delivering images that will be
                    cherished for generations.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                      Wedding Photography
                    </span>
                    <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                      Portrait Sessions
                    </span>
                    <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                      Event Photography
                    </span>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative">
                    <img
                      src={creatorImage}
                      alt="Sarah Johnson - Photography Creator"
                      className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">
                          8+
                        </div>
                        <div className="text-xs text-gray-600">Years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Studio Story Section */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                  <TextTransition text="Our Studio Story" />
                </h2>
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="flex flex-col items-center justify-center md:col-span-1 order-1 md:order-1">
                    <img
                      src={creatorImageProtrait}
                      alt="Creator Portrait"
                      className="w-56 h-72 object-cover rounded-2xl shadow-lg border-4 border-white mb-4"
                    />
                    <blockquote className="italic text-gray-700 text-center text-base max-w-xs">
                      &quot;Photography is the story I fail to put into
                      words.&quot;
                    </blockquote>
                    <div className="mt-1 text-gray-500 text-xs">
                      - Chamodh Delpearachchi
                    </div>
                  </div>
                  <div className="md:col-span-2 grid md:grid-cols-2 gap-8 order-2 md:order-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Our Vision
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        We envision a world where every precious moment is
                        preserved with artistic excellence and emotional depth.
                        Our studio exists to create timeless imagery that tells
                        your unique story and captures the essence of your most
                        important celebrations.
                      </p>
                      <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Our Mission
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        To provide exceptional photography services that exceed
                        expectations, combining technical expertise with
                        creative vision to deliver stunning visual narratives
                        that will be treasured for a lifetime.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Our Approach
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        We believe in building genuine connections with our
                        clients, understanding their vision, and creating a
                        comfortable environment where authentic moments can
                        unfold naturally. Every photo session is a collaborative
                        journey toward creating something beautiful.
                      </p>
                      <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Our Promise
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        We promise to deliver not just photographs, but lasting
                        memories crafted with passion, professionalism, and
                        attention to every detail that makes your story special.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Stats Section */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">Weddings Captured</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">Awards Won</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    8+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Values Section */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    <TextTransition text="Passion" />
                  </h3>
                  <p className="text-gray-600">
                    We pour our heart into every shoot, ensuring each image
                    reflects the love and joy of your special moments.
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    <TextTransition text="Quality" />
                  </h3>
                  <p className="text-gray-600">
                    We maintain the highest standards in equipment, technique,
                    and post-processing to deliver exceptional results.
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    <TextTransition text="Service" />
                  </h3>
                  <p className="text-gray-600">
                    From the first consultation to final delivery, we provide
                    personalized service that exceeds expectations.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </PagesUI>
    </div>
  );
}

export default AboutPage;
