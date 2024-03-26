"use client";

import { useState } from "react";
import Link from "next/link";
import ChatBotNavigator from "@components/ChatBotNavigator";

const Home = () => {
  const [source, setSource] = useState("");
  const [dest, setDest] = useState("");
  return (
    <>
      <div className="bg-gray-50/90 border-t">
        <div className="container py-12">
          <div className="grid max-w-4xl gap-4 px-4 mx-auto text-center sm:gap-8 sm:px-6 lg:gap-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl blue_gradient">
              Find Best Possible Route
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter your source and destination to find the best route.
            </p>
            <div className="mx-auto space-y-4 sm:w-[500px]">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl">
                    Departure
                  </p>
                  <input
                    className="search_input"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="Ex: somewhere in earth"
                  />
                </div>
                <div className="space-y-1.5">
                  <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl">
                    Destination
                  </p>
                  <input
                    className="search_input"
                    value={dest}
                    onChange={(e) => setDest(e.target.value)}
                    placeholder="Ex: mce"
                  />
                </div>
              </div>
              <div>
                <Link
                  // className=" bg-black text-white rounded-md p-5 mt-12 "
                  className="black_btn"
                  href={`/result?source=${encodeURIComponent(
                    source
                  )}&destination=${encodeURIComponent(dest)}`}
                >
                  Find Routes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
