import { getBaseURL } from './env';

export function convertImageSrc(src) {
  if (!src) return src;
  if (src.indexOf('zhimg.com') === -1) return src;
  return `${getBaseURL()}/image?url=${src}`;
}

export function logRelatedRepo() {
  const { github, api } = process.env.pkg;
  // console.log(`%cGithub Repo: ${github}`, 'background: #333; color: #fff; font-size: 13px;');
  // console.log(`%cAPI DOC: ${api}`, 'background: #333; color: #fff; font-size: 13px;');
  console.log(`Github Repo: ${github}`);
  console.log(`API DOC: ${api}`);
}

export function formatDateString(str) {
  const arr = str.split('');
  arr.splice(4, 0, ' / ');
  arr.splice(7, 0, ' / ');
  return arr.join('');
}
