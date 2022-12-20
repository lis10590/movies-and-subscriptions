import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const addToList = async (movie) => {
  try {
    const res = await axios.put(`${apiUrl}/watchList/addToList`, movie);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getWatchList = async () => {
  try {
    const res = await axios.get(`${apiUrl}/watchList`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteWatchList = async (id) => {
  try {
    const res = await axios.delete(`${apiUrl}/watchList/delete/${id}`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
