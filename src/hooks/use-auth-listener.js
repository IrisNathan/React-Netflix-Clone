import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(
    //  check to see if there is a user in localstorage object and parse
    JSON.parse(localStorage.getItem('authUser'))
  );
  // check if a user is authorized
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });
    // clean listener to prevent unmounting - etc
    return () => listener();
  }, []);
  return { user };
}
