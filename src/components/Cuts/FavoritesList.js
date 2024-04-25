import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react';
import { Indicator } from '../globals/ImageCarousel';
import FavoriteItem from './FavoriteItem'; // Make sure to import FavoriteItem correctly

const styles = {
  fill: {
    flex: 1,
  },
  indicator: {
    height: 20,
  },
};

export class FavoritesList extends Component { // Change export statement to export class FavoritesList
  state = {
    activeSlide: 0,
  };

  render() {
    const width = Dimensions.get('window').width;

    return (
      <div style={{ flex: 1 }}>
        <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
          {this.props.items.map((item) => (
            <FavoriteItem key={item.id} item={item} />
          ))}
          {this.props.items.length === 0 && (
            <div>
              <Text>No cuts added yet</Text>
            </div>
          )}
        </div>
        <Indicator
          length={this.props.items.length}
          activeIndex={this.state.activeSlide}
          style={styles.indicator}
        />
      </div>
    );
  }
}

export default FavoritesList; // Export FavoritesList as the default export
