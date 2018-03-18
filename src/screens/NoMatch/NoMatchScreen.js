import React from 'react';
import { Link } from 'react-router-dom';

import DocumentTitle from '~/containers/DocumentTitle/DocumentTitle';
import './NoMatchScreenStyle';

const NoMatchScreen = () => {
  return (
    <DocumentTitle
      title="404"
      render={() => (
        <div className="no-match-route">
          <p>
            你要的页面找不到啦，<Link to="/">返回首页？</Link>
          </p>
          <p>
            或者 <a href="http://tangrui.win/blog" target="_blank" rel="noopener noreferrer">随便看看？</a>
          </p>
        </div>
      )}
    />
  )
};

export default NoMatchScreen;