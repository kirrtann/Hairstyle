// CutItem.js

import React from 'react';
import moment from 'moment';
import { white, lightGrey } from '../globals/colors';

const CutItem = ({ item }) => {
  const styles = {
    wrapper: {
      padding: '15px',
      width: '100%',
    },
    card: {
      padding: '15px',
      backgroundColor: white,
      borderRadius: '10px',
      border: '1px solid ' + lightGrey,
      overflow: 'hidden',
      cursor: 'pointer',
    },
    name: {
      fontSize: '24px',
      marginBottom: '8px',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.name}>{item.barber.name}</div>
        <div>{item.shop.name}</div>
      </div>
    </div>
  );
};

export default CutItem; // Ensure the default export is present
