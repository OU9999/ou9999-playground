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
    </div>
  );
};

export default HomePage;
