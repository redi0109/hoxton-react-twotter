export function LeftMenu (){
return(
    <div className="left-menu">
        <div className="left-menu-item">
          <ul>
            <li>
                <img src="https://imgs.search.brave.com/Bj8ePe76Z895YgKa7ZGy9ianeemzuiRk8DFGrfh34TA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGxhbmV0YS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTAvdHdpdHRlcmxv/Z28uanBn" alt="logo" /> 
            </li>
            <li>
                <span className = "material-symbols-outlined">home</span>
                Home
                </li>
                <li>
                <span className = "material-symbols-outlined">tag </span>
                Explore
                </li>
                <li>
                <span className = "material-symbols-outlined">notifications</span>
               Notifications
                </li>
                <li>
                <span className = "material-symbols-outlined">mail</span>
                Messages
                </li>
                <li>
                <span className = "material-symbols-outlined">bookmark</span>
                Bookmarks
                </li>
                <li>
                <span className = "material-symbols-outlined">list</span>
                Lists
                </li>
                <li>
                <span className = "material-symbols-outlined">person</span>
                Profile
                </li>
                <li>
                <span className = "material-symbols-outlined">pending</span>
                More
                </li>
                <button className="tweet"></button>
            </ul>
       </div> 
       </div>
)
}