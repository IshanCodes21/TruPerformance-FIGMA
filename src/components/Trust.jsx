import trustImage from "../assets/trust/trustimage.svg";
function Trust() {
  return (
    <section className="trust">
      <div className="tw-container pt-25 pb-15.75">
        <div className="tw-grid-col-12 flex items-stretch gap-7.5">
          <div className="trust-left order-1 col-span-12 lg:order-1 lg:col-span-6">
            <div className="h-full pr-0">
              <div className="trust-label mb-6">Product Description</div>

              <div className="trust-heading mb-6">
                <h2>
                  A single key,
                  <span className="trust-highlight"> built on </span>
                  <h2 className="trust-highlight">Real relationship</h2>
                </h2>
              </div>
              <div>
                <p className="trust-paraheader">Product Description</p>
                <p className="trust-paragraph">
                  Netarx is a trust operations platform. We give organizations a
                  single pane of glass that tells every employee, in real time,
                  how much to trust the person on the other end of any
                  communication.
                </p>
                <p className="trust-paraheader">
                  The Netarx Identity Key (NIK)
                </p>
                <p className="trust-paragraph">
                  At the center of the platform is the Netarx Identity Key,
                  installed on each device in your organization. Think of it as
                  an advanced passkey that attaches to your communications and
                  grows smarter over time. The more you interact with someone,
                  the more the key learns. Trust is built the way it should be:
                  through a history of real, verified relationship.
                </p>
              </div>
              <div className="flex gap-4"></div>
            </div>
          </div>
          <div className="hero-image order-2 col-span-12 lg:order-2 lg:col-span-6">
            <div className="relative h-full">
              <div className="relative h-auto w-full overflow-hidden">
                <img src={trustImage} alt="" className="bg-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Trust;
