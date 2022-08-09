export function MainMenu() {
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
    </div>
  );
}
