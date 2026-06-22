import objectionbg from "../assets/objection/asset.svg";
import arrowup from "../assets/objection/arrowup.png";
function Objection() {
  return (
    <section className="objection relative">
         <img src={objectionbg} alt="" className=" absolute bg-cover  top-0 left-0 w-full h-full" />

      <div className="objection-content">
        <div className="objection-frame1781">
            <div className="objection-frame1779">
                <div className="objection-frame1778">
                <div>
                      <p className="objection-preheader">NIK TRUST TIER MODEL</p>
                      </div>
                       <div>
                      <h1 className="objection-label">Trust, earned in tiers.</h1>
                      </div>
                     </div>
                      <p className="objection-body">The NIK establishes trust in tiers — each a deeper level of verified relationship. Verification actions like email confirmation and recurring interaction automatically promote an identity upward. </p>
                      
                     </div>

            
               
                
            </div>
     <div className="objection-content2">
        <div className="objection-bs1"> 
             <div className="objection-h4"> 
                <p className="objection-t1">Org Tier: NIK Full:</p>
             </div>
                <div className="objection-c1">
                <p className="objection-t1">Trusted. Known identity, established context</p>
                </div>

        </div>
        <div className="objection-arrow">
          <img src={arrowup} alt=""  className="  bg-cover"/>
        </div>
        <div className="objection-bs2"> 
             <div className="objection-h4"> 
                <p className="objection-t1">Established Tier: NIK Lite:</p>
             </div>
                <div className="objection-c1">
                <p className="objection-t1">Recurring interaction history.</p>
                </div>
                </div>
                 <div className="objection-arrow">
          <img src={arrowup} alt=""  className="  bg-cover"/>
        </div>
         <div className="objection-bs3"> 
             <div className="objection-h4"> 
                <p className="objection-t1">New Relationship: NIK Zero:</p>

             </div>
                <div className="objection-c1">
                <p className="objection-t1">Email Confirmed. Identity Signal Established.</p>
                </div>
                </div>
                <div className="objection-arrow">
          <img src={arrowup} alt=""  className="  bg-cover"/>
        </div>
        <div className="objection-bs4"> 
             <div className="objection-h4"> 
                <p className="objection-t1">Acquaintance Tier:</p>
             </div>
                <div className="objection-c1">
                <p className="objection-t1">Not yet verified. Metadata aggregated. Untrusted.</p>
                </div>
                </div>



        </div>


        </div>
      
   
    </section>
  );
} export default Objection;
  
          

           
