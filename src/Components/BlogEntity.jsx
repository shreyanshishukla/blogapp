import { useRef } from "react";

export default ({ data, index, deleteblog, liketheblog, edit }) => {
  const ref = useRef();
  const ref2 = useRef();

  const edittheinpt = () => {
    ref.current.style.display = "none";
    ref2.current.style.display = "block";
  };
  const saveEdit = (index) => {
    edit({ blogdata: ref2.current.children[0].value, index: index });
    ref2.current.style.display = "none";
    ref.current.style.display = "block";
  };
  return (
    <>
      <div className="blog" key={index}>
        <div className="title">{data.title}</div>
        <div className="blogdata">
          <div className="data" ref={ref}>
            {data.blogdata}
          </div>
          <div className="datachnge" ref={ref2}>
            <input className="databloginput" defaultValue={data.blogdata} />
            <button onClick={() => saveEdit(index)}>save changes</button>
          </div>
          <div className="rightutils">
            <img
              className="editimg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
              onClick={(index) => {
                edittheinpt();
              }}
            />

            <img
              src="./delete.png"
              className="delete"
              onClick={() => {
                deleteblog(index);
              }}
            />
          </div>
        </div>
        <div className="likes">
          <button
            onClick={() => {
              liketheblog(index);
            }}
          >
            <img src="./like.png" />
          </button>

          {data.likes}
        </div>
      </div>
    </>
  );
};
