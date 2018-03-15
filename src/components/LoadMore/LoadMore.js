import React from 'react';
import cx from 'classNames';

import './LoadMoreStyle';

const LoadMore = ({
  onClick,
  fetching
}) => {
  return (
    <div
      className={cx('loadmore', {
        'loadmore-fetching': fetching
      })}
      onClick={onClick}
    >
      Show More
    </div>
  );
}

export default LoadMore;