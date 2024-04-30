#!/usr/bin/node

// AppController class
export default class AppController {
  static getHomepage(req, res) {
    // Return http response with OK status code
    res.send('Hello Holberton School!');
  }
}
