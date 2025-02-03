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
                src="https://img.freepik.com/free-vector/tyrannosaurus-rex-dinosaur-skateboard-cartoon-style_1308-90856.jpg?t=st=1738587938~exp=1738591538~hmac=1106a1961e964d1210a3310b1e4f2d87d219865b1fc6d0b6fb078b54f78f795d&w=740"
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
src="https://img.freepik.com/free-vector/indoor-water-park-illustration_1284-8157.jpg?t=st=1738588490~exp=1738592090~hmac=5c3571953a6534a2476c1e421067803d07c58546579bd4347532f6be7998b079&w=740"                alt="Image"
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
                src="https://img.freepik.com/free-vector/children-with-different-race-playing-playground_1308-138151.jpg?t=st=1738588819~exp=1738592419~hmac=43abe254742d8ea2cc07307d32b425bedb958fb1f34856eac80d6784addf1482&w=826"
                alt="Image"
              />
            </div>
            <div className="box-content">
              <div className="box-wrap">
                <h4 className="title">
                  <Link href="/classe-details">
                    <a>Playground

</a>
                  </Link>
                </h4>
                <p className="sub f-mulish">
                Let the kids have a blast with trampolines, slides, swings, and a variety of fun games, making it the perfect spot for endless playtime!                </p>
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
