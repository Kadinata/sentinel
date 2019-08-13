import React from 'react';
import Themes from '../../configs/Themes';

import './styles.css';

const Card = (props) => {
  return (
    <div className="card" style={styles.card} >
      {props.children}
    </div>
  );
};

const styles = {
  card: {
    color: Themes.Colors.FOREGROUND,
    backgroundColor: Themes.Colors.PANEL,
  },
};

export default Card;