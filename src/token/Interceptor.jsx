import axios from "axios";
axios.defaults.baseURL =
  "https://tasty-slug-handkerchief.cyclic.app/fitness-den/";
let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 400 && !refresh) {
      refresh = true;

      const { data } = await axios.post(
        "refreshtoken",
        {},
        { withCredentials: true }
      );
      console.log(data);
      if (data.success) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.data}`;
        return axios(error.config);
      }
    }
    refresh = false;
    return error;
  }
);
