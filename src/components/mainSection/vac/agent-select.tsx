"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AgentButton from "./agent-button";

const agentData = [
  { name: "jett", from: "#5A8E9B", to: "#21324B" },
  { name: "viper", from: "#5C9655", to: "#121B1E" },
  { name: "astra", from: "#96558B", to: "#29114F" },
  { name: "neon", from: "#6B569D", to: "#1E1D43" },
  { name: "omen", from: "#394B7D", to: "#1F253C" },
  { name: "phoenix", from: "#85683E", to: "#8C4A3D" },
  { name: "reyna", from: "#7F434F", to: "#2C1839" },
  { name: "sage", from: "#489587", to: "#274953" },
  { name: "skye", from: "#609060", to: "#524435" },
  { name: "sova", from: "#957D6B", to: "#14192A" },
  { name: "viper", from: "#5C9655", to: "#121B1E" },
  { name: "yoru", from: "#3F6698", to: "#181432" },
];

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

  useEffect(() => {
    if (!emblaThumbsApi) return;
    onSelect();
    emblaThumbsApi.on("select", onSelect);
    emblaThumbsApi.on("reInit", onSelect);
  }, [emblaThumbsApi, onSelect]);

  return (
    <>
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
        </div>
      </div>
    </>
  );
};

export default AgentSelect;
