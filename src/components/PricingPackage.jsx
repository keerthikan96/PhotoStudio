import { RevealOnScroll } from "./RevealOnScroll";


const PricingPackage = ({ 
  title, 
  subtitle, 
  headerBgClass, 
  headerTextClass = "text-black", 
  features, 
  delay = 0,
  threshold = 0.1 
}) => {
  return (
    <RevealOnScroll threshold={threshold} delay={delay}>
      <div className="border rounded-lg overflow-hidden shadow-2xl hover:shadow-xl bg-white transition-transform duration-700 hover:scale-105">
        <div className={`${headerBgClass} p-3`}>
          <h3 className={`font-bold ${headerTextClass}`}>{title}</h3>
          <p className={`text-sm ${headerTextClass}`}>{subtitle}</p>
        </div>
        <div className="p-4">
          <ul className="space-y-5 text-sm">
            {features?.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">→</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition duration-300">Interested</button>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default PricingPackage;
