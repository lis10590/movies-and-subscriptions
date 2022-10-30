import axios from "axios";

const apiUrl = "http://localhost:5000";

export const addNewUser = async (user) => {
  try {
    const res = await axios.post(`${apiUrl}/users/addUserAndPermissions`, user);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getUsers = async () => {
  try {
    const res = await axios.get(`${apiUrl}/users/getUsers`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getOneUser = async (userId) => {
  try {
    const res = await axios.get(`${apiUrl}/users/getOneUser/${userId}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getOneUserByUsername = async (username) => {
  try {
    const res = await axios.get(`${apiUrl}/users/getByUsername/${username}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = async (userId) => {
  try {
    const res = await axios.delete(`${apiUrl}/users/deleteUser`, {
      data: { userId },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = async (user) => {
  try {
    const res = await axios.put(`${apiUrl}/users/updateUser`, user);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
