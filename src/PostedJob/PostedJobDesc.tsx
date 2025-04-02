import { Badge, Tabs } from "@mantine/core";
import React from "react";
import CompEmployees from "../CompanyProfile/CompEmployees";
import CompJobs from "../CompanyProfile/CompJobs";
import CompAbout from "../CompanyProfile/CompAbout";
import Jobs from "../FindJobs/Jobs";
import JobDesc from "../JobDescription/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = () => {
  return (
    <div className="mt-5 w-3/4 px-5">
      <div className="text-2xl font-semibold flex items-center">
        Software Engineer{" "}
        <Badge variant="light" color="bright-sun.4" ml="sm" size="sm">
          active
        </Badge>
      </div>
      <div className="font-medium text-mine-shaft-300 mb-5">
        South Dilli, India
      </div>
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="overview">
          <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>*]:w-full">
            <JobDesc edit />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="flex flex-wrap mt-10 gap-5 justify-around">
              {talents.map(
                (talent, index) =>
                  index < 6 && <TalentCard key={index} {...talent} posted />
              )}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className="flex flex-wrap mt-10 gap-5 justify-around">
              {talents.map(
                (talent, index) =>
                  index < 6 && <TalentCard key={index} {...talent} invited />
              )}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobDesc;
