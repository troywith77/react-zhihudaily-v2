import pkg from '../../package.json';

export function convertImageSrc(src) {
  if (process.env.NODE_ENV !== 'development') {
    return src ? `http://127.0.0.1:${pkg.proxySrverPort}/image?url=${src}` : undefined;
  } else {
    return src ? `/image?url=${src}` : undefined;
  }
}

export function logRelatedRepo() {
  const { github, api } = process.env.pkg;
  console.log(`%cGithub Repo: ${github}`, 'background: #333; color: #fff; font-size: 13px;');
  console.log(`%cAPI DOC: ${api}`, 'background: #333; color: #fff; font-size: 13px;');
}