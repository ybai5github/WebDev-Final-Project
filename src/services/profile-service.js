import axios from 'axios';

const API_BASE = 'https://shrouded-brushlands-00973.herokuapp.com/editProfile';

export const updateUser = async (user) => {
  const response = await axios.put(`${API_BASE}/${user._id}`,user);
  return response.data;
}
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  updateUser
}