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
import { auth, provider, storage } from "../firebase";
import db from "../firebase";
import { GET_ARTICLES, SET_LOADING_STATUS, SET_USER } from "./actionType";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, onSnapshot} from "firebase/firestore";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})

export const setLoading = (status) => ({
    type: SET_LOADING_STATUS,
    status: status
})

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload
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

// export function postArticleAPI(payload) {
//     return(dispatch) => {
//         if(payload.image !== "") {
//             const upload = storage
//             .ref(`image/${payload.image.name}`)
//             .put(payload.image)
//             upload.on(
//                 "state_changed",
//                 (snapshot) => {
//                     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//                     console.log(`Progress: ${progress}%`)
//                     if(snapshot.state === "RUNNING") {
//                         console.log(`Progress: ${progress}%`)
//                     }
//                 },
//                 (error) => console.log(error.code),
//                 async () => {
//                     const downloadURL = await upload.snapshot.ref.getDownloadURL();
//                     db.collection("article").add({
//                         actor: {
//                             description: payload.user.email,
//                             title: payload.user.displayName,
//                             date: payload.timestamp,
//                             image: payload.user.photoURL,
//                         },
//                         video: payload.video,
//                         sharedImg: downloadURL,
//                         comments: 0,
//                         description: payload.description,
//                     })
//                 }
//             )
//         }
//     }
// }

// export function postArticleAPI(payload) {
//     return (dispatch) => {

//         dispatch(setLoading(true))

//         if (payload.image !== "") {
//             const storageRef = ref(getStorage(), `image/${payload.image.name}`);
//             uploadBytes(storageRef, payload.image)
//             .then(() => {
//                 return getDownloadURL(storageRef);
//             })
//             .then((downloadURL) => {
//                 return addDoc(collection(db, "articles"), {
//                 actor: {
//                     description: payload.user.email,
//                     title: payload.user.displayName,
//                     date: payload.timestamp,
//                     image: payload.user.photoURL,
//                 },
//                 video: payload.video,
//                 sharedImg: downloadURL,
//                 comments: 0,
//                 description: payload.description,
//                 });
//             })
//             dispatch(setLoading(false))
            
//             .then((docRef) => {
//                 console.log("Document written with ID: ", docRef.id);
//             })
//             .catch((error) => {
//                 console.error("Error adding document: ", error);
//             });
//         } else if (payload.video) {
//             addDoc(collection(db, "articles"), {
//             actor: {
//                 description: payload.user.email,
//                 title: payload.user.displayName,
//                 date: payload.timestamp,
//                 image: payload.user.photoURL,
//             },
//             video: payload.video,
//             sharedImg: "",
//             comments: 0,
//             description: payload.description,
//             })
//             dispatch(setLoading(false))
//             .then((docRef) => {
//                 console.log("Document written with ID: ", docRef.id);
//             })
//             .catch((error) => {
//                 console.error("Error adding document: ", error);
//             });
//         }
//     };
//   }

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));
    if (payload.image !== "") {
      const storageRef = ref(getStorage(), `image/${payload.image.name}`);
      uploadBytes(storageRef, payload.image)
        .then(() => {
          return getDownloadURL(storageRef);
        })
        .then((downloadURL) => {
          return addDoc(collection(db, "articles"), {
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          dispatch(setLoading(false));
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          dispatch(setLoading(false));
        });
    } else if (payload.video) {
      addDoc(collection(db, "articles"), {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          dispatch(setLoading(false));
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          dispatch(setLoading(false));
        });
    }
  };
}

// export function getArticlesAPI() {
//     return(dispatch) => {
//         let payload

//         db.collection("article")
//         .orderBy("actor.date", "desc")
//         .onSnapshot((snapshot) => {
//             payload = snapshot.docs.map((doc) => doc.data())
//             console.log(payload)
//         })
//     }
// }

export function getArticlesAPI() {
  return (dispatch) => {
    let payload;

    onSnapshot(collection(db, "articles"), (snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data());
      dispatch(getArticles(payload))
    });
  };
}