import Card from "@/components/ui/card";
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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-1">
        <Card title="Naver Webtoon Transition" badge="ui" link="naver" />
        <Card
          title="AI text-to-image Generator"
          badge="engineering"
          link="ai-tti"
          image="ai-text"
        />
      </div>
    </div>
  );
};

export default HomePage;
