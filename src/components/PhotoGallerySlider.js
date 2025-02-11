import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { fourSlider } from "../SliderProps";

const PhotoGallerySlider = () => {
  return (
    <Swiper {...fourSlider} className="owl-carousel owl-theme none dots-none">
      <SwiperSlide>
        <div
          className="sc-gallery-2 st-1 wow fadeIn animated"
          data-wow-delay="0.5ms"
          data-wow-duration="1200ms"
        >
          <img src="https://img.freepik.com/free-photo/boy-swimming-pool_1098-21948.jpg?t=st=1738673213~exp=1738676813~hmac=76c62380f6f0ac177a3a8024fd112e26c51f9b2a4de796bfd67dd1f6fb13f324&w=360" alt="Image" />

          <div className="overlay">
            <div className="inner-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={100}
                height={100}
                viewBox="0 0 100 100"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                            .cls-1 {\n                                                              fill: #fff;\n                                                            }\n                                                          ",
                    }}
                  />
                </defs>
                <g>
                  <rect className="cls-1" x={49} width={2} height={100} />
                  <rect
                    className="cls-1"
                    x="-0.5"
                    y="49.5"
                    width={100}
                    height={2}
                  />
                </g>
              </svg>
              <h3>
                <Link href="/gallery">
                  <a className="clr-pri-1">Water Park</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="sc-gallery-2 wow fadeIn animated"
          data-wow-delay="0.5ms"
          data-wow-duration="1200ms"
        >
          {/* <img src="assets/images/common/sc-gallery-7.jpg" alt="Image" /> */}
          <img src="https://img.freepik.com/free-photo/view-extinct-triceratops-dinosaur-creature_23-2151646958.jpg?t=st=1738673738~exp=1738677338~hmac=1f8f9a754d5c38a8fa1529f5fc4f24c6701901d7a4e6ddf54020455a19a58bf4&w=360" alt="image" height="400px"/>
          <div className="overlay">
            <div className="inner-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={100}
                height={100}
                viewBox="0 0 100 100"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                            .cls-1 {\n                                                              fill: #fff;\n                                                            }\n                                                          ",
                    }}
                  />
                </defs>
                <g>
                  <rect className="cls-1" x={49} width={2} height={100} />
                  <rect
                    className="cls-1"
                    x="-0.5"
                    y="49.5"
                    width={100}
                    height={2}
                  />
                </g>
              </svg>
              <h3>
                <Link href="/gallery">
                  <a className="clr-pri-1">Dinosar</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="sc-gallery-2 st-1 wow fadeIn animated"
          data-wow-delay="0.5ms"
          data-wow-duration="1200ms"
        >
          {/* <img src="assets/images/common/sc-gallery-8.jpg" alt="Image" /> */}
          <img src="https://img.freepik.com/free-photo/vertical-high-angle-shot-male-climbing-up-stairs-hill-overcoming-challenges-concept_181624-10453.jpg?t=st=1738673830~exp=1738677430~hmac=541673bc2c5044b8bab8556836792f66e540829cce108f1e7ce2f7051bede8a6&w=740" />
          <div className="overlay">
            <div className="inner-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={100}
                height={100}
                viewBox="0 0 100 100"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                            .cls-1 {\n                                                              fill: #fff;\n                                                            }\n                                                          ",
                    }}
                  />
                </defs>
                <g>
                  <rect className="cls-1" x={49} width={2} height={100} />
                  <rect
                    className="cls-1"
                    x="-0.5"
                    y="49.5"
                    width={100}
                    height={2}
                  />
                </g>
              </svg>
              <h3>
                <Link href="/gallery">
                  <a className="clr-pri-1">Adventure</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {" "}
        <div
          className="sc-gallery-2 st-2 wow fadeIn animated"
          data-wow-delay="0.5ms"
          data-wow-duration="1200ms"
        >
          {/* <img src="assets/images/common/sc-gallery-9.jpg" alt="Image" /> */}
        <img src="https://img.freepik.com/free-photo/happy-asian-sport-boy-play-swing-playground-garden_1258-1282.jpg?t=st=1738673925~exp=1738677525~hmac=99350387db0fd499bc6dc237c4dc62615fd7fb56c8a730dc7914558cfc675775&w=360" alt="Image" />
          <div className="overlay">
            <div className="inner-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={100}
                height={100}
                viewBox="0 0 100 100"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                            .cls-1 {\n                                                              fill: #fff;\n                                                            }\n                                                          ",
                    }}
                  />
                </defs>
                <g>
                  <rect className="cls-1" x={49} width={2} height={100} />
                  <rect
                    className="cls-1"
                    x="-0.5"
                    y="49.5"
                    width={100}
                    height={2}
                  />
                </g>
              </svg>
              <h3>
                <Link href="/gallery">
                  <a className="clr-pri-1">Play ground</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default PhotoGallerySlider;
