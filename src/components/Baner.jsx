import fbImage from "../assets/baner/fb.svg";
import ttImage from "../assets/baner/tt.svg";
import liImage from "../assets/baner/li.svg";
import dcImage from "../assets/baner/dc.svg";
import l1Image from "../assets/baner/AICPA.svg";
import l2Image from "../assets/baner/SOC2.svg";
import l3Image from "../assets/baner/thecyber.svg";


function Baner() {
  return (

                <div className="baner-content">
         <div className="">
             <div className="baner-frame1788">
                 <p className="baner-label">Sign up for our newsletter<span className="baner-highlight"> to get update information, news, insight or promotions.</span></p>
                 <form className="baner-frame1787">
                     <div className="baner-container">
                         <div className="baner-input-frame">
                             <div className="baner-input-container">
                                 <input type="email" placeholder="Email*" className="baner-input" />
                             </div>
                         </div>
                     </div>
                   <div className="baner-btn-container">
                 <div className="baner-btn-input">
                     <button className="baner-btn">Subscribe</button>
                 </div>
                
             </div>
           
             </form>
             </div>
                {/* p */}
             <div className="separator mt-[95px] mb-[80px]"></div>
                <div className="flex justify-between ">
                    <div className="  ">
                        <div className="footer-container">
                         <h1 className="c-header">PRODUCTS</h1>
                         </div>
                         <a href="#" className="link-text">Platform</a>
                          </div>
                          <div className=" ">
                           <div className="footer-container">
                            <h1 className="c-header">BY INDUSTRY</h1>
                            </div>
                            <div className="links">
                                <a href="#" className="link-text">Banking</a>
                                <a href="#" className="link-text">Financial Services</a>
                                <a href="#" className="link-text">Government</a>
                                <a href="#" className="link-text">Healthcare</a>
                                <a href="#" className="link-text">Insurance</a>
                                <a href="#" className="link-text">Membership Organizations</a>
                                <a href="#" className="link-text">Title Companies</a>
                                 </div>
                                  </div>
                                    <div className=" ">
                                    <div className="footer-container">
                                        <h1 className="c-header">BY REGULATION</h1>
                                    </div>
                                     <div className="links">
                                        <a href="#" className="link-text">GDPR</a>
                                        <a href="#" className="link-text">HIPAA</a>
                                        <a href="#" className="link-text">PCI DSS</a>
                                     </div>
                                     <div className="footer-container">
                                      <h1 className="footer-subtitle pt-[20px]">BY ROLE</h1>
                                     </div>
                                     <div className="links">
                                        <a href="#" className="link-text">Compliance</a>
                                        <a href="#" className="link-text">Fraud Prevention</a>
                                        <a href="#" className="link-text">Human Resources</a>
                                        <a href="#" className="link-text">Legal</a>
                                        <a href="#" className="link-text">Marketing</a>
                                        <a href="#" className="link-text">Risk</a>
                                    </div>
                                </div>
                                    <div className=" ">
                                    <div className="footer-container">
                                    <h1 className="c-header">RESOURCES</h1>
                                    </div>
                                    <div className="links">
                                        <a href="#" className="link-text">Blogs</a>
                                        <a href="#" className="link-text">Datasheets</a>
                                        <a href="#" className="link-text">White Papers</a>
                                        <a href="#" className="link-text">Newsroom</a>
                                        <a href="#" className="link-text">Webinars</a>
                                        <a href="#" className="link-text">Events</a>
                                        <a href="#" className="link-text">Demos</a>
                                    </div>
                                    </div>
                                    <div className=" ">
                                     <div className="footer-container">
                                        <h1 className="c-header">SUPPORT</h1>
                                    </div>
                                    <div className="links">
                                        <a href="#" className="link-text">Knowledge Base</a>
                                        <a href="#" className="link-text">Help Desk</a>
                                    </div>
                                    </div>
                        <div className=" ">
                          <div className="footer-container">
         <h1 className="c-header">COMPANY</h1>
         </div>
         <div className="links">
         <a href="#" className="link-text">About Us</a>
         <a href="#" className="link-text">FAQs</a>
         <a href="#" className="link-text">Partners</a>
         <a href="#" className="link-text">Download</a>
         <a href="#" className="link-text">Leadership</a>
         <a href="#" className="link-text">Careers</a>
         </div>

                    </div>
                    <div className="flex flex-col">
                      <div className=" flex space-x-[16px] ">
            <img src={fbImage} alt="" className=" bg-cover size-[48px]" />
            <img src={ttImage} alt="" className=" bg-cover size-[48px]" />
            <img src={liImage} alt="" className=" bg-cover size-[48px]" />
            <img src={dcImage} alt="" className=" bg-cover size-[48px]" />
            </div>
            <div className=" grid-cols-2 grid mt-[16px]">
             <img src={l1Image} alt="" className=" bg-cover" />
            <img src={l2Image} alt="" className=" bg-cover" />
            <img src={l3Image} alt="" className=" bg-cover" />
         </div>
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
  );
} export default Baner;

