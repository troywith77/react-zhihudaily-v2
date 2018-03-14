export function convertImageSrc(src) {
  return `/image?url=${src}`
}

export function logRelatedRepo() {
  const { github, api } = process.env.pkg;
  console.log(`%cGithub Repo: ${github}`, 'background: #333; color: #fff; font-size: 13px;');
  console.log(`%cAPI DOC: ${api}`, 'background: #333; color: #fff; font-size: 13px;');
}