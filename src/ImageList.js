import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    render() {
        return (
            <>
                {this.props.filteredSearch.map((item) => {
                    return <ImageItem key={item.id} image={item} />;
                })}
            </>
        );
    }
}

export default ImageList;