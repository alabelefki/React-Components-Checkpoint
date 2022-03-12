import React from "react";
import image from "../../profileImage.png";
export default function ProfilePhoto(){
    return(
        <div>
            <img src= {image} className="photo" />
        </div>
    )
 }