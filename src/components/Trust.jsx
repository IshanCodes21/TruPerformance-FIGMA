import trustImage from "../assets/trust/trustimage.svg";
function Trust() {
  return (
    <section className="trust">

      <div className="trust-content">
        <div className="trust-frame1745">
            <div className="trust-frame1706">
                <div>
                <p className="trust-label">Product Description</p>
                </div>
                <div>
                <p className="trust-heading">A single key,<span className="trust-highlight"> built on real relationship.</span></p>
                </div>
                <div>
                <p className="trust-paraheader">Product Description</p>
                <p className="trust-paragraph">Netarx is a trust operations platform. We give organizations a single pane of glass that tells every employee, in real time, how much to trust the person on the other end of any communication.</p>
                <p className="trust-paraheader">The Netarx Identity Key (NIK)</p>
                <p className="trust-paragraph">At the center of the platform is the Netarx Identity Key, installed on each device in your organization. Think of it as an advanced passkey that attaches to your communications and grows smarter over time. The more you interact with someone, the more the key learns. Trust is built the way it should be: through a history of real, verified relationship.</p>
                </div>


            </div>
            <div className="trust-image">
            <img src={trustImage} alt="" className=" bg-cover" />
            </div>
        </div>
      </div>
    </section>
  );
} export default Trust;
        
            
        
        

