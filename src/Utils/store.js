import { createStore } from "redux";
import blogReducer from "./blogReducer";

export default createStore(blogReducer);
