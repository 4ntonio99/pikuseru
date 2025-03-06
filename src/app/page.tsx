'use client'
import Image from 'next/image';

import Carousel from "@/components/heroCarousel/heroCarousel";

import './home.css';

export default function Home() {
  return (
  <main>
    <Carousel />
    <section className="latest">
      <h4 className="latestH1">Our latest arrivals</h4>
      <p className="latestP">Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
      <div className="latestBox">
        <Image src="/lateF.png" height={521} width={368} alt="latest arrivals"/>
        <Image src="/lateS.png" height={521} width={368} alt="latest arrivals"/>
        <Image src="/lateT.png" height={521} width={368} alt="latest arrivals"/>
      </div>
    </section>
  </main>
  );
}
