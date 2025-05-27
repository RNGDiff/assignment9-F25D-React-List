import "../styles/Header.css";
import { PostContext } from "../context/PostContext";
import Taglist from "./Taglist";
import Postlist from "./Postlist";

const posts = [
    {
        id: 1,
        title: "First",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, labore?",
    },
    {
        id: 2,
        title: "Second",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, labore!",
    },
    { id: 3, title: "Third", body: "Post Three" },
];

function Header() {
    return (
        <PostContext.Provider value={posts}>
            <div className="content-container">
                <header>
                    <h1 className="header-title">F25D Borås YH - React kurs</h1>
                </header>
                <div className="flex-posts">
                    <Postlist />
                    <Taglist />
                </div>
            </div>
        </PostContext.Provider>
    );
}

export default Header;
