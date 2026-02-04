import WhatWeDo from "@/components/WhatWeDo";
import React from "react";
import { services } from "../page";

const page = () => {
  return (
    <WhatWeDo
      services={services}
      title={"WHAT WE DO"}
      description={"Everything to turn your house into a home"}
      showTitle={false}
    />
  );
};

export default page;
