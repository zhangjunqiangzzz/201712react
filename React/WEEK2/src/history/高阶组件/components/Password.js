import React from  'react'
import local from './Local'
class Password extends  React.Component{
    render(){
        return <div>
            <input type="text" value={this.props.password} onChange={()=>{

            }}/>
        </div>
    }
}
export default local('password') (Password)