import { useState, useEffect } from "react";
import PostList from "../../Components/posts2/PostList";
import AddPosts from "../../Components/posts2/AddPosts";

export default function POSTS() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const post = {
      title: "Post1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisi turpis, ultrices in tristique eget, faucibus ut dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      id: 1
    };
    setData([post])
  }, [])

  if (!data) return <p>No POSTS fetched</p>
  return (
    
    <div>
      <AddPosts data={data} setData={setData}/>
      <PostList data={data}/>
    </div>
  )
}