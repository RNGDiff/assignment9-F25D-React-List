import Post from "./Post";
import "../styles/Postlist.css";
import { useContextPosts } from "../context/PostContext";

function PostList() {
    const posts = useContextPosts();

    return (
        <div className="postlist-container">
            <div className="post-list">
                {posts.map((post, idx) => (
                    <Post key={post.id || idx} {...post} />
                ))}
            </div>
        </div>
    );
}

export default PostList;
