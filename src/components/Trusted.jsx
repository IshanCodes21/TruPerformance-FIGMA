import trustedImage from "../assets/trusted/trustedimage.svg";
function Trusted() {
  return (
    <section className="trusted">
      <div className="tw-container pt-25 pb-25">
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
            <p className="trusted-body max-w-1129">
              The NIK journey starts with the first communication to or from a
              new person. Even if the person never completes verification, they
              contribute a device fingerprint or user connection to the system.
              Every subsequent action, opting in, confirming email, building
              interaction history, moves the identity automatically toward full
              trust.
            </p>
          </div>
        </div>
        <div className="mt-9">
          <div className="flex items-center justify-center">
            <img src={trustedImage} alt="" className="h-95 w-194 bg-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Trusted;
