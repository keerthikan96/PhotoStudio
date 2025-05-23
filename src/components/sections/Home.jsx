import { RevealOnScroll } from "../RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import image1 from "../../assets/Images/img1.jpg";
import image2 from "../../assets/Images/img2.JPG";
import image3 from "../../assets/Images/img3.jpg";
import image4 from "../../assets/Images/img4.jpg";
import image5 from "../../assets/Images/img5.jpg";


export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center relative bg-[#f8f9fa] top-20"
      >
        {/* White Space Over Slider */}
        {/* <div  className="top-30  bg-white "></div> */}

        {/* Image Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          speed={1500}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={false}
          navigation={false}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img
              src={image1}
              alt="Slide 1"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image2}
              alt="Slide 2"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image3}
              alt="Slide 3"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image4}
              alt="Slide 4"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image5}
              alt="Slide 5"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        </Swiper>

        {/* <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi, I'm Pedro Tech
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              I’m a full-stack developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll> */}

        <style>
          {`
    .swiper-button-next, .swiper-button-prev {
      color: white !important; /* Change to grey if needed */
    }
    .swiper-pagination-bullet {
      background-color: white !important; /* Change to grey if needed */
    }
      .swiper-pagination-bullet-active {
      background-color: white !important; /* Change to grey if needed */
    }
  `}
        </style>
      </section>

    
    </>
  );
};