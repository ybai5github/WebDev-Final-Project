import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE_PROJECT || 'http://localhost:9000/api';
const PROFILE_API = `${API_BASE}/users`;

export const createUsers = async (profile) => {
  const response = await axios.post(PROFILE_API, profile);
  return response.data;

}

export const findAllUsers = async () => {
  const response = await axios.get(PROFILE_API);
  const profile = response.data;
  return profile;
}

export const findAllUsers2 = async (profiles) => {
  const response = await axios.get(`${PROFILE_API}/${profiles._id}`);
  const profile = response.data;
  return profile;
}

export const deleteUser = async (profile) => {
  const response = await axios.delete(`${PROFILE_API}/${profile._id}`);
  return response.data;
}

export const updateUser = async (profile) => {
  const response = await axios.put(`${PROFILE_API}/${profile._id}`, profile);
  return response.data;
}