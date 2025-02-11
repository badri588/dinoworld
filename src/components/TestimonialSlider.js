import { Swiper, SwiperSlide } from "swiper/react";
import { twoSlider } from "../SliderProps";

const TestimonialSlider = () => {
  return (
    <Swiper {...twoSlider} className="owl-carousel owl-theme none">
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">
              <div className="box-avt">
                {/* <img src="assets/images/thumbnails/avt-quote.jpg" alt="Image" /> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ3DJSwBnytXNO0ox9UNSTZZKWufgakb9MVg&s" alt="bus" />
              </div>
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">Rajeshwari K.
                  </h4>
                </li>
                {/* <li>
                  <p className="clr-pri-5 f-mulish">Senior Manager</p>
                </li> */}
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                “ Dino World is a fantastic place for kids and adults alike. My children loved the dinosaur exhibits, and the water park was a refreshing treat! ”
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">
              <div className="box-avt">
                {/* <img
                  src="assets/images/thumbnails/avt-quote-2.jpg"
                  alt="Image"
                /> */}
                <img src=" https://th.bing.com/th/id/OIP.SrgH2EPF4ZJcXYbaDW58OQHaEK?pid=ImgDet&w=174&h=97.875&c=7&dpr=1.3" alt="car" />
              </div>
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">Venkatesh R.
                  </h4>
                </li>
                {/* <li>
                  <p className="clr-pri-5 f-mulish">Senior Manager</p>
                </li> */}
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                “ The adventure zone was thrilling! My family had a great time ziplining and exploring the rope courses. Highly recommend Dino World! ”
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">
              <div className="box-avt">
                <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/10/Hyderabad-Metro-600.jpg" alt="Image" />
              </div>
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">Swapna T.
                  </h4>
                </li>
                {/* <li>
                  <p className="clr-pri-5 f-mulish">Senior Manager</p>
                </li> */}
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                “ The animatronic dinosaurs were so realistic and educational. My students learned so much while having fun. Perfect for school trips! ”
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
           data-dot=""
          className="item-fb wow fadeIn animated"
           data-wow-delay="0.3ms"
           data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">
              <div className="box-avt">
                <img
                  // src="assets/images/thumbnails/avt-quote-2.jpg"
                  // alt="Image"
                  src="https://t4.ftcdn.net/jpg/00/30/42/27/360_F_30422752_w1SUKUMnnAzhgYSNd01A1oXSYncJizkU.jpg" 
                  alt="plane"
                />
              </div>
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">Nagarjuna M.
                  </h4>
                </li>
                {/* <li>
                  <p className="clr-pri-5 f-mulish">Senior Manager</p>
                </li> */}
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                “ From the playground to the food court, Dino World offers something for everyone.   an amazing place to relax and enjoy quality time with family! ”
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div className="owl-dots" />
    </Swiper>
  );
};
export default TestimonialSlider;
