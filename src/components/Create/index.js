import React from 'react';
import Modal from 'react-modal';
import { white } from '../globals/colors';

const styles = {
  scroll: {
    backgroundColor: white,
    paddingLeft: 15,
    paddingRight: 15,
    overflowY: 'scroll', // Ensure scrolling behavior
    height: '100vh', // Set height to fill the viewport
  },
  view: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  redBox: {
    height: 50,
    marginBottom: 50,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: white,
    padding: 15,
    border: 'none',
    cursor: 'pointer',
  },
};

const Create = (props) => {
  return (
    <Modal
      isOpen={props.create.show}
      style={{ overlay: { margin: 0 } }}
    >
      <div style={styles.scroll}>
        <div style={styles.view}>
          <div style={styles.redBox}></div>
          <div style={styles.redBox}></div>
          <div style={styles.redBox}></div>
          <div style={styles.redBox}></div>
          <div style={styles.redBox}></div>
          <button
            style={styles.button}
            onClick={props.resetCreateCut}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Create;
