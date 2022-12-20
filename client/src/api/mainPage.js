import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getMainPage = async () => {
  try {
    const res = await axios.get(`${apiUrl}/mainpage`, {
      headers: {
        "x-access-token": sessionStorage.getItem("token"),
      },
    });

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
