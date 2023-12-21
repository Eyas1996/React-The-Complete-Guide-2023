import React from "react";
import Card from "../../UI/Card";

const ConceptItem = (props) => {
  return (
    <>
      <Card className="concept">
        <img src={props.img} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.des}</p>
      </Card>
    </>
  );
};

export default ConceptItem;
