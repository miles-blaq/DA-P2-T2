import React, { Component } from 'react'
import AddPosts from '../../Components/posts3/AddPosts';
import PostList from '../../Components/posts3/PostList';

export default class  extends Component {
  
  constructor(props){
    super(props);
    this.state={
      posts:[]
    }

    this.postAddHandle = this.postAddHandle.bind(this)
  }

  componentDidMount(){
    const post = {
      title: "Post1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisi turpis, ultrices in tristique eget, faucibus ut dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      id: 1
    };
    this.setState({posts: [...this.state.posts,post]});
  }

  
  postAddHandle(event) {
  event.preventDefault();
  const title = event.target.elements.title.value;
  const body = event.target.elements.body.value;
  const post = {
    title: title,
    body: body,
    id: 2
  };
  // const newPosts = this.state.posts.concat(post);
  this.setState({
    posts: [...this.state.posts,post]
  })
}

  render() {
    const data = this.state.posts;
    if (!data) return <p>No POSTS fetched</p>
    return (
      <div>
        <AddPosts postAddHandle={this.postAddHandle}/>
        <PostList data={data}/>
      </div>
    )
  }
}

