import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Footer from "./Footer";
import Write from "./Write";
import Show from "./Show";

const App = () => {
  const [sval, uval] = useState([]);
  const func = (curval) => {
    uval((prevdata) => {
      return [...prevdata, curval];
    });
  };
  const delte = (id) => {
    uval(
      sval.filter((arr, ind) => {
        return id !== ind;
      })
    );
  };
  return (
    <div className="App">
      <Header />
      <Write showdata={func} />
      {sval.map((value, ind) => {
        return (
          <Show
            title={value.title}
            body={value.body}
            key={ind}
            id={ind}
            delval={delte}
          />
        );
      })}
      <Footer />
    </div>
  );
};
export default App;
