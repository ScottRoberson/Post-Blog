import React, { Component } from 'react';
import './App.css';
import PostForm from './PostForm'
import ShowPosts from './ShowPosts'
import Home from './Home'
import uuid from 'uuid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        {
        id:uuid.v4(),  
        author: '', 
        title: '', 
        body: ''
        }
      ]
    }
  }
  
  // add post to the posts array in state
  addPost = (post) => {
    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, post]
      }
      
    })
  }
handleDeletePost = (id) => {
  // let posts = this.state.posts;
  // let index = posts.findIndex(x => x.id === id);
  // posts.splice(index,1);
  // this.setState({posts:posts});
  this.setState(function(prevState) {
    return {
      posts: prevState.posts.filter(post => post.id !== id)
    };
  });
}
  
  

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <div className="nav" >
              <NavLink className="nav-item" exact to="/">Home</NavLink>
              <NavLink className="nav-item" exact to="/posts">Posts</NavLink>
              <NavLink className="nav-item" exact to="/add">Add New Post</NavLink>
            </div>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" render={(props) => <ShowPosts  {...props} posts={this.state.posts} onDelete={this.handleDeletePost} />} />
            <Route exact path="/add" render={(props) => <PostForm {...props} addPost={this.addPost} />} />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
