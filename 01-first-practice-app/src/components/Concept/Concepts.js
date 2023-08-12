import React from "react";
import ConceptItem from "./ConceptItem";

const Concepts = (props) => {
  return (
    <ul id="concepts">
      <ConceptItem
        img={props.data[0].image}
        title={props.data[0].title}
        des={props.data[0].description}
      />
      <ConceptItem
        img={props.data[1].image}
        title={props.data[1].title}
        des={props.data[1].description}
      />
      <ConceptItem
        img={props.data[2].image}
        title={props.data[2].title}
        des={props.data[2].description}
      />
    </ul>
  );
};

export default Concepts;
