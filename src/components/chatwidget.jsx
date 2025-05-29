import { useState } from "react";
import { MessageSquare, Phone, Mail, Facebook, X } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const chatOptions = [
    {
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      bgColor: "bg-green-500 hover:bg-green-600",
      link: "https://wa.me/94766581620?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
    },    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      bgColor: "bg-gray-700 hover:bg-gray-800",
      link: "tel:+94766581620"
    },
    {
      icon: <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      bgColor: "bg-gray-800 hover:bg-gray-900",
      link: "https://web.facebook.com/ChamodhDelpearachchi/?_rdc=1&_rdr" 
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      bgColor: "bg-gray-600 hover:bg-gray-700",
      link: "mailto:chamodh@gmail.com" 
    }
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col items-end z-50">
      {/* Floating Buttons */}
      {isOpen && (
        <div className="mb-2 sm:mb-3 flex flex-col items-end gap-2 sm:gap-3">
          {chatOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${option.bgColor}`}
            >
              {option.icon}
            </a>
          ))}
        </div>
      )}

      {/* Main Chat Button */}
      <div className="relative flex items-center group">
        {!isOpen && (
          <span className="absolute -left-24 sm:-left-30 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-3xl shadow-md text-xs sm:text-sm text-gray-800 font-medium transition-all duration-300 hidden sm:block">
            Chat with us
          </span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 sm:p-4 rounded-full text-white shadow-lg bg-gradient-to-r from-gray-900 to-gray-500 hover:from-gray-950 hover:to-gray-400 transition-all duration-300 transform hover:scale-105"
        >
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 transform rotate-180" />
          ) : (
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" color="white" fill="white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
