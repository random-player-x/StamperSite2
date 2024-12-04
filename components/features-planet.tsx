import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetTagImg01 from "@/public/images/Group 18.jpg";
import PlanetTagImg02 from "@/public/images/Group 19.jpg";
import PlanetTagImg03 from "@/public/images/Group 20.jpg";
import PlanetTagImg04 from "@/public/images/Group 21.jpg";

export default function FeaturesPlanet() {
  return (
    <section className="z-10 relative before:absolute before:inset-0 before:-z-20 before:bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center">
             <h2 className="text-3xl font-bold text-amber-900 mb-10 md:text-5xl">
              everyone_at_one_place
            </h2> 
          </div>
          {/* Planet */}
          <div className="" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <Image
                  className="rounded-full bg-gradient-to-r from-blue-500 via-green-400 via-yellow-500 to-orange-500 "
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">

                  <div>
                    <Image
                      className="rounded-full absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="rounded-full absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Tag 02"
                    />
                    <Image
                      className="rounded-full absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="rounded-full absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
        </div>
      </div>
    </section>
  );
}
