import { useEffect, useState } from "react";

export function MainMenu() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3500/tweets")
      .then((resp) => resp.json())
      .then((tweetsFromServer) => setTweets(tweetsFromServer));
  } , []);
  
  return (
    <div className="main-menu">
      <h1>Home</h1>
      <div className="create-post">
        <div className="add-post">
          <img
            className="profile-picture"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="profile picture"
          />
          <input
            className="add-post-input"
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <div className="add-post-button-div">
          <button className="add-post-button">Tweet</button>
        </div>
      </div>

      <div className="tweets">
        <div className="tweet">
          <img
            className="profile-picture"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="profile picture"
          />
          <div className="tweet-content">
            <h2>
              <a href="#">@JohnDoe</a>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, quisquam.
            </p>
            </div>
            </div>


    </div>
    </div>
  );
}
