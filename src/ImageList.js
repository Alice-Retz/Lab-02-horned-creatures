import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    render() {
        const { creatureData } = this.props;
        return (
            <>
                {creatureData.map((item) => {
                    const { id, name, url } = item;
                    return <ImageItem key={id} name={name} url={url} />;
                })}
            </>
        );
    }
}

export default ImageList;