import React from 'react';
import styled from 'styled-components';

import './style.css';

const Wrapper = styled.div`
  background-color: red;
`;

const Thumb = ({ id }) => {
  let classes = ['item-base'];
  if (Math.random() < 0.2) {
    classes.push('item-wide');
  } else if (Math.random() < 0.2) {
    classes.push('item-tall');
  } else if (Math.random() < 0.1) {
    classes.push('item-across');
  }

  return (
    <Wrapper>
      <div className={classes.join(' ')}>
        <img className="item-image" src={`https://randomfox.ca/images/${id}.jpg`} />
      </div>
    </Wrapper>
  );
};

const Home = () => {
  let thumbs = [];
  for (let index = 1; index < 121; index++) {
    thumbs.push(<Thumb id={index} />);
  }
  return <div className="item-grid">{thumbs}</div>;
};

export default Home;
