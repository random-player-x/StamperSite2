import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import SliderAnimation from "@/components/slideranimation";
import { LottiePlayer7 } from "@/components/lottiejson";
import "./style.css";

export default function HeroHome() {
  return (
    <div className="scale-wrapper-3">
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 md:pb-20 md:pt-40 w-full justify-center items-center">
          {/* Section header */}
          <div className="text-center items-center justify-center">
          <div>
                <h1 className="text-center mb-10">
                <div className="relative w-1/2 mx-auto bg-gray-50 rounded-full items-center justify-center text-gray-400 font-bold text-4xl lg:text-[150px] animate-border shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] px-4 py-1"
                  >
                    <div className="mt-[-20px]">
                    <span className="mr-1"
                      style={{
                        color: "#FF9519",
                        textShadow: "10px 0px black",
                        fontFamily: "Lexend, sans-serif"
                      }}
                    >
                      n
                    </span>
                    <span className="mr-1"
                      style={{
                        color: "#4FA0FF",
                        textShadow: "10px 0px black",
                      }}
                    >
                      a
                    </span>
                    <span className="mr-1"
                      style={{
                        color: "#FFE34F",
                        textShadow: "10px 0px black",
                      }}
                    >
                      n
                    </span>
                    <span className="mr-1"
                      style={{
                        color: "#2DD702",
                        textShadow: "10px 0px black",
                      }}
                    >
                      e
                    </span>
                    <span className="mr-1"
                      style={{
                        color: "#FF1F00",
                        textShadow: "10px 0px black",
                      }}
                    >
                      e
                    </span>
                    </div>
                        </div>
                      </h1>
                    </div>
                  <h1
                  >
            </h1>


            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 font-bold text-4xl text-amber-900"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                GenAI products to create Joy
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
               
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <LottiePlayer7 />
          </div>
          {/* Full width slider section */}
          <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen">
            <SliderAnimation />
          </div>
          {/* Hero image */}
        </div>
      </div>
    </section>
    </div>
  );
}

