import React from "react";

export default function Picture(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          return <img src={photo.src.landscape} alt={""} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
