import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Return array with all user infos
export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ])
    .then((results) => {
      const resultArray = [];

      for (const res of results) {
        if (res.status === 'fulfilled') {
          resultArray.push({
            status: res.status,
            value: res.value,
          });
        } else {
          resultArray.push({
            status: res.status,
            value: res.reason.toString(),
          });
        }
      }

      return resultArray;
    });
}
