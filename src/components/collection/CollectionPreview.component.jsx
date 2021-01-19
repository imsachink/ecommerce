import React from 'react';
import "./collectionPreview.style.scss";
import CollectionItem from "../collection-item/collection-item.component";



function CollectionPreview({title,items}) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter(({id})=> id<5 ).map(({id,...otherPropItems})=>
                <CollectionItem key={id} {...otherPropItems}       />       )}
            </div>
        </div>
    )
}

export default CollectionPreview;
