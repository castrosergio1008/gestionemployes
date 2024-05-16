import {} from "util";
import axios from "axios";
import app from "../../app.json";

const { APIHOST } = app;

export const request = {
  get: function (services) {
    return axios.get(`${APIHOST}${services}`);
  },

  post: function (services, data) {
    return axios.post(`${APIHOST}${services}`, data);
  },

  put: function (services, data) {
    return axios.put(`${APIHOST}${services}`, data);
  },

  delete: function (services) {
    return axios.delete(`${APIHOST}${services}`);
  },
};
