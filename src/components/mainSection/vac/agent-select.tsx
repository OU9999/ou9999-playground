"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AgentButton from "./agent-button";
import { agentData } from "@/constant/agent-data";
import CarouselButton from "./vac-carousel-button";
import Image from "next/image";

const AgentSelect = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [opacity, setOpacity] = useState([1, 0]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    loop: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaThumbsApi) return;
      emblaThumbsApi.scrollTo(index);
    },
    [emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaThumbsApi) return;
    const selectedIndex = emblaThumbsApi.selectedScrollSnap();

    const newOpacity = agentData.map((_, i) => {
      return i === selectedIndex ? 1 : 0;
    });

    setOpacity(newOpacity);
    setSelectedIndex(emblaThumbsApi.selectedScrollSnap());
  }, [emblaThumbsApi, setSelectedIndex]);

  const scrollPrev = useCallback(() => {
    emblaThumbsApi?.scrollPrev();
  }, [emblaThumbsApi]);

  const scrollNext = useCallback(() => {
    emblaThumbsApi?.scrollNext();
  }, [emblaThumbsApi]);

  useEffect(() => {
    if (!emblaThumbsApi) return;
    onSelect();
    emblaThumbsApi.on("select", onSelect);
    emblaThumbsApi.on("reInit", onSelect);
  }, [emblaThumbsApi, onSelect]);

  return (
    <>
      <div className="w-full border rounded-md md h-[500px] md:h-[800px] pt-20 flex justify-center items-center relative overflow-hidden">
        <div className="z-30 w-36 md:w-40 xl:w-52 absolute right-5 md:right-5 xl:right-10 top-5 md:top-5 xl:top-14 flex flex-col items-end">
          <p className="text-xs md:text-sm">
            {agentData[selectedIndex].role.toUpperCase()}
          </p>
          <p className="text-xl md:text-2xl xl:text-4xl font-bold text-[#EAEFB0]">
            {agentData[selectedIndex].name.toUpperCase()}
          </p>
        </div>

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
            className="w-60 md:w-96 h-96 md:h-full absolute z-20"
            style={{
              opacity: opacity[index],
            }}
          >
            <Image
              alt="agent"
              src={`/imgs/valorant-stand/${item.name}.png`}
              fill
            />
          </div>
        ))}

        <div className="absolute w-full h-32 bottom-0 md:bottom-20 z-30 px-3 md:px-8">
          <div className="w-full h-full border-t-4 border-slate-700 border-opacity-60 flex justify-center py-3">
            <div className="w-full h-auto">
              <div ref={emblaThumbsRef} className="overflow-hidden">
                <div className="w-auto flex flex-row pl-2 space-x-2">
                  {agentData.map((item, index) => (
                    <AgentButton
                      key={"agent-button" + item.name + index}
                      img={item.name}
                      clickFn={() => onThumbClick(index)}
                      selected={index === selectedIndex}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex w-full mt-5 justify-center items-center">
            <div className="w-44 flex justify-between items-center space-x-2 backdrop-blur-md">
              <CarouselButton clickFn={scrollPrev} variant="prev" />

              <p className="relative top-[-2px] font-bold">
                {selectedIndex + 1} / {agentData.length}
              </p>

              <CarouselButton clickFn={scrollNext} variant="next" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentSelect;
