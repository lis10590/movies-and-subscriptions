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
