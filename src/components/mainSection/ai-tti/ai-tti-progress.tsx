import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const AiProgress = () => {
  return (
    <Accordion className="mt-10" type="single" collapsible>
      <AccordionItem value="item-1" className="">
        <AccordionTrigger>
          <h1 className="text-xl">구현 과정</h1>
        </AccordionTrigger>
        <AccordionContent>
          <Link href={"https://ou9999-dev.com/p/server-action-with-replicate"}>
            <p className="underline cursor-pointer hover:text-slate-300">
              NEXT.JS 서버 액션으로 AI TEXT-TO-IMAGE 구현하기
            </p>
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AiProgress;
