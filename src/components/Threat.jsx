import stat1Image from "../assets/threat/stat1.png";
import stat2Image from "../assets/threat/stat2.png";
import stat3Image from "../assets/threat/stat3.png";
function Threat() {
  return (
    <section className="threat">
      <div className="tw-container pt-[80px] pb-[80px]">
        <div className="mx-auto flex flex-col items-center justify-center text-center">
          <p className="threat-preheader mb-4">THE RESULT </p>
          <div>
            <h2 className="threat-label mb-[16px]">
              Trust, distilled into one light.
            </h2>
          </div>
          <div>
            <p className="threat-body mb-[48px] max-w-3xl">
              The result is a single visual indicator: a traffic light. Green
              means trust. Yellow means caution. Red means stop. No dashboards
              to interpret. No alerts to triage. One answer, always visible, for
              everyone in your organization.
            </p>
          </div>
          <div className="relative h-full">
            <div className="relative flex h-auto w-full overflow-hidden">
              <div className="stat1">
                <img
                  src={stat1Image}
                  alt="Deepfake fraud losses rose 3x year over year"
                  className="bg-cover"
                />
              </div>
              <div className="stat2">
                <img
                  src={stat2Image}
                  alt="Deepfake fraud losses rose 3x year over year"
                  className="bg-cover"
                />
              </div>
              <div className="stat3">
                <img
                  src={stat3Image}
                  alt="Deepfake fraud losses rose 3x year over year"
                  className="bg-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4"></div>
        </div>
      </div>
    </section>
  );
}
export default Threat;
