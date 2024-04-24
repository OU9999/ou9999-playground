"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GridBox from "@/components/ui/grid-box";
import { useEffect, useState } from "react";

const carouselArray = [
  "bg-[#3C3C3B]",
  "bg-[#ff4c7c]",
  "bg-[#00aba8]",
  "bg-[#5E3231]",
  "bg-[#64BBEE]",
];

const CrossFadeProgress = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [opacity, setOpacity] = useState([1, 0, 0, 0, 0]);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("scroll", () => {
      const progress = api.scrollProgress();
      const index = Math.floor(progress * carouselArray.length);
      const nextIndex = (index + 1) % carouselArray.length;
      const localProgress = progress * carouselArray.length - index;

      const newOpacity = carouselArray.map((_, i) => {
        if (i === index) return 1 - localProgress;
        else if (i === nextIndex) return localProgress;
        else return 0;
      });

      setOpacity(newOpacity);
    });

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Accordion className="mt-10" type="single" collapsible>
        <AccordionItem value="item-1" className="data-[state=open]:border-b-0">
          <AccordionTrigger>
            <h1 className="text-xl">작동 원리</h1>
          </AccordionTrigger>
          <AccordionContent>
            <GridBox className="w-full h-auto xl:h-96 py-5 px-5 flex flex-col xl:flex-row space-y-10 xl:space-y-0 ">
              <div className="w-1/2 flex flex-col justify-center items-center">
                <div className="w-full text-center">
                  <p className="text-xl font-bold">opacity</p>
                </div>
                <table className="w-full mt-5">
                  <tr>
                    {opacity.map((item, index) => (
                      <td key={"opacity" + index} className="w-12 h-12 ">
                        <div className="flex flex-col justify-center items-center">
                          <p>Slide {index + 1}</p>
                          <p>{item.toFixed(2)}</p>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {carouselArray.map((bg, index) => (
                      <td
                        key={bg + index}
                        className="relative w-12 h-12 text-center"
                      >
                        <div className="w-full h-full flex justify-center">
                          <div
                            className={`relative w-12 h-12 rounded-sm ${bg}`}
                            style={{ opacity: opacity[index] }}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                </table>
              </div>
              <div className="w-1/2 flex flex-col justify-center items-center px-10">
                <Carousel
                  setApi={setApi}
                  opts={{ loop: true }}
                  className="w-full max-w-xs"
                >
                  <CarouselContent>
                    {carouselArray.map((_, index) => (
                      <CarouselItem key={"carousel" + index}>
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="py-2 text-center text-sm text-muted-foreground">
                  Slide {current} of {count}
                </div>
              </div>
            </GridBox>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default CrossFadeProgress;
