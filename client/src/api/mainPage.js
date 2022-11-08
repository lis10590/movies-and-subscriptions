import axios from "axios";

const apiUrl = "http://localhost:5000";

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
