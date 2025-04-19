import { useState } from "react";
import { MessageSquare, Phone, Mail, Facebook, X } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const chatOptions = [
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      bgColor: "bg-green-500 hover:bg-green-600",
      link: "https://wa.me/94766581620?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      bgColor: "bg-blue-500 hover:bg-blue-600",
      link: "tel:+94766581620"
    },
    {
      icon: <Facebook className="w-6 h-6 text-white" />,
      bgColor: "bg-[#1877F2] hover:bg-[#166FE5]",
      link: "https://web.facebook.com/ChamodhDelpearachchi/?_rdc=1&_rdr" 
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      bgColor: "bg-red-500 hover:bg-red-600",
      link: "mailto:chamodh@gmail.com" 
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* Floating Buttons */}
      {isOpen && (
        <div className="mb-3 flex flex-col items-end gap-3">
          {chatOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${option.bgColor}`}
            >
              {option.icon}
            </a>
          ))}
        </div>
      )}

      {/* Main Chat Button */}
      <div className="relative flex items-center group">
        {!isOpen && (
          <span className="absolute -left-30 bg-white px-4 py-3 rounded-3xl shadow-md text-sm text-gray-800 font-medium transition-all duration-300 ">
            Chat with us
          </span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 rounded-full text-white shadow-lg bg-gradient-to-r from-gray-900 to-gray-500 hover:from-gray-950 hover:to-gray-400 transition-all duration-300 transform hover:scale-105"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-300 transform rotate-180" />
          ) : (
            <MessageSquare className="w-6 h-6 transition-transform duration-300" color="white" fill="white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
