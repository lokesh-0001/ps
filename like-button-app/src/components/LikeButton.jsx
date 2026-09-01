import React, { useState } from 'react';
function LikeButton() {
 // 1. Declare state initialized to 0
 const [likes, setLikes] = useState(0);
 // 2. Increment handler using functional updater
 const handleLike = () => {
 setLikes((prevLikes) => prevLikes + 1);
 };
 // 3. Reset handler
 const handleReset = () => {
 setLikes(0);
 };
 return (
 <div className="like-container">
 <h1 className="title">Like Button Application</h1>
 <p className="likes-count">
 Current Likes: <span className="count-value">{likes}</span>
 </p>
 <div className="button-group">
 <button className="btn btn-like" onClick={handleLike}>
 Like
 </button>
 <button className="btn btn-reset" onClick={handleReset}>
 Reset
 </button>
 </div>
 </div>
 );
}
export default LikeButton;