import { 
    createEmailPasswordAuth,
    signInWithGooglePopup,
    createUserDocument } from "../../utillities/firebase/firebase";
import Form from "../../components/Form/form";
import Button from "../../components/Button/button";
const signUpfields = [
    {label:'Display Name',type:'text',id:1},
    {label:'Email',type:'email',id:2},
    {label:'Password',type:'password',id:3},
    {label:'Confirm Password',type:'password',id:4}
];
const Signin = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocument(user);
        console.log(userDocRef);
    };
    const signUp = async ({ displayName,email,password,confirmPassword }) => {
        if (password !== confirmPassword){
            alert('Passwords do not match');
            return false;
        }
        try {
            const { user } = await createEmailPasswordAuth(
                email,
                password);
                await createUserDocument(user,{ displayName });
        } catch (error) {
            if (error.code ==='auth/email-already-in-use') {
                alert('cannot create user,email already in use');
            }
            console.log(error);
            return false;
        }
        return true;
    };
    return (
        <div>
            <h1>Sign In</h1>
            <Button children='SIGN IN WITH GOOGLE' className='google'/>
            <Form fields={signUpfields} onSubmit={signUp} submit='Sign Up'/>
        </div>
    );
};
export default Signin;