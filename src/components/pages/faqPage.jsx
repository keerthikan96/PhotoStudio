import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import PageTransition from "../transitions/PageTransition";
import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
        onClick={toggle}
      >
        <span className="text-gray-800">{question}</span>
        <span className="text-gray-500 ml-2">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 pl-2">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="space-y-2">
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
  );
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
  ];

  return (
    <div id="faq" className="min-h-screen bg-[#f0f2f4] mt-10">
      <div className="flex flex-col items-center justify-center w-full mx-auto py-4 sm:py-6 md:py-8 text-gray-900">
        {/* Hero Section */}
        <div className="mx-4 md:mx-auto max-w-7xl md:w-full px-4 sm:px-6 md:px-8 bg-gray-800 text-white py-6 sm:py-8 md:py-10 text-center rounded-lg mb-8">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold">
            <TextTransition
              text={"Easily find solutions and answers."}
            />
          </h1>
          <p className="text-xs sm:text-sm mt-2">
          It is important for me as a professional that every problem
          has a solution.
          </p>
          {/* <p className="text-gray-600 mb-4">
                  It is important for me as a professional that every problem
                  has a solution,
                </p>
                <p className="text-gray-600">
                  you just need to start working for it! Here are answers.
                </p> */}
        </div>
        <PagesUI
          title="FAQ"
          description="Frequently Asked Questions"
          keywords="FAQ, Photography, Wedding Photography, Sri Lanka, Chamodh Delpearachchi Photography"
        >
          <PageTransition>
            <div className="container mx-auto px-4 py-16 max-w-6xl">
              {/* <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-6">
                  Easily find solutions and answers.
                </h1>
                <p className="text-gray-600 mb-4">
                  It is important for me as a professional that every problem
                  has a solution,
                </p>
                <p className="text-gray-600">
                  you just need to start working for it! Here are answers.
                </p>
              </div> */}

              <FAQSection title="Photography" faqs={photographyFAQs} />
              <FAQSection title="Pricing" faqs={pricingFAQs} />
              <FAQSection title="Booking" faqs={bookingFAQs} />
              <FAQSection title="Miscellaneous" faqs={miscFAQs} />
              <FAQSection title="Contact" faqs={contactFAQs} />
            </div>
          </PageTransition>
          <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gray-600">
                If you have any other questions, feel free to reach out!
              </p>
              <a
                href="/contact"
                className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </PagesUI>
      </div>
    </div>
  );
};

export default FaqPage;
