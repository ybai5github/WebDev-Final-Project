import axios from 'axios';

const API_BASE = 'http://localhost:4000/editProfile';

export const updateUser = async (user) => {
  const response = await axios.put(`${API_BASE}/${user._id}`,user);
  return response.data;
  // await axios.get(`${API_BASE}/${user._id}`,{method: 'PUT',
  //   body: JSON.stringify(user),
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // }).then(response => response.json());

}

export default {
  updateUser
}
