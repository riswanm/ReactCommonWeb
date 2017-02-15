import React from "react";
import ListingItem from "./ListingItem";

export default class ListingDetail extends React.Component{
    constructor(){
        super();
    }
    render(){
       const { Listings } = this.props;
        const items = Listings.map((itm) => {
        return <ListingItem item={itm}  key={itm.id}/>;
    });
       return( <div class="row">{items}</div> );
    }
}