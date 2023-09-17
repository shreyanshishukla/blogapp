import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Utils/blogActions";

export default ({ addBlogToStore }) => {
  const [title, setTitle] = useState("");
  const [blogdata, setblogdata] = useState("");
  return (
    <div className="addablog">
      <input
        className="addinputtitle"
        placeholder="What's the title?"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        className="addinputdata"
        placeholder="what's in your mind?"
        onChange={(e) => {
          setblogdata(e.target.value);
        }}
      />
      <button
        className="addblog"
        onClick={() => {
          if (title != "" && blogdata != "") addBlogToStore(title, blogdata);
        }}
      >
        Add
      </button>
    </div>
  );
};
