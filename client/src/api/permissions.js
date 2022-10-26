import axios from "axios";

const apiUrl = "http://localhost:5000";

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

export const updatePermissions = async (obj) => {
  try {
    const res = await axios.put(`${apiUrl}/permissions/updatePermissions`, obj);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
