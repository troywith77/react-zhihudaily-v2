import React from 'react';
import AddIcon from 'material-ui-icons/Add';
import cx from 'classNames';
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
    <div className={cx('loadmore-button', {
      'loadmore-button-fetching': fetching
    })}>
      <FloatingButton onClick={handleClick}>
        <AddIcon />
      </FloatingButton>
    </div>
  );
}

export default LoadMoreButton;