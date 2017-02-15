import React from "react";
import ListingDetail from "../components/Listing/ListingDetail";

export default class Listing extends React.Component{
    constructor(){
        super();
    }
    render(){

       var LISTINGS =[
  {id: 1, category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football', review : 14, rating : 2, imgSrc:'http://placehold.it/320x150', description:'desripton 1' },
  {id: 2, category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball', review :3, rating :3, imgSrc:'http://placehold.it/320x150', description:'desripton 2'},
  {id: 3, category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball', review :10, rating :1, imgSrc:'http://placehold.it/320x150', description:'desripton 3'},
  {id: 4, category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch', review :9, rating :4, imgSrc:'http://placehold.it/320x150', description:'desripton 4'},
  {id: 5, category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5', review :45, rating :5, imgSrc:'http://placehold.it/320x150', description:'desripton 5'},
  {id: 6, category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7', review :3, rating :8, imgSrc:'http://placehold.it/320x150', description:'desripton 6'},
  {id: 7, category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7', review :24, rating :2, imgSrc:'http://placehold.it/320x150', description:'desripton 7'}
];

        return(
           <ListingDetail Listings={LISTINGS}></ListingDetail>
        );
    }
}