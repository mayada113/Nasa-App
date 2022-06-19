import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
export default function Home() {
  const [state, setState] = useState({ title: "", image: "", description: "" });
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ErOHoJetkpZcwXdhLROWoY3UnLDJgu4aqmPSfcCl"
    )
      .then((results) => results.json())
      .then((data) => {
        setState({
          title: data.title,
          image: data.url,
          description: data.explanation,
        });
      });
  }, []);

  return (
    <div>
      <MediaCard state={state} parentComponent={"home"} />
    </div>
  );
}
