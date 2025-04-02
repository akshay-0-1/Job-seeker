import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconAdjustments, IconBookmark, IconMapPin } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
import DOMPurify from "dompurify";
const JobDesc = (props: any) => {
  const data = DOMPurify.sanitize(desc);
  return (
    <div className="w-2/3">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img className="h-14" src={`/Icons/Google.png`} alt="" />
          </div>

          <div>
            <div className="font-semibold text-2xl">Web Developer</div>
            <div className="text-lg text-mine-shaft-300">
              Google &bull; 3 days ago &bull; 122 Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button color="bright-sun.4" size="sm" variant="light">
              {props.edit ? "Edit" : "Apply"}
            </Button>
          </Link>
          {props.edit ? (
            <Button color="red.5" size="sm" variant="outline">
              Delete
            </Button>
          ) : (
            <IconBookmark className="text-bright-sun-400 cursor-pointer" />
          )}
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-between">
        {card.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center">
            <ActionIcon
              color="bright-sun.4"
              className="!w-12 !h-12"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="!h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-mine-shaft-300 text-sm">{item.name}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">Required Key Skills</div>
        <div className="flex flex-wrap gap-3">
          {skills.map((item, index) => (
            <ActionIcon
              key={index}
              color="bright-sun.4"
              className="!w-fit !h-fit !text-sm !font-medium"
              variant="light"
              radius="xl"
              p="xs"
              aria-label="Settings"
            >
              {item}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div
        className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div></div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img className="h-8" src={`/Icons/Google.png`} alt="" />
            </div>

            <div>
              <div className="font-medium text-lg">Google</div>
              <div className=" text-mine-shaft-300">12K+ Employee</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Link to="/company">
              <Button color="bright-sun.4" variant="light">
                Company Page
              </Button>
            </Link>
          </div>
        </div>
        <div className="text-mine-shaft-300 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          itaque dolor facilis dignissimos natus illo, recusandae quia officiis
          deleniti corporis, vero ipsa, atque impedit magnam maiores temporibus.
          Enim sunt deleniti illum dolorum maxime odit nobis exercitationem at
          error, harum consequuntur ut, dolore optio sit.
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
