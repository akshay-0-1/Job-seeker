import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-4">
        <div className="text-6xl font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400 leading-tight">
          Find Your <span>Dream Job</span> With Us
        </div>

        <div className="text-mine-shaft-200">
          Good Life Begins With a Good Company. Start Explore Thpusands Of Jobs
          In One Place.
        </div>
        <div className="flex gap-3">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 "
            variant="unstyled"
            placeholder="Software"
            label="Job Title"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 "
            variant="unstyled"
            placeholder="Full Time"
            label="Job Type"
          />
          <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
            <IconSearch className="h-[85%] w-[85%]" />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[30rem] relative">
          <img src="../Images/boy.png" alt="" />
          <div className="w-fit top-[50%] -right-10 absolute border-bright-sun-400 border rounded-lg p-3 backdrop-blur-md">
            <div className="text-center text-mine-shaft-100 mb-1 text-sm">50K+ got jobs</div>
            <Avatar.Group spacing="sm">
              <Avatar src="../Images/avatar1.png" radius="xl" />
              <Avatar src="../Images/avatar.png" radius="xl" />
              <Avatar src="../Images/avatar2.png" radius="xl" />
              <Avatar radius="xl">+49K</Avatar>
            </Avatar.Group>
          </div>
          <div className="w-fit top-[20%] -left-5 absolute border-bright-sun-400 border rounded-lg p-3 backdrop-blur-md flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                <img src="../Icons/Google.png" alt="" />
              </div>
              <div className="text-sm text-mine-shaft-100">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">Bengaluru</div>
              </div>
            </div>
            <div className="flex gap-2 text-mine-shaft-200 text-xs justify-around">
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
