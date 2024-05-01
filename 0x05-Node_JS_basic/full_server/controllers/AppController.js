// AppController class
class AppController {
  static getHomepage(req, res) {
    // Return http response with OK status code
    res.send('Hello Holberton School!');
  }
}

export default AppController;
