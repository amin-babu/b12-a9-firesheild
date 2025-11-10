import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const HeroSlider = () => {
  return (
    <div className="w-full mx-auto my-10">
      <Swiper
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide>
          <div className="h-[200px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url('https://i0.wp.com/cultural-bytes.org/wp-content/uploads/2024/03/spanish-language-day.png?fit=1444%2C694&ssl=1')` }}>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[200px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url('https://template.canva.com/EAFt7h2iPz8/1/0/800w-by-EQ3xRSIo.jpg')` }}>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[200px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url('https://img.freepik.com/free-psd/guitar-lessons-banner-template_23-2148652911.jpg')` }}>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
