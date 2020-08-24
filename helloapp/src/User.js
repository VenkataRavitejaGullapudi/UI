import React from 'react';

// for returning multiple tags like h1 
// then they should be wrapped in the div
function User(){
    return(
        <div>
            <h1>User Component</h1>
         </div>
    )
}

class User1 extends React.Component{
    render(){ 
        return(
            <div>   </div>
        )

    }
}

export default User;