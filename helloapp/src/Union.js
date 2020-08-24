import React from 'react'
import Andhra from './Andhra'
import Corporate from './Corporate'
const Union=()=>{

    return(
        <div>
           <h1>This is Union bank Component</h1>
           <Andhra name="Andhra bank" branch="JRG"/>
            <Corporate name="Corporate bank" branch="JRG"/>
        </div>
    );
}

export default Union;