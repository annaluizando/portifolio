import Image from "next/image";
import Menu from "@assets/Menu.jsx";

export default function NavBar() {
  return (
    <>
      <div className="flex w-full">
        <div className="flex w-full justify-between  max-[917px]:invisible items-center px-20">
          <a href="#AboutMe" className="px-2">
            About Me
          </a>
          <a href="#Projects" className="px-2">
            Projects
          </a>
          <a href="#Technologies" className="px-2">
            Technologies
          </a>
          <a href="#Contact" className="px-2">
            Contact
          </a>
        </div>

        <Menu className="max-[917px]:min-w-max w-10 h-10 min-[917px]:invisible px-5"></Menu>
      </div>
    </>
  );
}
