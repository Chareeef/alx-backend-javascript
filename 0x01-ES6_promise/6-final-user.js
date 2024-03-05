import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Return array with all user infos
export default function handleProfileSignup(firstName, lastName, fileName) {
  const resultArray = [];
  try {
    const signUp = signUpUser(firstName, lastName);
  } catch {
    console.log('pass');
  }
  const uploadPic = uploadPhoto(fileName);

  return Promise
    .all([signUp, uploadPic])
    .then((values) => {
      resultArray.push({
        status: 'fulfilled',
        value: values,
      });
      return resultArray
    })
  /*
    .catch((err) => {
      resultArray.push({
        status: 'rejected',
        value: err.message,
      });
    })
    .finally(() => {
      return resultArray;
    })
    */
}
const test = async () => {
  console.log(await handleProfileSignup('Youssef', 'Charif', 'ych.jpg'));
}
test();
