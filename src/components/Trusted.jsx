import trustedImage from "../assets/trusted/trustedimage.svg";
function Trusted() {
  return (
    <section className="trusted">

      <div className="trusted-content">
        <div className="trusted-frame1606">
                
                <p className="trusted-label">NIK USER JOURNEY</p>
                <p className="trusted-heading">Every Interaction<span className="trusted-highlight"> Moves Trust Forward.</span></p>
                <p className="trusted-paragraph">The NIK journey starts with the first communication to or from a new person. Even if the person never completes verification, they contribute a device fingerprint or user connection to the system. Every subsequent action, opting in, confirming email, building interaction history, moves the identity automatically toward full trust.</p> 
            


            </div>

            <div className="trusted-image">
            <img src={trustedImage} alt="" className=" bg-cover" />
            </div>

        </div>
     
    </section>
  );
} export default Trusted;
        
            
        
        

