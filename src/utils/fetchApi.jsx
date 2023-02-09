import axios from "axios";

export const fetchApi = async (URL) => {
  const data = await axios.get(URL);
  return data;
};
