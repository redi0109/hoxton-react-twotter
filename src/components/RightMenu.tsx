import { useEffect, useState } from "react";

export type Trends = {
  id: number;
  name: string;
  tweets: number;
};

export function RightMenu() {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3500/trends")
      .then((resp) => resp.json())
      .then((trendsFromServer) => setTrends(trendsFromServer));
  }, []);

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
          {trends.map((trend) => (
            <li key={trend.name}>#{trend.name}
           <span className="trend-tweets"> {trend.tweets} </span> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
