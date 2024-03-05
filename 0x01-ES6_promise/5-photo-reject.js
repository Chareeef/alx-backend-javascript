// Return a promise that rejects with an Error object
export default function uploadPhoto(filename) {
  return Promise.reject(Error(`${filename} cannot be processed`));
}
