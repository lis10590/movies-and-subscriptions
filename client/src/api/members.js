import axios from "axios";

const apiUrl = "http://localhost:5000";

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
    const res = await axios.get(`${apiUrl}/members/getMembers`);

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
