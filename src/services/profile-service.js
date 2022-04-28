import axios from 'axios';

const API_BASE = 'https://shrouded-brushlands-00973.herokuapp.com/editProfile';

const updateUser = async (user) => {
  const response = await axios.put(`${API_BASE}/${user._id}`,user);
  return response.data;
}

export default updateUser;