import { useDispatch, useSelector } from "react-redux";
import BlogEntity from "./BlogEntity";
import AddBlog from "./AddBlog";
import {
  add,
  deleteblogaction,
  edittheblog,
  liketheblogaction,
} from "../Utils/blogActions";

export default () => {
  const blogdata = useSelector((data) => data);
  const dispatcher = useDispatch();
  const deleteblog = (index) => {
    dispatcher(deleteblogaction(index));
  };
  const liketheblog = (index) => {
    dispatcher(liketheblogaction(index));
  };
  const edit = (index) => {
    dispatcher(edittheblog(index));
  };

  const addBlogToStore = (title, blogdata) => {
    dispatcher(add({ title, blogdata, likes: 0 }));
  };
  return (
    <div>
      <h1>Blog Post App</h1>
      <AddBlog addBlogToStore={addBlogToStore} />
      <div className="blogs">
        {blogdata.map((d, index) => (
          <BlogEntity
            data={d}
            index={index}
            deleteblog={deleteblog}
            liketheblog={liketheblog}
            edit={edit}
          />
        ))}
      </div>
    </div>
  );
};
