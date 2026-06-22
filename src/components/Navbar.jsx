import logoText from "../assets/company logo - Netarx.svg";
import toggleIcon from "../assets/icons/toggle.svg";

function NavItem({ text, width, dropdown = false, padding = "0 11px" }) {
  return (
    <li
      className="
        flex
        items-center
        justify-center
        shrink-0
        cursor-pointer
        whitespace-nowrap
        text-[#354457]
        text-[20px]
        font-medium
        leading-[28px]
        hover:text-[#E5116E]
        transition-allduration-300"
      style={{
        width: `${width}px`,
        height: "28px",
        padding,
      }}
    >
      <span>{text}</span>

      {dropdown && (
        <img
          src={toggleIcon}
          alt=""
          className="w-[16px] h-[16px] ml-[8px] shrink-0"
        />
      )}
    </li>
  );
}

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="px-25 py-5">
        <div
          className="
            
            mx-auto
            flex
            items-center
          "
        >
          {/* Logo */}
          <div className="shrink-0 cursor-pointer">
            <img src={logoText} alt="Netarx" className="w-22.5 h-7.25" />
          </div>

          {/* Navigation */}
          <ul
            className="
              flex
              items-center
             gap-5.5
            "
            style={{
              width: "736px",
              marginLeft: "32px",
              justifyContent: "space-between",
            }}
          >
            {/* Why Netarx */}
            <NavItem text="Why Netarx" width={105} />

            {/* Product */}
            <NavItem text="Product" width={69} />

            {/* Solutions */}
            <NavItem text="Solutions" width={114} dropdown />

            {/* Resources */}
            <NavItem text="Resources" width={121} dropdown />

            {/* Support */}
            <NavItem text="Support" width={102} dropdown />

            {/* Company */}
            <NavItem text="Company" width={113} dropdown padding="0 1px" />
          </ul>

          {/* CTA Buttons */}
          <div
            className="
              ml-auto
              flex
              items-center
              gap-[12.2px]
              shrink-0
            "
          >
            {/* Download Button */}
            <button
              className="
                  px-[45px]
                  py-[16px]
                border-[2px]
                border-[#E5116E]
                rounded-[8px]
                bg-white
                flex
                items-center
                justify-center
                hover:bg-[#FFF0F7]
                transition-all
                duration-300
              "
            >
              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
               
                  self-stretch
                  rounded-[8px]
                "
              >
                <span
                  className="
                    text-[#E8297D]
                    text-center
                    text-[15.6px]
                    font-bold
                    leading-[28px]
                  "
                >
                  Download
                </span>
              </div>
            </button>

            {/* Contact Us Button */}
            <button
              className="
                w-[176px]
                h-[60px]
                rounded-[8px]
                bg-[#E5116E]
                flex
                items-center
                justify-center
                hover:bg-[#D30F67]
                transition-all
                duration-300
              "
            >
              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-[45px]
                  py-[16px]
                  self-stretch
                  rounded-[8px]
                "
              >
                <span
                  className="
                    text-white
                    text-center
                    text-[14px]
                    font-bold
                    leading-[28px]
                  "
                >
                  Contact Us
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
