import stat1Image from "../assets/threat/stat1.png";
import stat2Image from "../assets/threat/stat2.png";
import stat3Image from "../assets/threat/stat3.png";
function Threat() {
  return (
    <section className="threat">

      <div className="threat-content">
        <div className="threat-frame1793">
            <div className="threat-grid">
                <div>
                      <p className="threat-preheader">THE RESULT </p>
                      </div>
                       <div>
                      <h1 className="threat-label">Trust, distilled into one light.</h1>
                      </div>
                       <div>
                      <p className="threat-body">The result is a single visual indicator: a traffic light. Green means trust. Yellow means caution. Red means stop. No dashboards to interpret. No alerts to triage. One answer, always visible, for everyone in your organization. </p>
                      </div>
                       </div>

            <div className="threat-frame1792">
                <div className="stat1">
                  <img src={stat1Image} alt="" className=" bg-cover" />
                  </div>
                   <div className="stat2">
                  <img src={stat2Image} alt="" className=" bg-cover" />
                  </div>
                   <div className="stat3">
                  <img src={stat3Image} alt="" className=" bg-cover" />
                </div>
                  
                
            </div>
        </div>
      </div>
    </section>
  );
} export default Threat;
          

           