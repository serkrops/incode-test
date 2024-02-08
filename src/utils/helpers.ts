export const ucString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getOwnerAndRepo = (url: string) => {
  const urlArr = url.split("/");
  const owner = ucString(urlArr[urlArr.length - 2]);
  const repo = ucString(urlArr[urlArr.length - 1]);
  return { owner, repo };
};

export const preparedDate = (createdDate: string) => {
  const date = new Date(createdDate);
  const currentDate = new Date();

  if (date > currentDate) {
    return "Дата в будущем";
  }

  const differenceMilliseconds = currentDate.getTime() - date.getTime();

  const differenceDays = Math.floor(
    differenceMilliseconds / (1000 * 60 * 60 * 24)
  );

  return differenceDays;
};
