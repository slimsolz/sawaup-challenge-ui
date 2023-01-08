import { ParamsType } from "./../utils/types";
import axios from "axios";

const COURSE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses`;

const getAllCourses = async ({ perPage, page, ids, user }: ParamsType) => {
  let url = `${COURSE_URL}?page=${page}&limit=${perPage}`;
  if (ids) {
    url += `&ids=${JSON.stringify(ids)}`;
  }

  if (user) {
    url += `&user=${user}`;
  }

  const response = await axios.get(url);
  return response.data.data;
};

const toggleFavoriteCourses = async () => {};

const courseServices = {
  getAllCourses,
};

export default courseServices;
