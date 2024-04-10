import axios from "axios";
import Header from "../components/Header";
import Posts from "../components/Posts";
import { useEffect, useState } from "react";
import SelfPagination from "../components/SelfPagination.jsx";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("response.data", response.data);
    setPosts(response.data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  // getPosts();
  const [startIndex,setStartIndex] = useState();
  const [endIndex,setEndIndex] = useState();
  // let endIndex;
  // let startIndex ;
  const postsToScreen = posts.slice(startIndex,endIndex);
  console.log(postsToScreen);
  // console.log(
  //   posts.slice(startIndex,endIndex)
  // );

  return (
    <div>
      <Header posts={posts} />
      <Posts posts={posts} setPosts={setPosts} postsToScreen={postsToScreen}/>
      <SelfPagination posts={posts} setStartIndex={setStartIndex} setEndIndex={setEndIndex} startIndex={startIndex} endIndex={endIndex}/>
    </div>
  );
};

export default Home;
