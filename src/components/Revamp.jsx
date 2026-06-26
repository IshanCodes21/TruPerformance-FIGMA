import revampImage from "../assets/revamp/frame1871.svg";
function Revamp() {
  return (
    <section className="revamp">
      <div className="tw-container pt-[100px] pb-[100px]">
        <div className="tw-grid-col-12 flex items-stretch gap-[45px]">
          <div className="revamp-left order-1 col-span-12 lg:order-2 lg:col-span-6">
            <div className="h-full pr-0">
              <div className="revamp-label mb-4">HOW IT WORKS</div>
              <div className="revamp-head mb-4">
                <h2 className="revamp-head">
                  Detection is the method.
                  <h2 className="revamp-highlight">
                    Restoration is the point.
                  </h2>
                </h2>
              </div>
              <div className="revamp-bod">
                <p className="mb-4">
                  Under the hood, Netarx ingests hundreds of digital signals
                  simultaneously. Our AI inference models are multimodal and
                  multisensory, working in concert across every available
                  channel. We detect deepfakes, social engineering,
                  impersonation, and disinformation. But that is not how we talk
                  about what we do, because detection is not the point.
                </p>
                <p>
                  The point is restoration. We restore the trust your end users
                  have lost in the communications they depend on every day.
                </p>
              </div>
              <div className="flex gap-4"></div>
            </div>
          </div>

          <div className="hero-image order-2 col-span-12 lg:order-1 lg:col-span-6">
            <div className="relative h-full">
              <div className="relative h-auto w-full overflow-hidden">
                <img src={revampImage} alt="" className="bg-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Revamp;
