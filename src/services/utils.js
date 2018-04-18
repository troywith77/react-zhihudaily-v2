import { getBaseURL } from './env';

export function convertStoryImageSrc(story) {
  const path = (story.images && story.images[0]) || story.image;
  return convertImageSrc(path);
}

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
  arr.splice(4, 0, '年');
  arr.splice(7, 0, '月');
  arr.push('日')
  return arr.join('');
}
