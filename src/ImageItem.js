import React, { Component } from 'react';

class ImageItem extends Component {
    state = {};
    render() {
        const { name, url } = this.props;
        return (
            <p key={name}>
                <img alt={name} height="300px" src={url}/>
            </p>
        );
    }
}

export default ImageItem;