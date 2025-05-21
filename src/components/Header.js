import css from "../styles/Header.css";
import Taglist from "./Taglist";

function Header() {
    return (
        <div className="content-container">
            <header>
                <h1 className="header-title">F25D Borås YH - React kurs</h1>
            </header>
            <Taglist />
        </div>
    );
}

export default Header;
