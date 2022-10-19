import axios from "axios";

const apiUrl = "http://localhost:5000";

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
