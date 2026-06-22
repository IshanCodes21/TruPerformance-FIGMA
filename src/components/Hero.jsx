import herobg from "../assets/hero/image.png";
import freepikImage from "../assets/hero/freepik-copy.svg";
// import group262 from "../assets/images/hero/group262.svg";

function Hero() {
  return (
    <section className="hero">
      <img src={herobg} alt="" className="hero-background" />

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-frame1773">
            <div className="hero-frame1769">
              <p className="hero-label">TRUST OPERATIONS PLATFORM</p>
            </div>

            <div className="hero-frame1768 ">
              <h1 className="hero-heading">
                Everything, continuously,
                </h1>
              <h1 className="hero-head ">
                distilled into one light.
              </h1>
            </div>

            <div className="hero-frame1770">
              <p>
               Netarx gives organizations something they've lost entirely - trust in the people they communicate with. It starts with the Netarx Identity Key, an advanced passkey installed on each device that travels with every communication.
              </p>

              <p>
                As relationships build, our AI analyzes hundreds of digital signals at once - multimodal and multisensory, working in concert  - to give every person one simple answer: green, yellow, or red.
               <br>
               </br>
               <br>
               </br>Not one signal. Not one modality. Everything, continuously, distilled into one light.
              </p>
            </div>

            <div className="hero-frame1772">
              <button className="hero-btn">Request a demo →</button>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-mask">
            <img src={freepikImage} alt="" className=" bg-cover" />

            <div className="hero-overlay"></div>
          </div>
        </div>
      </div>

      {/* <img src={group262} alt="" className="hero-group262" /> */}
    </section>
  );
}

export default Hero;
