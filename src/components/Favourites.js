import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
export default function Favourites(props) {
  const [favouritesImages, setImages] = useState([]);
  const [description, setDescription] = useState("");
  let page;
  useEffect(async () => {
    const response = await fetch("http://localhost:8080/images");
    const favourites = await response.json();
    // console.log(favourites);
    setImages(favourites);
  }, []);

  if (props.match.params.id != undefined) {
    fetch("http://localhost:8080/image/" + props.match.params.id)
      .then((response) => response.json())
      .then((favourites) => {
        setDescription(favourites[0].description);
      });
    page = <div>{description}</div>;
  } else {
    page = (
      <div>
        {favouritesImages.map((f) => {
          return (
            <div>
              <MediaCard state={f} parentComponent={"favourites"} />
            </div>
          );
        })}
      </div>
    );
  }
  return <div>{page}</div>;
}
