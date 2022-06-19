import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
export default function Search() {
  const [input, setInput] = useState("orion");
  const [state, setState] = useState([]);
  const handleChange = (e) => setInput(e.target.value);
  useEffect(() => {
    if (input.length != 0) {
      fetch("https://images-api.nasa.gov/search?q=" + input)
        .then((results) => results.json())
        .then((data) => {
          if (data.collection.items.length > 0) {
            setState(data.collection.items);
          }
        });
    }
  }, [input]);
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {state.map((s) => {
        return <MediaCard state={s} parentComponent={"search"} />;
      })}
    </div>
  );
}
