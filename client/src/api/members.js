import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const addNewMember = async (member) => {
  try {
    const res = await axios.post(`${apiUrl}/members/newMember`, member);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getMembers = async () => {
  try {
    const res = await axios.get(`${apiUrl}/members/getMembers`, {
      headers: {
        Authorization: "Bearer".concat(" ", sessionStorage.getItem("token")),
      },
    });

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

export const getOneMember = async (memberId) => {
  try {
    const res = await axios.get(`${apiUrl}/members/getOneMember/${memberId}`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteMember = async (memberId) => {
  try {
    const res = await axios.delete(`${apiUrl}/members/deleteMember`, {
      data: { memberId },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateMember = async (member) => {
  try {
    const res = await axios.put(`${apiUrl}/members/updateMember`, member);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
