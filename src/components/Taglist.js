import { useState } from "react";
import "../styles/Taglist.css";

function Taglist() {
    const [menu, setOpen] = useState(false);
    return (
        <div className="taglist-container">
            <div className="taglist">
                <button className="first-btn">Click Tag BTN</button>
                <button>Click Tag BTN</button>
                <button>Click Tag BTN</button>
                <button>Click Tag BTN</button>
                <button>Click Tag BTN</button>
            </div>
        </div>
    );
}
export default Taglist;
