import 111ApiGenerated from "./generated/111ApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class 111Api extends 111ApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get 111 List
  static get111List() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/111s")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default 111Api;