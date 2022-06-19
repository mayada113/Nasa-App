import React from "react";
import "../css/mediacard.css";
import axios from "axios";
//--------------------------------------------
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
//=====================================================
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//-----------------------------------------------------
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
//=====================================================
//-----------------------------------------------------

export default function MediaCard(props) {
  //===================================================
  const classes = useStyles();
  //===================================================
  const saveImage = async () => {
    await axios.post("http://localhost:8080/image", {
      image: props.state.links[0].href,
      title: props.state.data[0].title,
      description: props.state.data[0].description,
    });
  };
  const deleteImage = async () => {
    await axios.delete("http://localhost:8080/image/" + props.state._id);
  };
  let page;
  if (props.parentComponent == "home") {
    page = (
      <div>
        <div>{props.state.title}</div>
        <div>
          <img className="astronomyPhoto" src={props.state.image} />
        </div>
        <div>{props.state.description}</div>;
      </div>
    );
  }
  if (props.parentComponent == "search") {
    //console.log(props.state.links);
    let image;
    if (props.state.links === undefined) {
      image = "https://wallpapercave.com/wp/wp2537078.jpg";
    } else {
      image = props.state.links[0].href;
    }
    page = (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {props.state.data[0].title}
          </Typography>
          <CardMedia className={classes.media} image={image} />
          <CardActions>
            <Button onClick={saveImage} variant="contained" color="primary">
              Like
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      // <div>
      //   <div>{props.state.title}</div>
      //   <div>
      //     <img className="astronomyPhoto" src={props.state.image} />
      //   </div>
      //   <button onClick={saveImage}>Like</button>;
      // </div>
    );
  }
  if (props.parentComponent == "favourites") {
    console.log(props.state);
    page = (
      <div>
        <div>{props.state.title}</div>
        <div>
          <Link to={`/favourite/${props.state._id}`}>
            <img className="astronomyPhoto" src={props.state.image} />
          </Link>
        </div>
        <button onClick={deleteImage}>UnLike</button>
      </div>
    );
  }
  return <div>{page}</div>;
}
