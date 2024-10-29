import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "ajZ9T5duuofQDIDZlNv1bnA8gpDVDRPuPE0o7gbT_aQ";

const fetchPhoto = async (query, page) => {
  const requestParams = {
    params: {
      client_id: API_KEY,
      query: query,
      orientation: "landscape",
      per_page: 12,
      page,
    },
  };
  const response = await axios("/search/photos", requestParams);
  return response.data;
};

export default fetchPhoto;
