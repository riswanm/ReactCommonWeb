import React from "react";

export default class ItemDetail extends React.Component{
      constructor(){
        super();
    }
    render(){

        const {imgSrc, price, name, description} = this.props.itemObj;
        return(
            <div>
            <img src={imgSrc} alt="" ></img>
                            <div class="caption">
                                <h4 class="pull-right">{price}</h4>
                                <h4><a href="#">{name}</a>
                                </h4>
                                <p>{description}.</p>
                            </div>
            </div>
        );
    }
}