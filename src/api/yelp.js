import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer mpVp29p9e32hVqPt4aNgxfi9Hq3ZHC1M4pIyL_3eceVKVhxxti7wMTRxi5Lju0Mttjf7p7Ql9emssute-PK2CeGjlU-EVtrqouwiQA1oHlUhMZJjUIL5-gHrpSiqYXYx",
  },
});
