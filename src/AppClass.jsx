import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {


  // code here
  render() {
    let imgData = this.props.imageData();

    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <div className='body'>
          {imgData.map((ob) => {
            return (
              <img key={ob.id} src={ob.img} />
            )
          })}
        </div>
      </div>
    )
  }

}
