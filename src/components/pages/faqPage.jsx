import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlus, FaMinus, FaQuestionCircle, FaCamera, FaUsers, FaPhone, FaCog, FaSearch } from "react-icons/fa";
import PageTransition from "../transitions/PageTransition";
import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";
import { RevealOnScroll } from "../RevealOnScroll";

// Import relevant images
import photographyImage from "../../assets/Images/image1.jpg";
import pricingImage from "../../assets/Images/image2.jpg";
import bookingImage from "../../assets/Images/image3.jpg";
import miscImage from "../../assets/Images/image4.jpg";
import contactImage from "../../assets/Images/image5.jpg";

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
      <button
        className="flex justify-between items-center w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
        onClick={toggle}
      >
        <span className="text-gray-800 font-medium pr-4 leading-relaxed">{question}</span>
        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
          {isOpen ? (
            <FaMinus className="text-gray-600 text-sm" />
          ) : (
            <FaPlus className="text-gray-600 text-sm" />
          )}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const FAQSection = ({ title, faqs, icon, bgImage, description }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <RevealOnScroll>
      <div className="mb-16">
        {/* Section Header with Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden">
          <div
            className="h-32 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            <div className="relative h-full flex items-center px-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
                  <p className="text-white/80 text-sm">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

FAQSection.propTypes = {
  title: PropTypes.string.isRequired,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  icon: PropTypes.node.isRequired,
  bgImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const FaqPage = () => {
  const photographyFAQs = [
    {
      question: "What is Candid Wedding Photography?",
      answer:
        "At Chamodh Delpearachchi Photography, we specialize in capturing the authentic moments of Sri Lankan weddings. Our candid photography style documents genuine emotions and spontaneous moments during traditional Sinhala, Tamil, and multicultural ceremonies, creating timeless memories of your special day.",
    },
    {
      question:
        "What is the difference between CANDID and TRADITIONAL Wedding photography?",
      answer:
        "Traditional photography focuses on formal, posed shots common in Sri Lankan weddings, such as family portraits and ceremonial moments. Our candid approach complements this by capturing natural, unscripted moments throughout your celebration, from the Poruwa ceremony to the reception, ensuring we document both the formal traditions and spontaneous joy of your day.",
    },
    {
      question: "What types of events do you cover?",
      answer:
        "We cover all types of Sri Lankan wedding ceremonies including Sinhala, Tamil, and Muslim traditions, homecomings, engagement ceremonies, pre-wedding shoots, and destination weddings across Sri Lanka - from beach weddings in Bentota to traditional ceremonies in Kandy.",
    },
    {
      question: "Can you talk about your experience and equipment?",
      answer:
        "Chamodh Delpearachchi has over a decade of experience capturing Sri Lankan weddings. We use professional Sony and Canon mirrorless systems with premium lenses, ensuring exceptional quality even in traditional temple lighting conditions or outdoor venues.",
    },
  ];

  const pricingFAQs = [
    {
      question: "What are your photography packages and prices?",
      answer:
        "Our packages start from LKR 150,000 for basic coverage, with premium packages ranging from LKR 250,000 to 500,000. Each package is customizable to suit different Sri Lankan wedding traditions and durations. We offer special rates for destination weddings within Sri Lanka.",
    },
    {
      question: "What does your Basic Package include?",
      answer:
        "Our Basic Package includes 6 hours of coverage, two photographers, complete ceremony coverage, high-resolution digital images, basic retouching, an online gallery, and 100 printed photos in a standard album. Additional coverage for pre-wedding events can be arranged.",
    },
    {
      question:
        "What is the 'average' number of photos that you would give us?",
      answer:
        "For a full-day wedding (8-10 hours), you can expect approximately 500-800 professionally edited photographs, depending on the events, guest count, and activities during your celebration.",
    },
    {
      question: "What about advance booking/payment?",
      answer:
        "We require a 30% non-refundable retainer to secure your date, with the balance due 30 days before your wedding. For bookings made less than 30 days before the event, full payment is required to confirm your reservation.",
    },
    {
      question:
        "What is the right time to make Travel & Accommodation Changes?",
      answer:
        "For destination weddings or events requiring travel, we recommend finalizing travel and accommodation arrangements at least 2-3 months in advance. This ensures availability and often results in better rates. Any changes should be communicated as soon as possible, preferably no later than 4 weeks before the event.",
    },
  ];

  const bookingFAQs = [
    {
      question: "How do you price your apps?",
      answer:
        "Our pricing is based on hours of coverage, the number of photographers/videographers needed, the complexity of your event, and the final deliverables you choose. We offer transparent package options with clear pricing, and we're happy to create custom packages to meet your specific needs and budget.",
    },
    {
      question: "How many people to observe do we booking to check with you?",
      answer:
        "We recommend booking a consultation with just the key decision-makers (typically the couple and perhaps 1-2 family members). This allows for more focused discussions about your vision and needs without too many conflicting opinions that might complicate the planning process.",
    },
    {
      question: "Can we email questions before going ahead with the booking?",
      answer:
        "Absolutely! We encourage you to email any questions you might have before making your decision. Clear communication ensures we're the right fit for your special day, and we're happy to provide detailed responses to help with your booking decision.",
    },
    {
      question:
        "You have mentioned coverage of the client is the same, but possible to work at multiple setups as well?",
      answer:
        "Yes, our team is equipped to work at multiple setups or locations on the same day. We coordinate our team members strategically to ensure comprehensive coverage of all important moments, regardless of where they take place. Additional fees may apply depending on distance between locations and logistical complexity.",
    },
  ];

  const miscFAQs = [
    {
      question: "Do you shoot for weddings outside of Sri Lanka / Tamil Nadu?",
      answer:
        "Yes, we regularly photograph weddings throughout India and internationally. We have experience with destination weddings across various locations and are comfortable traveling to capture your special day wherever it may be.",
    },
    {
      question:
        "Do you work with other photography teams? We have a family photographer or we already booked in, can they work with you?",
      answer:
        "We can coordinate with other photography teams when necessary. However, to ensure cohesive coverage and avoid conflicting directions, we recommend discussing this arrangement in advance so we can establish clear roles and responsibilities for all photography professionals involved.",
    },
    {
      question: "When can we expect the delivery of the Photography/Videos?",
      answer:
        "We typically deliver fully edited photos within 4-6 weeks after your wedding day. For videos, wedding highlights are usually ready within 6-8 weeks, while complete wedding films may take 8-12 weeks depending on complexity. Rush delivery options are available for an additional fee.",
    },
    {
      question: "How many Albums / Photobooks do you give? How Much?",
      answer:
        'Our packages include one premium 10x10" wedding album with 30 pages. Additional albums or parent copies can be purchased separately, with prices ranging from $300-$700 depending on size, cover material, and number of pages. Custom album designs are also available.',
    },
    {
      question: "How will be the Photo / Print book design?",
      answer:
        "Our photo books feature modern, clean designs that highlight your images without distracting elements. We create a custom layout for each album that tells the story of your day chronologically, with a balance of full-page images and artistic collages. You'll have the opportunity to review and request changes before production.",
    },
    {
      question: "Can I get RAW footage & Photos of my Wedding?",
      answer:
        "We don't provide RAW files as part of our standard packages, as these unedited files don't represent our final artistic vision. We deliver high-resolution, professionally edited JPEG images. However, we can discuss RAW file delivery as a premium add-on option if this is important to you.",
    },
    {
      question: "Will you provide media copies for my Videographer?",
      answer:
        "Yes, we're happy to share selected edited images with your videographer to help them create their final product. This collaboration often enhances the overall quality of your wedding memories. We just require proper credit when our images are used.",
    },
  ];

  const contactFAQs = [
    {
      question: "How can we reach you?",
      answer:
        "You can reach us via email at info@chamodhphotography.lk or call us at +94 77 XXX XXXX. Our studio is located in Colombo, and we're available for assignments throughout Sri Lanka. We typically respond within 24 hours on business days.",
    },
    {
      question: "Do you cover destinations across Sri Lanka?",
      answer:
        "Yes, we cover weddings throughout Sri Lanka, from Jaffna to Galle, and from Trincomalee to Colombo. We have extensive experience shooting at popular wedding venues including hotels, beaches, and traditional settings across the island.",
    },
  ];  return (
    <div id="faq" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `url('/src/assets/Images/bg-4.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>      {/* Modern Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('/src/assets/Images/bg-6.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
        
        {/* Floating elements for modern touch */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider uppercase">
              <FaQuestionCircle className="mr-2" />
              Help Center
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight mb-6 tracking-tight">
            <TextTransition text="FAQ" />
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed opacity-90">
            Find answers to all your photography questions and discover how we capture life&apos;s most precious moments
          </p>
          
          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">500+</div>
              <div className="text-sm opacity-80">Questions Answered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">24hrs</div>
              <div className="text-sm opacity-80">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">98%</div>
              <div className="text-sm opacity-80">Satisfaction Rate</div>
            </div>
          </div>
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
      <PagesUI
        title="FAQ"
        description="Frequently Asked Questions about Wedding Photography Services"
        keywords="FAQ, Photography, Wedding Photography, Sri Lanka, Chamodh Delpearachchi Photography"
      >
        <PageTransition>
          <div className="relative z-10 container mx-auto px-4 py-20 max-w-6xl">
            {/* Introduction Section */}
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  Everything You Need to Know
                </h2>                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  We&apos;ve compiled answers to the most common questions about our photography services, 
                  pricing, and booking process to help you make an informed decision.
                </p>
              </div>
            </RevealOnScroll>

            {/* FAQ Sections with Icons and Images */}
            <FAQSection 
              title="Photography Services" 
              faqs={photographyFAQs}
              icon={<FaCamera className="text-white text-lg" />}
              bgImage={photographyImage}
              description="Learn about our photography styles and expertise"
            />
            
            <FAQSection 
              title="Pricing & Packages" 
              faqs={pricingFAQs}
              icon={<FaCog className="text-white text-lg" />}
              bgImage={pricingImage}
              description="Understand our pricing structure and package details"
            />
            
            <FAQSection 
              title="Booking Process" 
              faqs={bookingFAQs}
              icon={<FaUsers className="text-white text-lg" />}
              bgImage={bookingImage}
              description="Everything about booking and consultation process"
            />
            
            <FAQSection 
              title="General Information" 
              faqs={miscFAQs}
              icon={<FaQuestionCircle className="text-white text-lg" />}
              bgImage={miscImage}
              description="Additional details about our services and policies"
            />
            
            <FAQSection 
              title="Contact & Support" 
              faqs={contactFAQs}
              icon={<FaPhone className="text-white text-lg" />}
              bgImage={contactImage}
              description="How to reach us and our coverage areas"
            />
          </div>
        </PageTransition>

        {/* Enhanced Call-to-Action Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('/src/assets/Images/bg-3.jpg')`,
            }}
          ></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                  Still Have Questions?
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Our team is here to help you with any specific questions about your photography needs. 
                  Get in touch for a personalized consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="group relative px-8 py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 overflow-hidden rounded-lg"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <FaPhone className="mr-2" />
                      Contact Us
                    </span>
                  </a>
                  <a
                    href="/booking"
                    className="px-8 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
                  >
                    Book Consultation
                  </a>
                </div>
                
                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <FaPhone className="text-2xl mb-3 mx-auto" />
                    <h4 className="font-semibold mb-2">Call Us</h4>
                    <p className="text-sm opacity-90">+94 77 XXX XXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <svg className="w-6 h-6 text-2xl mb-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h4 className="font-semibold mb-2">Email Us</h4>
                    <p className="text-sm opacity-90">info@chamodhphotography.lk</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <svg className="w-6 h-6 text-2xl mb-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-semibold mb-2">Response Time</h4>
                    <p className="text-sm opacity-90">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </PagesUI>
    </div>
  );
};

export default FaqPage;
