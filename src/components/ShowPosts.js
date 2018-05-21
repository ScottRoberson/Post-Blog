import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class ShowPosts extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      search:''
    }
    
    
  }


  deletePost = (id) => {
    this.props.onDelete(id);
  }

  handleSearch(event){
    this.setState({search: event.target.value})
}

 
  render() {

    let filteredSearch= this.props.posts.filter(
      (elem) => {
        return elem.body.indexOf(this.state.search) !==-1;
      }
    );
        
    const postsHtml = filteredSearch.map(elem => {
      return (
        
          <div>
          <div>
          <TextField
            hintText="Search"
            value= {this.state.search}
            onChange= {this.handleSearch.bind(this)}
          />
          </div>
        <div className="post">
         
          <Card className="post-paper" >
            <CardHeader
              title={elem.title}
              subtitle={elem.author}
            />
           <CardText>
             {elem.body}
           </CardText>
                  
          </Card>
          <RaisedButton
            onClick={() => this.deletePost(elem.id)}
            type="delete"
            secondary={true}
            label="Delete"/> 
        </div>
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
