import { Request } from "../../http";

export const userInfo = (data) => {
  Request({
    url: ``,
    method: "GET",
    data,
  });
};

export default { userInfo }
