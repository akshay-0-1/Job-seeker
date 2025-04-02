import { Avatar, Indicator } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";

import React from "react";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  // function NavLink(): React.ReactNode {
  //   throw new Error("Function not implemented.");
  // }

  const location = useLocation();
  return location.pathname != "/signup" && location.pathname != "/login" ? (
    <div className='w-full bg-mine-shaft-950 text-white h-20 flex justify-between p-6 items-center font-["poppins"]'>
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAnchor className="h-8 w-8 stroke={2.5}" />
        <div className="text-3xl font-semibold">SkillSeeker</div>
      </div>
      {NavLinks()}
      <div className="flex gap-3 items-center">
        
        <ProfileMenu/>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="bright-sun.4" offset={6} size={8} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
