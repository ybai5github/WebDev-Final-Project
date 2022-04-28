import axios from 'axios';

const API_BASE = 'http://localhost:4000/editProfile';

export const updateUser = async (user) => {
  const response = await axios.put(`${API_BASE}/${user._id}`,user);
  return response.data;
}

const update = {
  updateUser,
};

export default update;