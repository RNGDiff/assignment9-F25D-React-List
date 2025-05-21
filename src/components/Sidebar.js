import { useState } from "react";
import "../styles/Sidebar.css";

import Buttons from "./Buttons";

function Sidebar() {
    const [menu, setOpen] = useState(false);

    return (
        <div>
            <button className="hamburger" onClick={() => setOpen(!menu)}>
                {menu ? "❌" : "☰"}
            </button>
            <div className={`sidebar-container ${menu ? "open" : ""}`}>
                <aside className="sidebar">
                    <a href="/uppgift2">Uppgift 2</a>
                    <a href="/uppgift3">Uppgift 3</a>
                </aside>
                <Buttons />
            </div>
        </div>
    );
}

export default Sidebar;
