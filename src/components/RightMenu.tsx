export function RightMenu() {
  return (
    <div className="right-menu">
      <label>
        <input
          className="search-bar"
          type="text"
          placeholder="Search Twitter"
        />
      </label>

      <div className="right-menu-trends">
        <h2>Trends for you</h2>
        <ul className="right-menu-list">
          <li>#JavaScript
            <span className="trend-tweets">
              1.5k Tweets
              </span>
          </li>
          <li>#React
          <span className="trend-tweets">
              1.5k Tweets
              </span>
          </li>
          <li>#TypeScript
          <span className="trend-tweets">
              1.5k Tweets
              </span>
          </li>
          <li>#Programming
          <span className="trend-tweets">
              1.5k Tweets
              </span>
          </li>
          <li>#Web Development
          <span className="trend-tweets">
              1.5k Tweets
              </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
