import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Return array with all user infos
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const resultArray = [];

  return Promise
    .all([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName)
    ])
    .then((values) => {
      for (const val of values) {
        resultArray.push({
          status: 'fulfilled',
          value: val,
        });
      }

      return resultArray;
    })
    .catch((err) => {
      resultArray.push({
        status: 'rejected',
        value: err.toString(),
      });

      return resultArray;
    });
}
