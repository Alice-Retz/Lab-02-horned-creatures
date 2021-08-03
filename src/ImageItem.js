import React, { Component } from 'react';

class ImageItem extends Component {
    state = {};
    render() {
        return (
            <p>
                {this.props.image.name}
                <img
                    alt={this.props.image.name}
                    width="100"
                    src={this.props.image.url}
                />
            </p>
        );
    }
}

export default ImageItem;