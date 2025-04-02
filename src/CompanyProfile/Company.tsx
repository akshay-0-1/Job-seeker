import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import React from "react";
import AboutComp from "./CompAbout";
import CompJobs from "./CompJobs";
import CompEmployees from "./CompEmployees";
import CompAbout from "./CompAbout";

const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative">
        <img
          className="rounded-t-2xl mt-5"
          src="../Profile/Banner.jpg"
          alt=""
        />
        <img
          className="h-36 w-36 p-2 rounded-3xl bg-mine-shaft-950 absolute -bottom-1/3 left-3 border-mine-shaft-950 border-8"
          src="../Icons/Google.png"
          alt=""
        />
      </div>
      <div>
        <div className="px-3 mt-20">
          <div className="text-3xl font-semibold flex justify-between">
            Google
            <Avatar.Group spacing="sm">
              <Avatar src="../Images/avatar1.png" radius="xl" />
              <Avatar src="../Images/avatar.png" radius="xl" />
              <Avatar src="../Images/avatar2.png" radius="xl" />
              <Avatar radius="xl">+49K</Avatar>
            </Avatar.Group>
          </div>

          <div className="text-xs flex gap-1 items-center text-mine-shaft-300">
            <IconMapPin className="h-5 w-5" stroke={1.5} /> Kolhapur, India
          </div>
        </div>
        <Divider mx={"xs"} my="xl" />
        <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
      <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
        <Tabs.Tab value="about">about</Tabs.Tab>
        <Tabs.Tab value="jobs">jobs</Tabs.Tab>
        <Tabs.Tab value="employees">employees</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about"><CompAbout/></Tabs.Panel>
      <Tabs.Panel value="jobs"><CompJobs/></Tabs.Panel>
      <Tabs.Panel value="employees"><CompEmployees/></Tabs.Panel>
    </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Company;
