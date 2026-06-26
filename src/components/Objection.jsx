import objectionbg from "../assets/objection/asset.svg";
import objectionImage from "../assets/objection/objectionimg.webp";
function Objection() {
  return (
    <section className="objection">
      <div className="tw-container pt-[80px] pb-[80px]">
        <div className="mx-auto flex flex-col items-center justify-center text-center">
          <p className="threat-preheader mb-4">NIK TRUST TIER MODEL</p>
          <div>
            <h2 className="threat-label mb-[16px]">Trust, earned in tiers.</h2>
          </div>
          <div>
            <p className="threat-body mb-[48px] max-w-3xl">
              The NIK establishes trust in tiers — each a deeper level of
              verified relationship. Verification actions like email
              confirmation and recurring interaction automatically promote an
              identity upward.
            </p>
          </div>
        </div>
        <div className="relative h-full">
          <div className="relative flex h-auto w-full overflow-hidden">
            <img
              src={objectionImage}
              alt=""
              className="bg-cover"
              color="transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Objection;
