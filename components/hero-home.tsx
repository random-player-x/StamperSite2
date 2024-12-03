import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Tigger from "@/public/images/tiggerOrange.jpg";
import Avatar06 from "@/public/images/avatar-06.jpeg";
import Rapunzel from "@/public/images/bluerapunzel.jpeg";
import Alice from "@/public/images/redalice.jpeg";
import Alladin from "@/public/images/purplealladin.jpeg";
import Peter from "@/public/images/greenpeter.jpeg";
import { LottieAnimation7 } from "@/components/lottiejson";

export default function HeroHome() {
  return (
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
              className="mb-6 border-y text-8xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-8xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              stamper.ai
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-3xl text-orange-400"
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
            <LottieAnimation7 />
          </div>
          <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-green-400 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Register Interest{" "}
                      <span className="ml-1 tracking-normal text-white transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-yellow-400 text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
        </div>
      </div>
    </section>
  );
}

