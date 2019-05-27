import React, {Component} from "react";

class FilmItem extends Component{

  render(){

    return(
      <div>
      <a href={this.props.url}><h4>{this.props.name}</h4></a>
      </div>
    )
  }
}

export default FilmItem;
