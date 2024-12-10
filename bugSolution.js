// bugSolution.js
import * as Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const generateUUID = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});

const getDeviceId = async () => {
  const storedUuid = await AsyncStorage.getItem('uuid');
  if (storedUuid) {
    return storedUuid;
  }

  const uuid = generateUUID();
  await AsyncStorage.setItem('uuid', uuid);
  return uuid;
};

export const useDeviceId = () => {
  const [deviceId, setDeviceId] = React.useState(null);
  React.useEffect(() => {
    getDeviceId().then(setDeviceId);
  }, []);
  return deviceId;
};
