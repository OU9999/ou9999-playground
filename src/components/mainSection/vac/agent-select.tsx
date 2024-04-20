"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const agentData = [
  { name: "jett", from: "#5A8E9B", to: "#21324B" },
  { name: "viper", from: "#5C9655", to: "#121B1E" },
];

const AgentSelect = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [opacity, setOpacity] = useState([1, 0]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();

      const newOpacity = agentData.map((_, i) => {
        return i === selectedIndex ? 1 : 0;
      });

      setOpacity(newOpacity);
    });
  }, [api]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!api || !emblaThumbsApi) return;
      api.scrollTo(index);
    },
    [api, emblaThumbsApi]
  );

  return (
    <div className="w-full border rounded-md h-[800px] pt-20 flex justify-center items-center relative overflow-hidden">
      {agentData.map((item, index) => (
        <div
          key={item.name + index}
          className={`transition duration-500 absolute inset-0 h-full w-full`}
          style={{
            opacity: opacity[index],
            background: `linear-gradient(to bottom, ${item.from}, ${item.to})`,
          }}
        />
      ))}

      {agentData.map((item, index) => (
        <div
          key={"test" + index}
          className="w-96 h-full absolute z-20"
          style={{
            opacity: opacity[index],
          }}
        >
          <Image
            alt="agent"
            src={`/imgs/valorant/stand/${item.name}.png`}
            fill
          />
        </div>
      ))}

      <div className="absolute w-full h-32 bottom-20 z-30 px-8">
        <div className="w-full h-full border-t-2 border-slate-800 border-opacity-60 flex justify-center py-3">
          <Carousel
            className="w-full max-w-sm"
            opts={{ loop: true }}
            setApi={setApi}
          >
            <CarouselContent>
              {agentData.map((item, index) => (
                <CarouselItem key={item.name + index}>
                  {/* <div className="w-28 h-28 border-4 border-slate-100 border-opacity-60 relative">
                    <Image
                      alt="agent-icon"
                      src={`/imgs/valorant/icon/${item.name}.png`}
                      fill
                    />
                  </div> */}
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute flex bottom-[-40px]">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
          <div className="embla-thumbs bg-red-500 w-full h-10">
            <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
              <div className="embla-thumbs__container">
                {agentData.map((_, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 relative"
                    onClick={() => onThumbClick(index)}
                  >
                    <p>{index}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSelect;
