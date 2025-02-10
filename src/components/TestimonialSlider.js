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
                  <h4 className="name-author clr-pri-2">BUS</h4>
                </li>
                {/* <li>
                  <p className="clr-pri-5 f-mulish">bus</p>
                </li> */}
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
              “Take a bus to Koti Terminal, then a direct hourly bus to Crusher Machines. Don't miss the fun!”
             
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
                  <h4 className="name-author clr-pri-2">cab</h4>
                </li>
                {/* <li>
                  <p className="clr-pri-5 f-mulish">Senior Manager</p>
                </li> */}
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
              “ Take a cab to Dino World, but return rides are scarce in the evening!”
              
                
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
                  <h4 className="name-author clr-pri-2">
                  {/* Bradley Y. Grimes */}
                  metro
                  </h4>
                </li>
                <li>
                  {/* <p className="clr-pri-5 f-mulish">Senior Manager</p> */}
                </li>
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                {/* “ On the other hand denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment” */}
                “ Take the Metro to L.B. Nagar, then a bus to Crusher Machines. Autos will take you to the park!”
                
                
                
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
                {/* <li>
                  <h4 className="name-author clr-pri-2">Bradley Y. Grimes</h4>
                </li> */}
                <li>
                  <h4 className="name-author clr-pri-2">airport</h4>
                </li>
                {/* <li>
                  <p className="clr-pri-5 f-mulish">Senior Manager</p>
                </li> */}
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                “Hyderabad Airport is 43.7 km away. Take a taxi or app-based ride to reach the park”
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
