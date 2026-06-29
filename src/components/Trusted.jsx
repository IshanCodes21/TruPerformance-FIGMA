import trustedImage from "../assets/trusted/trustedimage.svg";
function Trusted() {
  return (
    <section className="trusted">
      <div className="tw-container pt-[100px] pb-[100px]">
        <div className="mx-auto flex flex-col items-center justify-center text-center">
          <p className="trusted-label mb-4">NIK USER JOURNEY</p>
          <div className="trusted-heading mb-4">
            <h2>
              {" "}
              Every Interaction
              <span className="trusted-highlight"> Moves Trust Forward.</span>
            </h2>
          </div>
          <div>
            <p className="trusted-body mb-[48px] max-w-3xl">
              The NIK establishes trust in tiers — each a deeper level of
              verified relationship. Verification actions like email
              confirmation and recurring interaction automatically promote an
              identity upward.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-center">
            <img src={trustedImage} alt="" className="w h-95 bg-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Trusted;
