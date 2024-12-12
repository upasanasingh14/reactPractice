import { useState } from "react";

export default function LikeButton (){

    let[isLiked, setIsLiked] = useState(false);
    let[clicks, setClicks] = useState(0); 

    let toggleLike =() => {
       setIsLiked(!isLiked);
       setClicks(clicks+1);
    }

    return(
        <div>
            <p>clicks = {clicks}</p>
            <p onClick={toggleLike}> Like: &nbsp;
                {
                    isLiked ? (
                        <i className="fa-solid fa-heart"></i>
                    ) :
                    (
                        <i className="fa-regular fa-heart"></i> 
                    )
                }
            </p>
                
        </div>
    )
}