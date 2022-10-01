import axios from "axios";

export function loginApi(email, password) {
  const response = axios
    .post("challenge-react.alkemy.org/", {
      params: { email, password },
      headers: { "X-Requested-With": "XMLHttpRequest" },
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

  return response;
}
