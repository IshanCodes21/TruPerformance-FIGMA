import fbImage from "../assets/baner/fb.svg";
import ttImage from "../assets/baner/tt.svg";
import liImage from "../assets/baner/li.svg";
import dcImage from "../assets/baner/dc.svg";
import l1Image from "../assets/baner/AICPA.svg";
import l2Image from "../assets/baner/SOC2.svg";
import l3Image from "../assets/baner/thecyber.svg";

function Baner() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    // TODO: POST email to your newsletter endpoint
    console.log("subscribe:", email);
  };

  return (
    <footer className="footer">
      <div className="tw-container pt-[80px]">
        <div className="baner-frame1788">
          <p className="baner-label">
            Sign up for our newsletter
            <span className="baner-highlight">
              {" "}
              to get update information, news, insight or promotions.
            </span>
          </p>

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
        {/* p */}
        <div className="separator mt-[95px] mb-[80px]"></div>
        <div className="tw-grid-12 mb-9 md:mb-20">
          <div className="col-span-12 lg:col-span-9">
            <div className="flex flex-wrap justify-between gap-1">
              <div className="w-[47%] lg:w-auto lg:max-w-1/6">
                <div className="c-header mb-3">PRODUCTS</div>

                <a href="#" className="link-text">
                  Platform
                </a>
              </div>
              <div className="w-[47%] lg:w-auto lg:max-w-1/6">
                <div className="c-header mb-3">BY INDUSTRY</div>

                <div className="links">
                  <a href="#" className="link-text">
                    Banking
                  </a>
                  <a href="#" className="link-text">
                    Financial Services
                  </a>
                  <a href="#" className="link-text">
                    Government
                  </a>
                  <a href="#" className="link-text">
                    Healthcare
                  </a>
                  <a href="#" className="link-text">
                    Insurance
                  </a>
                  <a href="#" className="link-text">
                    Membership Organizations
                  </a>
                  <a href="#" className="link-text">
                    Title Companies
                  </a>
                </div>
              </div>
              <div className="w-[47%] lg:w-auto lg:max-w-1/6">
                <div className="c-header mb-3">BY REGULATION</div>

                <div className="links">
                  <a href="#" className="link-text">
                    GDPR
                  </a>
                  <a href="#" className="link-text">
                    HIPAA
                  </a>
                  <a href="#" className="link-text">
                    PCI DSS
                  </a>
                </div>

                <div className="footer-subtitle mt-8 mb-3">BY ROLE</div>

                <div className="links">
                  <a href="#" className="link-text">
                    Compliance
                  </a>
                  <a href="#" className="link-text">
                    Fraud Prevention
                  </a>
                  <a href="#" className="link-text">
                    Human Resources
                  </a>
                  <a href="#" className="link-text">
                    Legal
                  </a>
                  <a href="#" className="link-text">
                    Marketing
                  </a>
                  <a href="#" className="link-text">
                    Risk
                  </a>
                </div>
              </div>
              <div className="w-[47%] lg:w-auto lg:max-w-1/6">
                <div className="c-header mb-3">RESOURCES</div>

                <div className="links">
                  <a href="#" className="link-text">
                    Blogs
                  </a>
                  <a href="#" className="link-text">
                    Datasheets
                  </a>
                  <a href="#" className="link-text">
                    White Papers
                  </a>
                  <a href="#" className="link-text">
                    Newsroom
                  </a>
                  <a href="#" className="link-text">
                    Webinars
                  </a>
                  <a href="#" className="link-text">
                    Events
                  </a>
                  <a href="#" className="link-text">
                    Demos
                  </a>
                </div>
              </div>
              <div className="w-[47%] lg:w-auto lg:max-w-1/6">
                <div className="c-header mb-3">SUPPORT</div>

                <div className="links">
                  <a href="#" className="link-text">
                    Knowledge Base
                  </a>
                  <a href="#" className="link-text">
                    Help Desk
                  </a>
                </div>
              </div>
              <div className="w-[47%] lg:w-auto lg:max-w-1/6">
                <h3 className="c-header mb-3">COMPANY</h3>

                <div className="links">
                  <a href="#" className="link-text">
                    About Us
                  </a>
                  <a href="#" className="link-text">
                    FAQs
                  </a>
                  <a href="#" className="link-text">
                    Partners
                  </a>
                  <a href="#" className="link-text">
                    Download
                  </a>
                  <a href="#" className="link-text">
                    Leadership
                  </a>
                  <a href="#" className="link-text">
                    Careers
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 grid h-fit gap-4 lg:col-span-3">
            <div className="row-start-2 flex items-start justify-center gap-4 md:row-start-1">
              <img src={fbImage} alt="" className="size-[48px] bg-cover" />
              <img src={ttImage} alt="" className="size-[48px] bg-cover" />
              <img src={liImage} alt="" className="size-[48px] bg-cover" />
              <img src={dcImage} alt="" className="size-[48px] bg-cover" />
            </div>
            <div className="grid grid-cols-2 justify-items-center gap-6">
              <img src={l1Image} alt="" className="bg-cover" />
              <img src={l2Image} alt="" className="bg-cover" />
              <img src={l3Image} alt="" className="bg-cover" />
            </div>
          </div>
          <div className="frame1789 pt-[80px]">
            <p className="finalt1">© 2026 Netarx</p>
            <p className="finalt1">Privacy Policy</p>
            <p className="finalt2">|</p>
            <p className="finalt1">Terms of Service</p>
            <p className="finalt2">|</p>
            <p className="finalt1">Service Security</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Baner;
