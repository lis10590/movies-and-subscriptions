import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

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
    const res = await axios.get(`${apiUrl}/users/getUsers`, {
      headers: {
        Authorization: "Bearer".concat(" ", sessionStorage.getItem("token")),
      },
    });
    console.log(res.data);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getUsersAndPermissions = async () => {
  try {
    const res = await axios.get(`${apiUrl}/users/allUsers`, {
      headers: {
        Authorization: "Bearer".concat(" ", sessionStorage.getItem("token")),
      },
    });
    console.log(res.data);

    return res.data;
  } catch (err) {
    console.error(err);
    if (err.response.status === 401) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
      window.location.href = "/";
    }
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

export const getAllPermissions = async () => {
  try {
    const res = await axios.get(`${apiUrl}/permissions`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getOnePermission = async (permissionId) => {
  try {
    const res = await axios.get(
      `${apiUrl}/permissions/getOnePermission/${permissionId}`
    );

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
