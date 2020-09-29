// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from './ApprovalCard'; 


// Create a react component 
const App = () =>{
    
    return (
    <div className="ui container comments">
        <ApprovalCard> 
        <CommentDetail avatar={faker.image.avatar()} author="Sam" timeAgo="Today at 4:45PM" commentText="Nice job mate!" />
        </ApprovalCard>
        
        <ApprovalCard>
        <CommentDetail avatar={faker.image.avatar()} author="Alex" timeAgo="Today at 2:00AM" commentText="Could've been worse!"/>
        </ApprovalCard>

        <ApprovalCard> 
         <CommentDetail avatar={faker.image.avatar()} author="Jane"timeAgo="Yesterday at 6:00PM" commentText="You are lit!"/>
        </ApprovalCard>
     </div>);
};


// Take the react component and show it on the screen
ReactDOM.render(
<App />,
    document.querySelector('#root'));
