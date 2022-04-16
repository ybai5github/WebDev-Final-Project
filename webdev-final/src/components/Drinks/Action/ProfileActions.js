import * as service from '../Service/ProfileService.js';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const FIND_ALL_TUITS_BY_ID = 'FIND_ALL_TUITS_BY_ID';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';




export const findAllUsers = async (dispatch) => {
  const profile = await service.findAllUsers();
  dispatch({
    type: FIND_ALL_TUITS,
    profile
  });
}

export const findAllUsers2 = async (dispatch) => {
  const profile = await service.findAllUsers2();
  dispatch({
    type: FIND_ALL_TUITS_BY_ID,
    profile
  });
}

export const deleteUser = async (dispatch, profile)=>{
  const response = await service.deleteUser(profile);
  dispatch({
    type: DELETE_TUIT,
    profile
  });

}

export const createUsers = async (dispatch, profile) => {
  const newProfile = await service.createUsers(profile);
  dispatch({
    type: CREATE_TUIT,
    newProfile
  });
}

export const updateUser = async (dispatch, profile) => {
  const status = await service.updateUser(profile);
  dispatch({
    type: UPDATE_TUIT,
    profile
  });
}