import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Tigger from "@/public/images/tiggerOrange.jpg";
import Avatar06 from "@/public/images/avatar-06.jpeg";
import Rapunzel from "@/public/images/bluerapunzel.jpeg";
import Alice from "@/public/images/redalice.jpeg";
import Alladin from "@/public/images/purplealladin.jpeg";
import Peter from "@/public/images/greenpeter.jpeg";
import { LottiePlayer7 } from "@/components/lottiejson";

export default function HeroHome() {
  return (
    <div className="scale-wrapper-3">
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="text-center items-center justify-center">
            <div
              className=" border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Rapunzel}
                  width={80}
                  height={80}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Alladin}
                  width={80}
                  height={80}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Tigger}
                  width={80}
                  height={80}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Peter}
                  width={80}
                  height={80}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Alice}
                  width={80}
                  height={80}
                  alt="Avatar 05"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={80}
                  height={80}
                  alt="Avatar 06"
                />
              </div>
            </div>
            <h1
              className="mb-6 bg-[#f4f4f6] w-fit px-10 pb-3 mx-auto mt-5 rounded-full text-8xl font-bold relative"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              <span className="mr-1"
                style={{
                  color: "#FF9519",
                  textShadow: "7px 0px black",
                  fontFamily: "Lexend, sans-serif"
                }}
              >
                n
              </span>
              <span className="mr-1"
                style={{
                  color: "#4FA0FF",
                  textShadow: "7px 0px black",
                }}
              >
                a
              </span>
              <span className="mr-1"
                style={{
                  color: "#FFE34F",
                  textShadow: "7px 0px black",
                }}
              >
                n
              </span>
              <span className="mr-1"
                style={{
                  color: "#2DD702",
                  textShadow: "7px 0px black",
                }}
              >
                e
              </span>
              <span className="mr-1"
                style={{
                  color: "#FF1F00",
                  textShadow: "7px 0px black",
                }}
              >
                e
              </span>
            </h1>


            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 font-bold text-3xl text-amber-900"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                GenAI products to create Joy
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
               
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="flex items-center justify-center">
            <LottiePlayer7 />
          </div>
          <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                >
                  <a
                    className="btn w-full text-xl bg-amber-900 text-white md:w-1/4 shadow hover:bg-amber-100 hover:text-black sm:ml-4 sm:w-auto"
                    href="/contactUs"
                  >
                    Learn More
                  </a>
                </div>
        </div>
      </div>
    </section>
    </div>
  );
}

