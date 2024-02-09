import axios from "axios";
import { Issue } from "./types";

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
    return "Date is in the future!";
  }

  const differenceMilliseconds = currentDate.getTime() - date.getTime();

  const differenceDays = Math.floor(
    differenceMilliseconds / (1000 * 60 * 60 * 24)
  );

  return differenceDays;
};

export const fetchApiData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const filterAndMapIssues = (payload: Issue[], state: string) =>
  payload
    .filter((item) => item.state === state)
    .map((item) => ({
      title: item.title,
      state: item.state,
      number: item.number,
      created_at: item.created_at,
      user: item.user,
      comments: item.comments,
    }));
