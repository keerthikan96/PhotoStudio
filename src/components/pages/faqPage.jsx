import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import PageTransition from "../transitions/PageTransition";

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
      answer: "Candid wedding photography is a style that captures natural, unposed moments during your wedding day. Unlike traditional photography, which focuses on staged portraits, candid photography documents authentic emotions and events as they unfold naturally."
    },
    {
      question: "What is the difference between CANDID and TRADITIONAL Wedding photography?",
      answer: "Traditional wedding photography involves posed, formal shots where subjects are aware of the camera and follow the photographer's instructions. Candid wedding photography captures spontaneous moments without intervention, resulting in more natural and emotional images that tell the authentic story of your day."
    },
    {
      question: "What is Wedding Film? Wedding Cinematography? Wedding Highlights?",
      answer: "Wedding Film is a comprehensive video documentation of your wedding. Wedding Cinematography refers to the artistic approach to filming weddings with cinematic techniques and storytelling. Wedding Highlights is a shorter, edited video (typically 3-5 minutes) showcasing the most significant moments of your wedding day."
    },
    {
      question: "Can you talk a bit about your experience? Camera make and specs?",
      answer: "We have over 10 years of experience in wedding photography using professional-grade equipment including Sony Alpha and Canon EOS R series cameras with premium lenses. Our team stays updated with the latest technology and techniques to ensure the highest quality images for your special day."
    },
    {
      question: "Do you include couple in the Traditional Shoot?",
      answer: "Yes, we always include couples in traditional shoots. We believe capturing your connection is essential for telling your complete wedding story, whether in traditional posed portraits or candid moments."
    },
    {
      question: "How do you choose models/people for the Wedding Films?",
      answer: "We don't use models - we focus on you and your guests as the stars of your wedding film. We observe and capture genuine moments, featuring the people who matter most at your celebration."
    },
    {
      question: "Do you do Elopement/Destination Photography & Video Coverage too?",
      answer: "Yes, we offer comprehensive photography and video coverage for elopements and destination weddings worldwide. We have experience working in various locations and can adapt our approach to different environments and cultural ceremonies."
    },
    {
      question: "How further is your team with reference shots?",
      answer: "While we do look at reference images for inspiration, our priority is creating authentic photographs that represent your unique wedding. We balance incorporating specific shots you want with our artistic vision to deliver a personalized collection."
    },
    {
      question: "I'm browsing through the internet, and I found various event wedding pictures. I would like to use artistic shots photographed by my wedding in my pictures?",
      answer: "We welcome reference images that inspire you, and we're happy to incorporate similar artistic styles into your wedding photography while adding our unique creative touch. Please share any inspiration with us during our planning meetings."
    },
    {
      question: "Do you prefer to help us with shots on our Wedding / Reception / Sangeet / Engagement?",
      answer: "Absolutely! We provide guidance and direction for all wedding events to ensure you look your best while still capturing authentic moments. Our team will help with poses, positioning, and timing to create beautiful, natural-looking photographs."
    }
  ];

  const pricingFAQs = [
    {
      question: "How much do you charge?",
      answer: "Our pricing varies based on package selection, hours of coverage, and additional services. Our basic packages start at $2,500, while comprehensive packages can range from $3,500 to $7,000. We recommend scheduling a consultation to discuss your specific needs and receive a customized quote."
    },
    {
      question: "Is the price/boarding fee for an assignment?",
      answer: "Yes, our quoted price includes a boarding fee for assignments that require travel outside our local area. This covers our team's travel expenses, accommodations, and any additional logistics required for destination events."
    },
    {
      question: "What does the Basic Package include?",
      answer: "Our Basic Package includes 8 hours of photography coverage with two photographers, an online gallery with high-resolution digital images, basic editing of all delivered photos, and a complimentary engagement session. Physical prints and albums are available as add-ons."
    },
    {
      question: "What is the 'average' number of photos that you would give us?",
      answer: "For a full-day wedding (8-10 hours), you can expect approximately 500-800 professionally edited photographs, depending on the events, guest count, and activities during your celebration."
    },
    {
      question: "What about advance booking/payment?",
      answer: "We require a 30% non-refundable retainer to secure your date, with the balance due 30 days before your wedding. For bookings made less than 30 days before the event, full payment is required to confirm your reservation."
    },
    {
      question: "What is the right time to make Travel & Accommodation Changes?",
      answer: "For destination weddings or events requiring travel, we recommend finalizing travel and accommodation arrangements at least 2-3 months in advance. This ensures availability and often results in better rates. Any changes should be communicated as soon as possible, preferably no later than 4 weeks before the event."
    }
  ];

  const bookingFAQs = [
    {
      question: "How do you price your apps?",
      answer: "Our pricing is based on hours of coverage, the number of photographers/videographers needed, the complexity of your event, and the final deliverables you choose. We offer transparent package options with clear pricing, and we're happy to create custom packages to meet your specific needs and budget."
    },
    {
      question: "How many people to observe do we booking to check with you?",
      answer: "We recommend booking a consultation with just the key decision-makers (typically the couple and perhaps 1-2 family members). This allows for more focused discussions about your vision and needs without too many conflicting opinions that might complicate the planning process."
    },
    {
      question: "Can we email questions before going ahead with the booking?",
      answer: "Absolutely! We encourage you to email any questions you might have before making your decision. Clear communication ensures we're the right fit for your special day, and we're happy to provide detailed responses to help with your booking decision."
    },
    {
      question: "You have mentioned coverage of the client is the same, but possible to work at multiple setups as well?",
      answer: "Yes, our team is equipped to work at multiple setups or locations on the same day. We coordinate our team members strategically to ensure comprehensive coverage of all important moments, regardless of where they take place. Additional fees may apply depending on distance between locations and logistical complexity."
    }
  ];

  const miscFAQs = [
    {
      question: "Do you shoot for weddings outside of Chennai / Tamil Nadu?",
      answer: "Yes, we regularly photograph weddings throughout India and internationally. We have experience with destination weddings across various locations and are comfortable traveling to capture your special day wherever it may be."
    },
    {
      question: "Do you work with other photography teams? We have a family photographer or we already booked in, can they work with you?",
      answer: "We can coordinate with other photography teams when necessary. However, to ensure cohesive coverage and avoid conflicting directions, we recommend discussing this arrangement in advance so we can establish clear roles and responsibilities for all photography professionals involved."
    },
    {
      question: "When can we expect the delivery of the Photography/Videos?",
      answer: "We typically deliver fully edited photos within 4-6 weeks after your wedding day. For videos, wedding highlights are usually ready within 6-8 weeks, while complete wedding films may take 8-12 weeks depending on complexity. Rush delivery options are available for an additional fee."
    },
    {
      question: "How many Albums / Photobooks do you give? How Much?",
      answer: "Our packages include one premium 10x10\" wedding album with 30 pages. Additional albums or parent copies can be purchased separately, with prices ranging from $300-$700 depending on size, cover material, and number of pages. Custom album designs are also available."
    },
    {
      question: "How will be the Photo / Print book design?",
      answer: "Our photo books feature modern, clean designs that highlight your images without distracting elements. We create a custom layout for each album that tells the story of your day chronologically, with a balance of full-page images and artistic collages. You'll have the opportunity to review and request changes before production."
    },
    {
      question: "Can I get RAW footage & Photos of my Wedding?",
      answer: "We don't provide RAW files as part of our standard packages, as these unedited files don't represent our final artistic vision. We deliver high-resolution, professionally edited JPEG images. However, we can discuss RAW file delivery as a premium add-on option if this is important to you."
    },
    {
      question: "Will you provide media copies for my Videographer?",
      answer: "Yes, we're happy to share selected edited images with your videographer to help them create their final product. This collaboration often enhances the overall quality of your wedding memories. We just require proper credit when our images are used."
    }
  ];

  const contactFAQs = [
    {
      question: "What is the best way to reach you guys?",
      answer: "The most efficient way to reach us is via email at info@photostudio.com, which is monitored daily. For quick questions, you can also call or text us at (555) 123-4567 during business hours (10 AM - 6 PM, Monday-Friday). We typically respond to all inquiries within 24 hours on business days."
    },
    {
      question: "How fast is your team?",
      answer: "Our team is known for quick response times, typically replying to inquiries within 24 hours. For urgent matters related to upcoming shoots, we have an emergency contact system in place to ensure timely communication. Our editing turnaround times are industry-competitive while maintaining our quality standards."
    },
    {
      question: "Do you have any other branches in India / elsewhere?",
      answer: "Our main studio is located in Chennai, but we have associate photographers in major cities across India including Mumbai, Delhi, Bangalore, and Kolkata. We also have international partners for destination weddings. All associates are trained to maintain our quality standards and artistic approach."
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Easily find solutions and answers.</h1>
          <p className="text-gray-600 mb-4">It is important for me as a professional that every problem has a solution,</p>
          <p className="text-gray-600">you just need to start working for it! Here are answers.</p>
        </div>

        <FAQSection title="Photography" faqs={photographyFAQs} />
        <FAQSection title="Pricing" faqs={pricingFAQs} />
        <FAQSection title="Booking" faqs={bookingFAQs} />
        <FAQSection title="Miscellaneous" faqs={miscFAQs} />
        <FAQSection title="Contact" faqs={contactFAQs} />
      </div>
    </PageTransition>
  );
};

export default FaqPage;