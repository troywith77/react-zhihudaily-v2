import React from 'react';
import AddIcon from 'material-ui-icons/Add';
import FloatingButton from '../FloatingButton/FloatingButton';

const LoadMoreButton = ({
  onClick,
  fetching
}) => (
  <FloatingButton onClick={onClick} fetching={fetching}>
    <AddIcon />
  </FloatingButton>
);

export default LoadMoreButton;