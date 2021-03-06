import AsyncStorage from '@react-native-async-storage/async-storage';
// import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value
     
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

// const isExpired = (item) => {
//   const now = moment(Date.now());
//   const storedTime = moment(item.timestamp);
//   return now.diff(storedTime, "minutes") > expiryInMinutes;
// };

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const item = JSON.parse(value);

    if (!item) return null;

    // if (isExpired(item)) {
    //   // Command Query Separation (CQS)
    //   await AsyncStorage.removeItem(prefix + key);
    //   return null;
    // }

    return item;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
