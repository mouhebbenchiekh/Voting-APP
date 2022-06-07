import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const Vote = () => {
  const [subjects, setSubjects] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.API_LINK}subjects/Subjects`)
      .then((data) => {
        console.log({ data });
        setSubjects(data.data.subjects);
        console.log(data.data.subjects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {subjects.length && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {subjects.map((ele) => (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <h2>{ele.subject.title}</h2>
              {ele.subject.options.map((option) => (
                <h4>
                  {option}:
                  {ele?.votes?.length >= 1
                    ? ele?.votes?.filter((vote) => vote.choice == option).length
                    : 0}
                </h4>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Vote;
