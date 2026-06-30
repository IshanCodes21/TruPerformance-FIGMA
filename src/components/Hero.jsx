import herobg from "../assets/hero/image.png";
import freepikImage from "../assets/hero/freepik-copy.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="tw-container">
        <div className="tw-grid-col-12 flex items-stretch gap-5">
          <div className="hero-left order-1 col-span-12 lg:order-1 lg:col-span-8">
            <div className="h-full pr-0">
              <div className="hero-title mb-6">TRUST OPERATIONS PLATFORM</div>
              <div className="hero-heading mb-9">
                <h1>Everything, continuously,</h1>
                <h1>
                  <span className="hero-head">distilled into one light.</span>
                </h1>
              </div>
              <p></p>
              <div className="hero-text">
                <p>
                  Netarx gives organizations something they've lost entirely -
                  trust in the people they communicate with. It starts with the
                  Netarx Identity Key, an advanced passkey installed on each
                  device that travels with every communication.
                </p>

                <p className="mt-5 mb-10">
                  As relationships build, our AI analyzes hundreds of digital
                  signals at once - multimodal and multisensory, working in
                  concert - to give every person one simple answer: green,
                  yellow, or red.
                </p>

                <p>
                  {" "}
                  Not one signal. Not one modality. Everything, continuously,
                  distilled into one light.
                </p>
              </div>

              <div className="flex">
                <button className="hero-btn mt-10">Request a demo →</button>
              </div>
            </div>
          </div>

          <div className="hero-image order-2 col-span-12 lg:order-2 lg:col-span-4">
            <div className="relative mt-4.5 h-full">
              <img src={freepikImage} alt="" className="bg-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
