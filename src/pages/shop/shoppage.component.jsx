import React from 'react';
import "./shoppage.style.scss";

import SHOP_DATA from "./shop.data"
import CollectionPreview from "../../components/collection/CollectionPreview.component"

class ShopPage extends React.Component{
constructor(props){
super(props);
this.state={
    collections : SHOP_DATA

}
}
render() {

const {collections} = this.state;
return(
    
<div className="shop-page">
 {collections.map(({id,...collectionProp})=> 
 <CollectionPreview key={id} {...collectionProp} />)}
 
</div>)

}

}
export default ShopPage;
