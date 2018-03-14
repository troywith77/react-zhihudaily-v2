import React from 'react';
import AddIcon from 'material-ui-icons/Add';
import FloatingButton from '../FloatingButton/FloatingButton';

import './LoadMoreButtonStyle';

const LoadMoreButton = ({
  onClick,
  fetching
}) => {
  let handleClick = onClick;
  if (fetching) {
    handleClick = () => {};
  }
  return (
    <div className="loadmore-button">
      <FloatingButton onClick={handleClick}>
        <AddIcon />
      </FloatingButton>
    </div>
  );
}

export default LoadMoreButton;