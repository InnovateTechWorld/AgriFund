import app from "../config";
import { signInWithEmailAndPassword, UserCredential, getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

export default async function signIn(email: string, password: string) {
    let user = null,
        error = null;

    try {
        const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
        user = userCredential.user;

        // console.log('Signed in user:', user);
    } catch (e) {
        error = e;
        console.error(error);
    }

    return { user, error };
}


export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    const auth = getAuth();

    let user

    try {
        // let result = await signInWithRedirect(auth, provider); // sign in with redirect
        let result = await signInWithPopup(auth, provider);  //sign in with popup
        user = result.user;
        console.log('Signed in user:', user);

    } catch (e) {
        console.error(e);
        console.log(e);
    }
    return { user }
}
