import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getAllUsersFromFile = async () => {
  try {
    const res = await axios.get(`${apiUrl}/usersfromfile`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getOneUserFromFile = async (userId) => {
  try {
    const res = await axios.get(`${apiUrl}/usersfromfile/getOneUser/${userId}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateUserFromFile = async (obj) => {
  try {
    const res = await axios.put(`${apiUrl}/usersfromfile/updateUser`, obj);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteUserFromFile = async (userId) => {
  try {
    const res = await axios.delete(
      `${apiUrl}/usersfromfile/deleteUser/${userId}`
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const addUserFromFile = async (user) => {
  try {
    const res = await axios.post(`${apiUrl}/usersfromfile/addUser`, user);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
