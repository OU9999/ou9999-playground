import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-transparent space-x-3">
          <TabsTrigger value="all">ALL</TabsTrigger>
          <TabsTrigger value="ui">UI/UX</TabsTrigger>
          <TabsTrigger value="engineering">Engineering</TabsTrigger>
        </TabsList>

        <TabsContent value="all">all</TabsContent>
        <TabsContent value="ui">UI/UX</TabsContent>
        <TabsContent value="engineering">Engineering</TabsContent>
      </Tabs>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4">
        <div className="min-h-72 md:min-h-72 rounded-md flex flex-col overflow-hidden">
          <div className="h-5/6 bg-red-500"></div>
          <div className="h-20 px-3 py-2 bg-slate-800 space-y-1">
            <Badge variant={"ui"}>UI/UX</Badge>
            <p className="pl-1">Naver Webtoon Transition</p>
          </div>
        </div>
        <div className="min-h-72 md:min-h-72 rounded-md flex flex-col overflow-hidden">
          <div className="h-5/6 bg-red-500"></div>
          <div className="h-20 px-3 py-2 bg-slate-800 space-y-1">
            <Badge variant={"engineering"}>Engineering</Badge>
            <p className="pl-1">AI text-to-image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
