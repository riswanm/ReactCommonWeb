import React from "react";

export default class Rating extends React.Component{
    constructor(){
        super();
    }
    render(){
       const {rating, review} = this.props.ratingObj;
       const RatingsList = [];
       for(let i=0 ; i < rating && i < 5; i++){
            RatingsList.push( <span class="glyphicon glyphicon-star" key={i.toString()}></span>)
       }
       return(<div class="ratings">
                                <p class="pull-right">{review} reviews</p>
                                <p>
                                   {RatingsList} 
                                </p>
       </div>);
    }
}