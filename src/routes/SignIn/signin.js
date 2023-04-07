import { signInWithGooglePopup,createUserDocument } from "../../utillities/firebase/firebase";
const Signin = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocument(user);
        console.log(userDocRef);
    };
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Log In with google popup
            </button>
        </div>
    );
};
export default Signin;