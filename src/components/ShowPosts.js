import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PostEdit from './PostEdit';


class ShowPosts extends React.Component {
  constructor(props) {
    super(props)
    
  }

  
  removePost(postsHtml){
    const newPosts= this.state.posts.filter(post=>{
      return post !== postsHtml;
    })

    this.setState({
      posts: [...newPosts]
    })
  }
  

  render() {
    const postsHtml = this.props.posts.map(elem => {
      return (
        <div className="post">
          <Card className="post-paper" >
            <CardHeader
              title={elem.title}
              subtitle={elem.author}
            />
           <CardText>
             {elem.body}
           </CardText>
           <RaisedButton
            onClick={(e)=> this.removePost(postsHtml)}
            type="delete"
            secondary={true}
            label="Delete"
                    /> 
          </Card>
        </div>
      )
    })
    return (
      <div>
      {postsHtml}
      </div>
    )
  }
}

export default ShowPosts;
