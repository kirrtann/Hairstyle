import React from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for web routing
import FontAwesome from 'react-fontawesome'; // Adjust import
import { white, darkGrey, blue } from '../globals/colors';

const NavButton = ({ large, icon, route, active, handlePress }) => {
  const border_radius = 25;
  const styles = {
    button: {
      borderRadius: border_radius,
      height: 50,
      width: 50,
      overflow: 'hidden',
      backgroundColor: '#FFF',
    },
    icon: {
      padding: large ? 3 : 13,
      color: active ? blue : darkGrey,
      textAlign: 'center',
      fontSize: large ? 44 : 24,
    },
  };

  const inner = (
    <span style={styles.icon}>
      <FontAwesome name={icon} />
    </span>
  );

  return (
    <div style={styles.button}>
      {route ? (
        <Link to={route} style={{ textDecoration: 'none' }}>
          <span onClick={() => handlePress(route)}>{inner}</span>
        </Link>
      ) : (
        <span onClick={handlePress}>{inner}</span>
      )}
    </div>
  );
};

export default NavButton;
