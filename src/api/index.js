import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);

    const modifiedData = {

    };
    return modifiedData;
  } catch (err) {
    return err;
  }
};
