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

import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setUser(result.user))
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user))
            }
        })
    }
}

// export function signOutAPI() {
//     return(dispatch) => {
//         auth
//             .signOut()
//             .then(() => {
//                 dispatch(setUser(null))
//             })
//             .catch((error) => console.log(error.message))
//     }
// }

export function signOutAPI() {
    return(dispatch) => {
        signOut(auth)
        .then(() => {
            dispatch(setUser(null))
        })
        .catch((error) => console.log(error))
    }
}