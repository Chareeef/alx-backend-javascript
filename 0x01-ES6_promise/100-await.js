import { uploadPhoto, createUser } from './utils';

// async function that return an object with the following format:
// {
//  photo: response_from_uploadPhoto_function,
//  user: response_from_createUser_function,
// }
export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  return {
    photo,
    user,
  };
}
