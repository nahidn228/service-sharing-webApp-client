/* eslint-disable react/prop-types */
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ServiceCard from "./ServiceCard";

const TabCategories = () => {
  return (
    <Tabs>
      <div className=" bg-white container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-black capitalize lg:text-3xl ">
          Browse Jobs By Categories
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-black">
          Three categories available for the time being. They are Web
          Development, Graphics Design and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
        <div className="flex items-center justify-center text-black">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ServiceCard />
            <ServiceCard />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ServiceCard /> <ServiceCard />
            <ServiceCard /> <ServiceCard />
            <ServiceCard /> <ServiceCard />
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
