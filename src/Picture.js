import React from "react";
import "./Photos.css";

export default function Picture(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          return <img key={index} src={photo.src.landscape} alt={""} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
