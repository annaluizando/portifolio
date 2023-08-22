import Image from "next/image";
import { Poppins } from "next/font/google";
import NavBar from "@component/NavBar";
import github from "@assets/socials/github.svg";
import email from "@assets/socials/email.svg";
import linkedin from "@assets/socials/linkedin.svg";
import half from "@assets/half_form.svg";
import css from "@assets/techs/css.svg";
import figma from "@assets/techs/figma.svg";
import html from "@assets/techs/html.svg";
import js from "@assets/techs/js.svg";
import ts from "@assets/techs/ts.svg";
import ps from "@assets/techs/ps.svg";
import react from "@assets/techs/react.svg";
import scss from "@assets/techs/scss.svg";
import tailwind from "@assets/techs/tailwindcss.svg";
import storybook from "@assets/techs/storybook.svg";
import form from "@assets/form1.svg";
import form2 from "@assets/form2.svg";
import Head from "next/head";

const font = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`overflow-x-hidden flex min-h-screen min-w-screen flex-col items-center justify-between scroll-smooth snap-mandatory snap-y ${font.className}`}
    >
      <Head>
        <title>Portifolio</title>
        <meta name="description" content="Front-End dev portifolio"></meta>
        <link rel="icon" href="/A.svg"></link>
      </Head>

      <Image
        src={form}
        alt="form"
        className="max-[1215px]:hidden  min-[1215px]:absolute -right-0"
      ></Image>

      <div className="h-[615px] w-9/12 flex flex-col justify-between mt-8">
        <NavBar></NavBar>
        <div className="z-10 w-full max-w-5xl items-center justify-between text-xs lg:flex">
          <h1 className="font-medium text-6xl border-r- whitespace-nowrap">
            Hi, my name is Anna
          </h1>

          <h1 className="font-medium text-6xl border-r- whitespace-nowrap">
            and this is my portifolio.
          </h1>
        </div>
      </div>

      <div
        id="AboutMe"
        className="snap-center h-[1500px] w-10/12 flex justify-center items-center"
      >
        <div className="flex flex-col w-[617px] h-[371px] items-center text-justify">
          <p>
            I always liked things related to design world and so i started my
            journey in programming (my current focus is Front-End) enrolling in
            systems analysis and development undergraduate course in the
            beginning of 2022. Since then i started to get excited with the area
            of programming and each day, when i see what coding can do i get
            more excited.
            <br />
            Here you can see some of the technologies that im exploring and
            projects!
          </p>
        </div>
      </div>

      <div
        id="Projects"
        className="snap-start h-[1500px] w-10/12 mb-10 grid justify-center justify-items-start"
      >
        <h1 className="text-xl font-medium w-[250px]">
          check out some of my (loved) works:
        </h1>

        <div className="grid grid-cols-2 gap-6 w-[1220px]">
          <div className="w-[571px] h-[414px] border-white border-4 rounded-lg"></div>
          <div className="w-[571px] h-[414px] border-white border-4 rounded-lg"></div>
          <div className="w-[571px] h-[414px] border-white border-4 rounded-lg"></div>
          <div className="w-[571px] h-[414px] border-white border-4 rounded-lg"></div>
          <div className="w-[571px] h-[414px] border-white border-4 rounded-lg"></div>
          <div className="w-[571px] h-[414px] border-white border-4 rounded-lg"></div>
        </div>

        <div id="Technologies" className="flex w-4/5 justify-between">
          <div className="relative group flex content-center items-center">
            <Image
              alt="html"
              src={html}
              className="hover:skew-y-6 ease-in-out duration-1000 hover:scale-110"
            />
            <p className="hidden group-hover:block group-hover:ease-in-out group-hover:duration-1000 left-[100px] text-gray-700 font-medium text-2xl ml-1">
              HTML
            </p>
          </div>

          <div className="relative group flex content-center items-center">
            <Image
              alt="css"
              src={css}
              className="hover:ease-in-out duration-700 hover:scale-110"
            />
            <p className="hidden group-hover:block group-hover:ease-in-out group-hover:duration-1000 left-[100px] text-gray-700 font-medium text-2xl ml-1">
              CSS
            </p>
          </div>

          <div className="relative group flex content-center items-center">
            <Image alt="javascript" src={js} width={45} height={45} />
            <p className="hidden group-hover:block group-hover:ease-in-out group-hover:duration-1000 left-[100px] text-gray-700 font-medium text-2xl ml-2">
              JavaScript
            </p>
          </div>

          <div className="relative group flex content-center items-center">
            <Image
              alt="typescript"
              src={ts}
              width={45}
              height={45}
              className="hover:skew-y-6 ease-in-out duration-700 hover:scale-110"
            />
            <p className="hidden group-hover:block group-hover:ease-in-out group-hover:duration-1000 left-[100px] text-gray-700 font-medium text-2xl ml-2">
              TypeScript
            </p>
          </div>

          <div className="relative group flex content-center items-center">
            <Image
              alt="react"
              src={react}
              width={45}
              height={45}
              className="hover:skew-y-6 ease-in-out duration-700 hover:scale-110"
            />
            <p className="hidden group-hover:block group-hover:ease-in-out group-hover:duration-1000 left-[100px] text-gray-700 font-medium text-2xl ml-2">
              React
            </p>
          </div>

          <div className="relative group flex content-center items-center">
            <Image
              alt="scss"
              src={scss}
              width={45}
              height={45}
              className="hover:skew-y-6 ease-in-out duration-700 hover:scale-110"
            />
            <p className="hidden group-hover:block group-hover:ease-in-out group-hover:duration-1000 left-[100px] text-gray-700 font-medium text-2xl ml-2">
              SCSS
            </p>
          </div>

          <div className="relative group flex content-center items-center">
            <Image
              alt="tailwind"
              src={tailwind}
              width={45}
              height={45}
              className="hover:skew-y-6 ease-in-out duration-700 hover:scale-110"
            />
            <p className="hidden group-hover:block group-hover:ease-in-out group-hover:duration-1000 left-[100px] text-gray-700 font-medium text-2xl ml-2">
              Tailwind CSS
            </p>
          </div>

          <div className="relative group flex content-center items-center">
            <Image
              alt="storybook"
              src={storybook}
              width={45}
              height={45}
              className="hover:skew-y-6 ease-in-out duration-700 hover:scale-110"
            />
            <p className="hidden group-hover:block group-hover:ease-in-out group-hover:duration-1000 left-[100px] text-gray-700 font-medium text-2xl ml-2">
              Storybook
            </p>
          </div>

          <div className="relative group flex content-center items-center">
            <Image
              alt="figma"
              src={figma}
              width={45}
              height={45}
              className="hover:skew-y-6 ease-in-out duration-700 hover:scale-110"
            />
            <p className="hidden group-hover:block group-hover:ease-in-out group-hover:duration-1000 left-[100px] text-gray-700 font-medium text-2xl ml-2">
              Figma
            </p>
          </div>

          <div className="relative group flex content-center items-center">
            <Image
              alt="photoshop"
              src={ps}
              width={45}
              height={45}
              className="hover:skew-y-6 ease-in-out duration-700 hover:scale-110"
            />
            <p className="hidden group-hover:block group-hover:ease-in-out left-[50px] text-gray-700 font-medium text-2xl ml-2">
              Photoshop
            </p>
          </div>
        </div>
      </div>

      <div
        id="Contact"
        className="snap-center h-[780px] w-10/12 mt-20 grid content-center"
      >
        <div className="h-[500px] flex justify-center items-center">
          <div className="grid h-96">
            <h1 className="text-5xl	font-medium w-[550px]">
              Liked my projects and want to work with me?
            </h1>
            <h2 className="text-4xl font-semibold uppercase mt-7">
              Let&#39;s Talk:
            </h2>

            <div className="flex w-80 max-h-60 items-center justify-between">
              <Image
                src={form2}
                alt="form"
                className="max-[1720px]:hidden  min-[1720px]:absolute -left-64"
              ></Image>

              <div className="grid w-[45px] h-[200px] content-around">
                <a href="https://github.com/annaluizando">
                  <Image
                    src={github}
                    alt="github-icon"
                    width={45}
                    height={45}
                  ></Image>
                </a>

                <a href="https://linkedin.com/in/annaluizando/">
                  <Image
                    src={linkedin}
                    alt="linkedin-icon"
                    width={45}
                    height={41}
                  ></Image>
                </a>

                <a href="">
                  <Image
                    src={email}
                    alt="email-icon"
                    width={45}
                    height={37}
                  ></Image>
                </a>
              </div>

              <div className="grid w-auto h-[200px] items-center content-around">
                <a
                  href="https://github.com/annaluizando"
                  className="flex items-center h-[45px]"
                >
                  github.com/annaluizando
                </a>
                <a
                  href="https://linkedin.com/in/annaluizando/"
                  className="flex items-center h-[45px]"
                >
                  linkedin.com/in/annaluizando
                </a>
                <a href="" className="flex items-center h-[45px]">
                  annaluiza.ndo@gmail.com
                </a>
              </div>
            </div>
          </div>

          <Image src={half} alt="half-form" width={306} height={308}></Image>
        </div>
      </div>
    </main>
  );
}
