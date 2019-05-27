import React, {Component} from "react";
import FilmItem from "./FilmItem";

class FilmItemList extends Component{
  render(){

    const filmList = this.props.data.map(film =>{
      return( <FilmItem url={film.url} name={film.name}></FilmItem>
      );
    });

    return(
    <div>
    {filmList}
    </div>
  );
  }


}

export default FilmItemList;
