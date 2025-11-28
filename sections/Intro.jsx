"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  // Intersection observer animation on scroll
  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Scroll Animation
    if (homeRef.current) {
      const homeObserver = new IntersectionObserver(
        ([homeEntry]) => {
          setIsHome(homeEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      homeObserver.observe(homeRef.current);

      if (isHome) {
        profileRef.current.classList.add("slide-in");
        introRef.current.classList.add("slide-in");
      } else {
        profileRef.current.classList.remove("slide-in");
        introRef.current.classList.remove("slide-in");
      }
    }
  }, [homeRef, isHome]);

  return (
    <Fragment>
      <Head>
        <title>tu__good</title>
      </Head>
      <section id="home">
        <div
          className="min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm"
          ref={homeRef}
        >
          <div
            className="translate-x-[-500px] transition-all duration-700 opacity-0"
            ref={introRef}
          >
            <p className="py-2 text-2xl md:text-4xl font-semibold font-sans">
              Hi There !
            </p>
            {/* Profile Name */}
            <p className="text-2xl md:text-4xl py-2 font-semibold font-sans">
              I&apos;m a IoT Enthusiast
              <span className="text-[#c72c6c] dark:text-[#07d0e5]"> and</span>
              <span className="ml-2">IT Programmer</span>
            </p>
            <div className="mt-5 md:mt-10 flex gap-3">
              {/* Hire Me Button */}
              <Link
                className="text-white text-xl font-semibold rounded bg-purple-500 dark:bg-cyan-500 hover:bg-purple-600 dark:hover:bg-cyan-600 px-2 py-1"
                href={"#getInTouch"}
              >
                Text Me
              </Link>
              {/* Download CV Button */}
              <Link
                className="text-xl font-semibold rounded border border-purple-500 dark:border-cyan-500 hover:border-white hover:text-white hover:bg-purple-500 dark:hover:bg-cyan-500 px-2 py-1"
                href="https://drive.google.com/file/d/17cnUVUTATnv7Lh7DmpzaQ__IHyx-Ytwz/view?usp=drivesdk"
                target="_blank"
              >
                Download CV
              </Link>
            </div>
          </div>

          {/* Image */}
          <div
            className="translate-x-[500px] transition-all opacity-0 duration-700 relative w-[180px] h-[300px] md:w-[240px] md:h-[400px] m-auto md:m-0 mt-[40px] md:mt-0"
            ref={profileRef}
          >
            {/* Smoke/Glow Animation Layer */}
            <div className="absolute inset-[-20px] -z-10 flex items-center justify-center">
              <div className="absolute w-full h-full bg-purple-600/60 dark:bg-cyan-600/60 rounded-full blur-3xl animate-[spin_4s_linear_infinite]"></div>
              <div className="absolute w-[90%] h-[90%] bg-fuchsia-500/50 dark:bg-cyan-500/50 rounded-full blur-3xl animate-[spin_6s_linear_infinite_reverse]"></div>
              <div className="absolute w-[80%] h-[80%] bg-purple-800/40 dark:bg-cyan-800/40 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Profile Image */}
            <div
              className="w-full h-full bg-cover bg-no-repeat bg-center relative z-10 shadow-[0_0_20px_rgba(147,51,234,0.3)] dark:shadow-[0_0_20px_rgba(7,208,229,0.3)]"
              style={{
                backgroundImage: "url(/images/me.png)",
                backgroundSize: "150% 100%",
                borderRadius: "100px",
                filter: "brightness(0.7) contrast(1.2)" // Darken the image
              }}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
