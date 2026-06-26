import { useState } from "react";
import logoText from "../assets/company logo - Netarx.svg";
import toggleIcon from "../assets/icons/toggle.svg";

const navItems = [
  { label: "Why Netarx" },
  { label: "Product" },
  { label: "Solutions", dropdown: true },
  { label: "Resources", dropdown: true },
  { label: "Support", dropdown: true },
  { label: "Company", dropdown: true },
];

function NavItem({ label, dropdown }) {
  return (
    <li className="flex cursor-pointer items-center text-[18px] font-medium whitespace-nowrap text-[#354457] transition hover:text-[#E5116E]">
      {label}

      {dropdown && <img src={toggleIcon} alt="" className="ml-2 h-4 w-4" />}
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-20">
        {/* Logo */}
        <img src={logoText} alt="Netarx" className="h-8 w-auto shrink-0" />

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 xl:flex">
          <button className="h-[60px] w-[176px] rounded-lg border-2 border-[#E5116E] font-bold text-[#E5116E] transition hover:bg-[#FFF0F7]">
            Download
          </button>

          <button className="h-[60px] w-[176px] rounded-lg bg-[#E5116E] font-bold text-white transition hover:bg-[#d30f67]">
            Contact Us
          </button>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="xl:hidden">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white xl:hidden">
          <ul className="flex flex-col gap-6 p-6">
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}

            <button className="h-12 rounded-lg border-2 border-[#E5116E] font-bold text-[#E5116E]">
              Download
            </button>

            <button className="h-12 rounded-lg bg-[#E5116E] font-bold text-white">
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
