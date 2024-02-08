export const ucString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getOwnerAndRepo = (url: string) => {
  const urlArr = url.split("/");
  const owner = ucString(urlArr[urlArr.length - 2]);
  const repo = ucString(urlArr[urlArr.length - 1]);
  return { owner, repo };
};
