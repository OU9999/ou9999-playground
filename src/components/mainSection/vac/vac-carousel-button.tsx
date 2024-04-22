import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselButtonProps {
  clickFn: () => void;
  variant: "prev" | "next";
}

const CarouselButton = ({ clickFn, variant }: CarouselButtonProps) => {
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      className="bg-slate-300 bg-opacity-10 text-slate-50 rounded-none border-none"
      onClick={clickFn}
    >
      {variant === "prev" ? (
        <>
          <ChevronLeft className="w-5 h-5" />
          <span className="sr-only">Prev slide</span>
        </>
      ) : (
        <>
          <ChevronRight className="w-5 h-5" />
          <span className="sr-only">Next slide</span>
        </>
      )}
    </Button>
  );
};

export default CarouselButton;
