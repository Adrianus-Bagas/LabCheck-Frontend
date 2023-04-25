import axios from "axios";
import BASE_URL from "../utils/Config";
import Endpoint from "../utils/Endpoint";

const LoginService = (body) => {

    const header = {
      "Content-Type": "application/json",
    };

    return axios({
      method: "post",
      url: BASE_URL + Endpoint.SIGNIN,
      headers: header,
      data: body,
    });

};

export default { LoginService };

