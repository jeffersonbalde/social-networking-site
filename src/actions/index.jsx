// import { auth, provider } from "../firebase"

// export function signInAPI() {
//     return (dispatch) =>  {
//         auth
//             .signInWithPopup(provider)
//             .then((payload) => {
//             console.log(payload)
//         })
//         .catch((error) => alert(error.message))
//     }
// }

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
}