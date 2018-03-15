import { proxySrverPort } from '../../package.json';

export const getBaseURL = () => (
  process.env.NODE_ENV === 'development' ? 
  `http://127.0.0.1:${proxySrverPort}` : `http://45.32.37.144:${proxySrverPort}`
)