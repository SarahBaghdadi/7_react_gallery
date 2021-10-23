import react, { Component } from "react";
import Photo from "./Photo";

const PhotoContainer = (props) => {
    let data = props.data;
    let photos = data.map(photo => {
        return(
            <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>
        );
    })
    return(
        <div className="photo-container">
            <h2>{props.title}</h2>
            <ul>
               {photos}
            </ul>
        </div>
    );
}

export default PhotoContainer;