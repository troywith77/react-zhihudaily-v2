import React from 'react';
import { Link } from 'react-router-dom';

import './NoMatchScreenStyle';

const NoMatchScreen = () => {
  return (
    <div className="no-match-route">
      <p>
        你要的页面找不到啦，<Link to="/">返回首页？</Link>
      </p>
      <p>
        或者 <a href="http://tangrui.win" target="_blank">随便看看？</a>
      </p>
    </div>
  )
};

export default NoMatchScreen;