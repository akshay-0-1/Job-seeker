import React from "react";

const PostedJobCard = (props:any) => {
  return <div className="bg-mine-shaft-900 p-2 rounded-xl border-l-2 border-bright-sun-400">
    <div className="text-sm font-semibold">{props.jobTitle}</div>
    <div className="text-xs text-mine-shaft-300 font-medium">{props.location}</div>
    <div className="text-xs text-mine-shaft-300">{props.posted}</div>

  </div>;
};

export default PostedJobCard;
