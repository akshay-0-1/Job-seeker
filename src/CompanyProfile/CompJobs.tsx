import React from "react";
import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const CompJobs = () => {
  return (
    <div className="flex flex-wrap ml-7 mt-10 gap-12">
      {jobList.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default CompJobs;
