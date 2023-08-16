import Image from "next/image";
import Menu from "@assets/Menu.jsx";
import logo from "../../public/A.svg";

export default function NavBar() {
  return (
    <>
      <div className="flex w-full justify-between">
        <Image src={logo} width={75} height={65} alt="logo"></Image>

        <div className="flex w-9/12 justify-center items-center max-[1215px]:invisible">
          <ul className="p-0 table w-3/4 text-center">
            <li className="table-cell relative p-3">
              <a
                href="#AboutMe"
                className="uppercase font-semibold tracking-wider inline-block relative after:absolute after:bottom-0 pb-1 after:bg-white after:transition-all after:duration-500  after:ease-in-out after:h-px after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0"
              >
                About Me
              </a>
            </li>
            <li className="table-cell relative p-3">
              <a
                href="#Projects"
                className="uppercase font-semibold tracking-wider inline-block relative after:absolute after:bottom-0 pb-1 after:bg-white after:transition-all after:duration-500  after:ease-in-out after:h-px after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0"
              >
                Projects
              </a>
            </li>
            <li className="table-cell relative p-3">
              <a
                href="#Technologies"
                className="uppercase font-semibold tracking-wider inline-block relative after:absolute after:bottom-0 pb-1 after:bg-white after:transition-all after:duration-500  after:ease-in-out after:h-px after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0"
              >
                Technologies
              </a>
            </li>
            <li className="table-cell relative p-3">
              <a
                href="#Contact"
                className="uppercase font-semibold tracking-wider inline-block relative after:absolute after:bottom-0 pb-1 after:bg-white after:transition-all after:duration-500  after:ease-in-out after:h-px after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <Menu className="max-[1215px]:min-w-max w-10 h-10 min-[1215px]:invisible"></Menu>
      </div>
    </>
  );
}
