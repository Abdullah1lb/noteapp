import React from "react";

const Show = (props) => {
  const dellval = () => {
    props.delval(props.id);
  };
  return (
    <div
      className="Show bg-muted mt-5"
      style={{
        height: "10em",
        width: "20em",
        marginLeft: "2em",
        borderRadius: "1em",
        float: "left",
        boxShadow: "0px 1px 4px",
      }}
    >
      <h1 className="mx-4 mt-4 bg-warning text-light px-2">{props.title}</h1>
      <p className="mx-4  ">{props.body}</p>
      <button
        className="btn btn-success border-0 bg-dark rounded-circle float-right mx-2 mb-3"
        onClick={dellval}
      >
        -
      </button>
    </div>
  );
};
export default Show;
