import React, { useEffect, useState } from "react";

const SelfPagination = ({ posts,setStartIndex,setEndIndex,startIndex,endIndex }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(10);
  // const postsPerPage = 20;
  const totalPostsLengt = posts.length; //100
  const totalPageNumber = Math.ceil(totalPostsLengt / postsPerPage);

    // endIndex =  (postsPerPage * currentPage);
    // startIndex =  (endIndex - postsPerPage);
    setEndIndex(postsPerPage * currentPage);
    setStartIndex(endIndex - postsPerPage);


  //  if(totalPageNumber == currentPage){
  //       endIndex = endIndex - (postsPerPage - (totalPostsLengt % postsPerPage))
  //     // endIndex += totalPostsLengt % postsPerPage;
  //     startIndex = endIndex - (totalPostsLengt % postsPerPage);
  //  }  


  console.log("startIndex", startIndex);
  console.log("endIndex", endIndex);

  let pages = [];
  for (let i = 1; i <= totalPageNumber; i++) {
    pages.push(i);
  }

  const handleClick = (e, item) => {


    e.target
      .closest("div")
      .querySelectorAll("a")
      .forEach((eachA) => {
        eachA.classList.remove("active");
        eachA.classList.remove("first-active");
      });

    e.target.classList.add("active");


    setCurrentPage(item);
  };

  console.log('currentPage = ' ,currentPage);
console.log('----------');

const selectChange = (e) => {
  setPostsPerPage(Number(e.target.options[e.target.selectedIndex].value));
  setCurrentPage(1)
}


  return (
    <div className="my-3 container mx-auto text-center">
      <select name="" id="pagination" className="me-2 p-2" onChange={selectChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">ALL</option>
      </select>
      {pages.map((item) => (
        <a
          key={item}
          type="button"
          className="p-2 border text-decoration-none pagination-links first-active"
          id={item}
          onClick={(e) => handleClick(e, item)}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default SelfPagination;
