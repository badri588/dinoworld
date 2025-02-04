import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { themesflatcarousel } from "../SliderProps";

const LatestProgramSlider = () => {
  return (
    <Swiper {...themesflatcarousel} className="owl-carousel owl-theme none">
      <div className="swiper-wrapper">
        <SwiperSlide>
          <div
            data-dot=""
            className="item-courses wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1300ms"
          >
            <div className="box-feature">
              <img
                // src="assets/images/common/slider-courses-1.jpg"
                src="https://img.freepik.com/free-photo/extinct-triceratops-dinosaur-with-natural-habitat_23-2151647006.jpg?t=st=1738675124~exp=1738678724~hmac=61ac5b4f3d49c3637052926421a6bf4c8929e002bd0fa7ffa19a2791ba520bbd&w=1060"
                alt="Image"
              />
            </div>
            <div className="box-content">
              <div className="box-wrap">
                <h4 className="title">
                  <Link href="/classe-details">
                    <a>Dinosaurs</a>
                  </Link>
                </h4>
                <p className="sub f-mulish text-justify">
                Step back in time and explore our impressive collection of animatronic dinosaurs, including a towering T-Rex and Spinosaurus, bringing the prehistoric world to life!                </p>
              </div>
              {/* <ul>
                <li>
                  <i className="far fa-user-graduate clr-pri-5" />
                  4-6 Years
                </li>
                <li>
                  <i className="far fa-book clr-pri-6" />5 Class
                </li>
                <li>
                  <i className="fal fa-usd-circle clr-pri-3" />
                  $259.95
                </li>
                <li>
                  <i className="far fa-clock clr-pri-8" />6 Months
                </li>
              </ul> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-dot=""
            className="item-courses wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1300ms"
          >
            <div className="box-feature">
              <img
                // src="assets/images/common/slider-courses-2.jpg"
src="https://img.freepik.com/free-photo/colourful-plastic-slides-water-park-sunlight_1150-12378.jpg?t=st=1738674638~exp=1738678238~hmac=f94e20d0a92cf220dfcf9070ec548fcbbe66f2d4515ea0087386b06a1339a456&w=1060"                alt="Image"
              />
            </div>
            <div className="box-content">
              <div className="box-wrap">
                <h4 className="title">
                  <Link href="/classe-details">
                    <a>Water Park</a>
                  </Link>
                </h4>
                <p className="sub f-mulish text-justify">
                Dive into fun at our exciting Water Park, featuring thrilling water slides, a wave pool, and a rain dance area for a refreshing experience for all ages!                </p>
              </div>
              {/* <ul>
                <li>
                  <i className="far fa-user-graduate clr-pri-5" />
                  4-6 Years
                </li>
                <li>
                  <i className="far fa-book clr-pri-6" />5 Class
                </li>
                <li>
                  <i className="fal fa-usd-circle clr-pri-3" />
                  $259.95
                </li>
                <li>
                  <i className="far fa-clock clr-pri-8" />6 Months
                </li>
              </ul> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-dot=""
            className="item-courses wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1300ms"
          >
            <div className="box-feature">
              <img
                // src="assets/images/common/slider-courses-3.jpg"
                src="https://img.freepik.com/free-vector/teenage-boy-hiking-cartoon-character_1308-133817.jpg?t=st=1738588617~exp=1738592217~hmac=c2a9eb17a5bc569a48003cae8a05441cd42a08ef84e9c68dfbcce059d5d6ac08&w=740"
                alt="Image"
              />
            </div>
            <div className="box-content">
              <div className="box-wrap">
                <h4 className="title">
                  <Link href="/classe-details">
                    <a>Adventure Zone

</a>
                  </Link>
                </h4>
                <p className="sub f-mulish">
                Embark on an adrenaline-packed journey with our high rope course, obstacle course, and zipline, offering endless excitement and challenges for adventure lovers!







</p>
              </div>
              {/* <ul>
                <li>
                  <i className="far fa-user-graduate clr-pri-5" />
                  4-6 Years
                </li>
                <li>
                  <i className="far fa-book clr-pri-6" />5 Class
                </li>
                <li>
                  <i className="fal fa-usd-circle clr-pri-3" />
                  $259.95
                </li>
                <li>
                  <i className="far fa-clock clr-pri-8" />6 Months
                </li>
              </ul> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-dot=""
            className="item-courses wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1300ms"
          >
            <div className="box-feature">
              <img
                // src="assets/images/common/slider-courses-2.jpg"
                src="https://img.freepik.com/free-photo/man-having-glass-wine_107420-65895.jpg?t=st=1738674845~exp=1738678445~hmac=4f97a7481ccdee0897b3ec6e90f5c855d08b202d2180814ab513b7afb46fbd39&w=1060"
                alt="Image"
              />
            </div>
            <div className="box-content">
              <div className="box-wrap">
                <h4 className="title">
                  <Link href="/classe-details">
                    <a>Food

</a>
                  </Link>
                </h4>
                <p className="sub f-mulish">
                Indulge in a variety of delicious meals at our multi-cuisine food court, offering vegetarian, non-vegetarian, and kid-friendly options to keep everyone energized and happy!                </p>
              </div>
              {/* <ul>
                <li>
                  <i className="far fa-user-graduate clr-pri-5" />
                  4-6 Years
                </li>
                <li>
                  <i className="far fa-book clr-pri-6" />5 Class
                </li>
                <li>
                  <i className="fal fa-usd-circle clr-pri-3" />
                  $259.95
                </li>
                <li>
                  <i className="far fa-clock clr-pri-8" />6 Months
                </li>
              </ul> */}
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="owl-nav">
        <div className="owl-prev"> </div>
        <div className="owl-next"> </div>
      </div>
      <div className="owl-dots" />
    </Swiper>
  );
};
export default LatestProgramSlider;
