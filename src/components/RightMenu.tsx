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
          <li>#JavaScript</li>
          <li>#React</li>
          <li>#TypeScript</li>
          <li>#Programming</li>
          <li>#Web Development</li>
        </ul>
      </div>
    </div>
  );
}
