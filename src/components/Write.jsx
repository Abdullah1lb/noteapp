import React, { useState } from "react";

const Write = (props) => {
  const [curval, upval] = useState({ title: "", body: "" });
  const [showw, upshow] = useState(false);
  const Onchange = (obj) => {
    const { name, value } = obj.target;
    upval((array) => {
      return { ...array, [name]: value };
    });
  };
  const show = () => {
    props.showdata(curval);
    upval({ title: "", body: "" });
  };
  return (
    <div
      className="Write mt-5 p-3 "
      style={{
        marginLeft: "25em",
        marginRight: "25em",
        borderRadius: "1em",
        boxShadow: "0px 1px 4px",
      }}
    >
      {showw ? (
        <input
          type="text"
          className="form-control border border-0 border-bottom-1"
          width="10em"
          placeholder="Title"
          name="title"
          onChange={Onchange}
          value={curval.title}
        />
      ) : null}
      <textarea
        name="body"
        cols="40"
        rows="3"
        placeholder="Enter your Notes..."
        className="form-control border-0 mt-2 "
        onChange={Onchange}
        value={curval.body}
        onClick={() => {
          upshow(true);
        }}
        onDoubleClick={() => {
          upshow(!showw);
        }}
      />
      {showw ? (
        <button
          className="btn btn-success border-0 bg-dark rounded-circle float-right mx-2 mb-3"
          onClick={show}
        >
          +
        </button>
      ) : null}
    </div>
  );
};
export default Write;
