import axios from "axios";
const BASE_URL = "https://665a0699de346625136ecce2.mockapi.io/campers";

export const getData = async () => {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
};

export const favoriteData = async ({ params }) => {
  const { _id, ...updateData } = params;
  const { data } = await axios.put(`${BASE_URL}/${_id}`, updateData);
  return data;
};
