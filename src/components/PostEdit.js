import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';



class PostEdit extends React.Component{
constructor(props){
    super(props);
    this.state={
        editing:false,
    }
}

render(){
    return(
    <div>
        <RaisedButton
            
            type="edit"
            primary={true}
            label="Edit"
                    />
        
    </div>    
    );
}

}


export default PostEdit; 



