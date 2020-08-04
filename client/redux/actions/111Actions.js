import actionsFunction from "./generated/111ActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import 111Api from "../../api/111Api";
 
 actionsFunction.load111List = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return 111Api
     .get111List()
     .then(list => {
       dispatch(actionsFunction.load111Success(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
