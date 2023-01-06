import axios from "axios";

const SKILLS_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/skills`;

const getAllSkills = async () => {
  const response = await axios.get(SKILLS_URL);
  return response.data.data;
};

const skillServices = {
  getAllSkills,
};

export default skillServices;
