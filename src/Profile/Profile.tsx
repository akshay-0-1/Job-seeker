import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCart";


const Profile = (props: any) => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img className="rounded-t-2xl " src="../Profile/Banner.jpg" alt="" />
        <img
          className="h-48 w-48 rounded-full absolute -bottom-1/3 left-3 border-mine-shaft-950 border-8"
          src="../Images/avatar.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name}
          <Button variant="light" color="bright-sun.4">
            Message
          </Button>
        </div>
        <div className="flex text-xl gap-1 items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} /> {props.role}
          &bull; {props.company}
        </div>
        <div className="text-xs flex gap-1 items-center text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
        </div>
      </div>
      <Divider mx={"xs"} my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-mine-shaft-300 text-sm text-justify">
          {props.about}
        </div>
      </div>
      <Divider mx={"xs"} my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-3">
          {props.skills.map((skill: any, index: any) => (
            <div key={index} className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <Divider mx={"xs"} my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Experience</div>
        <div className="flex flex-col gap-5">
          {props.experience.map((exp: any, index: any) => (
            <ExpCard key={index} {...exp} />
          ))}
        </div>
      </div>
      <Divider mx={"xs"} my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Certification</div>
        <div className="flex flex-col gap-5">
          {props.certifications.map((certi: any, index: any) => (
            <CertiCard key={index} {...certi} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
