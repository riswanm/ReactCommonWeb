import React from 'react';
import ItemDetail from "./ItemDetail";
import Rating from "../Common/Rating";

export default class ListingItem extends React.Component {
      constructor(){
        super();
    }

    render(){
        var {imgSrc,name,description,price} = this.props.item;
        var itemDetailObj = { imgSrc,name,description,price };
        var {rating, review} = this.props.item;
        var ratingObj = {rating, review};
        return(
                 <div class="col-sm-3 col-lg-3 col-md-3"><div class="thumbnail">
                           <ItemDetail itemObj={itemDetailObj} ></ItemDetail>
                           <Rating ratingObj={ratingObj}></Rating>
                        </div></div>
        );
    }

}