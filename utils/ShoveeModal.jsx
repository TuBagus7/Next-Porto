"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ShoveeModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 35000);
  }, []);

  return (
    <div
      className='w-screen h-screen bg-[#74737357] flex justify-center items-center fixed top-0 left-0 z-30'
      style={showModal ? {} : { display: "none" }}
    >
      <div className='p-5 bg-white dark:bg-black rounded'>
        <p className='text-black dark:text-white'>
          Sup! Wanna discuss with me?{" "}
        </p>
        <div className='mt-2 flex justify-center'>
          <Link
            className='lg:w-[20%] flex items-center gap-2'
            href='https://shovee.com'
            target='_blank'
          >
            <Image
              alt='logo'
              height={40}
              src='/images/tb-logo.png'
              style={{
                borderRadius: "10px",
              }}
              width={40}
            />
            <p>
              <span className='text-[#17c1ff] font-semibold'>TuBagus</span>
            </p>
          </Link>
        </div>
        <div className='mt-5 flex justify-between'>
          <button
            className='text-white px-3 py-2 bg-gray-800 rounded'
            onClick={() => setShowModal(false)}
          >
            Maybe Later
          </button>
          <Link
            className='text-white px-3 py-2 bg-blue-600 rounded'
            href='#getInTouch'
            onClick={() => setShowModal(false)}
          >
            Yes, Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoveeModal;
