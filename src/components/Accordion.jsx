import React, { useState } from "react";
import Panel from "./Panel";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Panel
        title="About"
        isActive={activeIndex == 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is largest city. From 1929
        to 1997, it was its capital city.
      </Panel>

      <Panel
        title="Etymology"
        isActive={activeIndex == 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes fromqwdddddddddddddddddddddddddd
      </Panel>
      
    </>
  );
};

export default Accordion;
