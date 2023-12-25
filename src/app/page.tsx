"use client";

import CryptoTicker from "@/components/CryptoTicker";
import Link from "next/link";

export default function Home() {


  return (
    <>
    
      <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[80px] xl:pb-[100px] 2xl:pt-[210px] 2xl:pb-[200px]">
        <CryptoTicker/>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              
              
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 p-20">
                <Link
                  className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white 
                  hover:bg-primary/80"
                  href={"/blogs"}
                >
                  Explore All Blogs
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}