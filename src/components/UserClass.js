import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log("superProp"+JSON.stringify(props));
        this.state ={
             userInfo:{
                login:"test",
                location:"chennai"
            }
        }   

        console.log(props.name+"-->"+"child--constructor");
    }

    async componentDidMount () {
        console.log(this.props.name+"-->"+"child componentDidMount");
        const gitHubAPIFetch = await fetch("https://api.github.com/users/abilash1410");
        const gitHubData =  await gitHubAPIFetch.json();

        this.setState({
            userInfo:gitHubData
        })  
      
    }
        render(){
           
            const {login,location} =  this.state.userInfo;
            return (
                <div className="header">
                    <div>
                        <h2 > Name - {login}</h2>
                        <h2 > Location - {"India"}</h2>
                    
                    </div>
                </div>
            )
        }
    }
export default UserClass
