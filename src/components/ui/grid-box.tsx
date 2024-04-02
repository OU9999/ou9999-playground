import { cn } from "@/lib/utils";

interface GridBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

const GridBox = ({ className, ...props }: GridBoxProps) => {
  return (
    <div
      className={cn(
        "border rounded-md bg-[length:2rem_2rem] md:bg-[length:4rem_4rem] bg-grid-background flex justify-center items-center",
        className
      )}
      {...props}
    />
  );
};

export default GridBox;
