import React from "react";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const CompEmployees = () => {
  return (
    <div className="flex flex-wrap ml-7 mt-10 gap-16">
      {talents.map(
        (talent, index) => index < 6 && <TalentCard key={index} {...talent} />
      )}
    </div>
  );
};

export default CompEmployees;
