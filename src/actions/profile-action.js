import * as service from '../services/profile-service.js';

export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = async (dispatch, user) =>{
  const status = await service.updateUser(user);
  dispatch({
    type:UPDATE_USER,
    user
  });
}