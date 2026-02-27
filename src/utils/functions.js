export function getLinkByKey(links, key, isMobile) {
  const mbUrl = links?.find(item => item.key === key['mb'])?.url;
  const pcUrl = links?.find(item => item.key === key['pc'])?.url;
  const defaultUrl = links?.find(item => item.key === key['default'])?.url;

  if (isMobile && mbUrl) {
    return mbUrl;
  }
  else if (!isMobile && pcUrl) {
    return pcUrl;
  }
  else {
    return defaultUrl;
  }
}