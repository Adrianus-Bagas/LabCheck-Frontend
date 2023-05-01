import axios from "axios";
import BASE_URL from "../utils/Config";
import Endpoint from "../utils/Endpoint";

const getAllPengguna = () => {
  const header = {
    "Content-Type": "application/json",
  };

  return axios({
    method: "get",
    url: BASE_URL + Endpoint.ALL_USER,
    headers: header,
  });
};

const UserService = {
  getAllPengguna,
};

export default UserService;
