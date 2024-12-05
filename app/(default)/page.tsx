'use client';

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";


import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#FFE34F", "#4FA0FF", "#FF9519", "#2DD702", "#FF1F00"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 1, max: 30 },
      },
      links: {
        enable: true,
        distance: 500,
        color: "#808080",
        opacity: 0.4,
        width: 0,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none" as const,
        random: true,
        straight: true,
        outModes: "out" as const,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.8,
            width: 100,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  return (
    <div className="relative absolute z-20">
      <Particles
        className="absolute inset-0 -z-10"
        options={particlesOptions}
        init={particlesInit}
      />
      <div className="relative z-10">
        <Hero />
        <BusinessCategories />
        <FeaturesPlanet />
        <LargeTestimonial />
        <Cta />
      </div>
    </div>
  );
}
