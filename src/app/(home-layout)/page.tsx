import CardGrid from "@/components/mainSection/card-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge, getBadgeString } from "@/util/badge-util";
import { getTabsFromSectionData } from "@/util/section-data-util";

const HomePage = () => {
  const tabs = getTabsFromSectionData();

  return (
    <div className="w-full flex flex-col">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-transparent space-x-3 mb-3 md:mb-5">
          <TabsTrigger value="all">ALL</TabsTrigger>
          {tabs.map((tab) => (
            <TabsTrigger key={"tab" + tab.tab} value={tab.tab}>
              {getBadgeString(tab.tab as Badge)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <CardGrid key={"content all"} content={"all"} />
        </TabsContent>
        {tabs.map((tab) => (
          <TabsContent key={"content" + tab.tab} value={tab.tab}>
            <CardGrid content={tab.tab} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default HomePage;
