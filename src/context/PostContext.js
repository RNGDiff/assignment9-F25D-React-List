import { createContext, useContext } from "react";
export const PostContext = createContext();

export const useContextPosts = () => useContext(PostContext);
