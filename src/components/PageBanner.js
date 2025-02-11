import Link from "next/link";
const PageBanner = ({ pageName, pageTitle }) => {
  return (
    <section className="tf-page-title">
      <div className="overlay" />
      <div className="overlay-bg" />
      <img
        // src="https://www.legoland.com/california/media/0bnb1tut/llcr-dino-explore-dino-river-1280x720.jpg"
        src=""
        className="bg-inner1"
        alt=""
      />
      <img
        src="assets/images/background/img2innerpage.png"
        className="bg-inner2"
        alt=""
      />
      <img
        src="assets/images/background/img3innerpage.png"
        className="bg-inner3"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-title inner">
              <h1 className="title text-white">{pageTitle ? pageTitle : pageName}</h1>
              <div className="breadcrumbs">
                <ul className="jus-ct">
                  <li>
                    <Link href="/">
                      <a className="f-rubik text-white">Home</a>
                    </Link>
                  </li>
                  <li>
                    <p className="breadcrumbs-inner f-rubik text-info">{pageName}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
