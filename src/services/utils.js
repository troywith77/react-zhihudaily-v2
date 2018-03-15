import { getBaseURL } from './env';

export function convertImageSrc(src) {
  return src ? `${getBaseURL()}/image?url=${src}` : undefined;
}

export function logRelatedRepo() {
  const { github, api } = process.env.pkg;
  // console.log(`%cGithub Repo: ${github}`, 'background: #333; color: #fff; font-size: 13px;');
  // console.log(`%cAPI DOC: ${api}`, 'background: #333; color: #fff; font-size: 13px;');
  console.log(`Github Repo: ${github}`);
  console.log(`API DOC: ${api}`);
}