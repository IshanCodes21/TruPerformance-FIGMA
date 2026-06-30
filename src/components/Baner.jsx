function Baner() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    // TODO: POST email to your newsletter endpoint
    console.log("subscribe:", email);
  };

  return (
    <section className="baner">
      <div className="tw-container pt-20">
        <p className="baner-label">
          Sign up for our newsletter
          <span className="baner-highlight">
            {" "}
            to get update information, news, insight or promotions.
          </span>
        </p>
        <div className="flex items-center justify-center">
          <form className="baner-frame1787" onSubmit={handleSubscribe}>
            <div className="baner-container">
              <div className="baner-input-frame">
                <div className="baner-input-container">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email*"
                    className="baner-input"
                  />
                </div>
              </div>
            </div>
            <div className="baner-btn-container">
              <div className="baner-btn-input">
                <button type="submit" className="baner-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="separator mt-23.75 mb-20"></div>
    </section>
  );
}
export default Baner;
