"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "../../ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../ui/carousel";
import Image from "next/image";
import GridBox from "@/components/ui/grid-box";

const sanrioData = [
  {
    imgSrc: "friend_kuromi.png",
    bg: "bg-[#3C3C3B]",
    text: "Kuromi",
  },
  {
    imgSrc: "friend_mymelody.png",
    bg: "bg-[#ff4c7c]",
    text: "My Melody",
  },
  {
    imgSrc: "friend_pk.png",
    bg: "bg-[#00aba8]",
    text: "Pochacco",
  },
  {
    imgSrc: "friend_pp.png",
    bg: "bg-[#5E3231]",
    text: "Pompompurin",
  },
  {
    imgSrc: "friend_sr.png",
    bg: "bg-[#64BBEE]",
    text: "Cinnamoroll",
  },
];

const CrossFadeTransition = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [opacity, setOpacity] = useState([1, 0, 0, 0, 0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("scroll", () => {
      const progress = api.scrollProgress();
      const index = Math.floor(progress * sanrioData.length);
      const nextIndex = (index + 1) % sanrioData.length;
      const localProgress = progress * sanrioData.length - index;

      const newOpacity = sanrioData.map((_, i) => {
        if (i === index) return 1 - localProgress;
        else if (i === nextIndex) return localProgress;
        else return 0;
      });

      setOpacity(newOpacity);
    });

    api.on("select", () => {
      console.log("select");
      const index = api.selectedScrollSnap();
      setCurrentIndex(index);
    });
  }, [api]);

  return (
    <GridBox className="w-full h-96 py-10 px-0 md:px-10">
      <div className="w-full h-64 max-w-sm border rounded-md relative  bg-slate-700">
        {sanrioData.map((item, index) => (
          <div
            key={item.imgSrc + index}
            className={`absolute rounded-md w-full h-full overflow-hidden`}
            style={{ opacity: opacity[index] }}
          >
            <Image
              alt="carousel-bg"
              src={`/imgs/carousel/${item.imgSrc}`}
              fill
            />
          </div>
        ))}
        <Carousel
          className="w-full flex justify-center items-center absolute bottom-[-30px]"
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent>
            {sanrioData.map((item, index) => (
              <CarouselItem key={item.text + index} className={`basis-10/12`}>
                <Card
                  className={`${item.bg} border-none cursor-grab shadow-xl`}
                >
                  <CardContent className="flex items-center justify-center p-6 h-10">
                    <p className={`font-semibold`}>{item.text}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute flex right-2 top-2 bg-black text-xs px-2 py-1 rounded-md bg-opacity-75">
          <p className="text-slate-50">{currentIndex + 1}</p>
          <p className="text-slate-400">&nbsp;/ {sanrioData.length}</p>
        </div>
      </div>
    </GridBox>
  );
};

export default CrossFadeTransition;
