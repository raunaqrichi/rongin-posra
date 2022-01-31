import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const Usefirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
        
        
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => 
                setIsLoading(false)
            )

    }



    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            // Sign-out successful.
            setUser({})
          }) 
        //   .catch((error) => {
        //     // An error happened.
            
        //    });
          .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false)
        });
    }, [])

    return {
        user,
        isLoading,
        error,
        signInUsingGoogle,
        logOut

    }
 }

export default Usefirebase;
