import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import DetailModal from "./DetailModal.jsx";
const Posts = ({ posts, setPosts,postsToScreen }) => {
  const lineStyle = (line) => {
    return {
      display: "-webkit-box",
      WebkitLineClamp: line,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    };
  };

  const [postDetail, setPostDetail] = useState({title:"",body:"",id:""});
  return (
    <section
      className=" container d-flex flex-wrap align-items-center gap-3 justify-content-center justify-content-sm-center justify-content-md-between "
      style={{ paddingTop: "150px" }}
    >
      {postsToScreen?.map((post) => {
        const { title, body, id } = post;

        const deleteHandle = (id) => {
          setPosts(posts.filter((post) => post.id != id));
        };
        return (
          
            <div
            id={id}
            title={title}
              key={id}
              className="card overflow-hidden shadow"
              style={{ width: "18rem" }}
            >
              <div className="post-head card-header d-flex align-items-center justify-content-between">
                <h5
                  className="flex-4"
                  style={{ ...lineStyle(1), width: "90%" }}
                >
                  {title}
                </h5>
                <IoMdCloseCircleOutline
                  className="text-danger fs-4 position-absolute "
                  type="button"
                  style={{ right: "5px" }}
                  onClick={() => deleteHandle(id)}
                />
              </div>

              <div className="card-body">
                <p className="card-text  overflow-hidden" style={lineStyle(3)}>
                  {body}
                </p>
                <a
                  href="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#postDetails"
                  onClick={() => setPostDetail(post)}
                >
                  See Details
                </a>
              </div>
            </div>
          
        );
      })}
      <DetailModal post={postDetail}/>
    </section>
  );
}; 

export default Posts;
