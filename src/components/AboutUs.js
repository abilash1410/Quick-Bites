import React from 'react'
import UserClass from './UserClass'


class AboutUs extends React.Component{
  constructor(prop){
    super(prop)
    console.log("Parent--constructor");
  }
  componentDidMount () {
    console.log("Parent--componentDidMount");
  }
    render() {
      console.log("Parent--render");
      return(
        <div>
          <UserClass name = {"Abilash "} location = {"Salem "}></UserClass>
          <UserClass name = {"Revathy"} location = {"Salem "}></UserClass>
        </div>
      )
    }
}



export default AboutUs
