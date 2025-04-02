import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { desc } from "../Data/JobDescData";

const JobCard = (props: any) => {
  return (
    <Link to="/job-desc" className="bg-mine-shaft-900 w-80 p-4 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px] !shadow-bright-sun-400">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
          </div>

          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>
        <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
      </div>

      <div
        className="flex gap-2 [&>div]:bg-mine-shaft-800
[&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs justify-around"
      >
        <div className="py-1 px-2">{props.experience}</div>
        <div className="py-1 px-2">{props.jobType}</div>
        <div className="py-1 px-2">{props.location}</div>
      </div>

      <Text className="!text-xs text-justify text-mine-shaft-300" lineClamp={3}>
        {props.description}
      </Text>
      <Divider size="xs" color="mine-shaft.7" />
      <div className="flex justify-between font-semibold text-mine-shaft-200">
        <div>&#8377; {props.package}</div>

        <div className="flex text-mine-shaft-400 gap-1 text-xs items-center">
          <IconClockHour3 stroke={1.5} />Posted {props.postedDaysAgo} days
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
