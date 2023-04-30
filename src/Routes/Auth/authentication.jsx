import { 
    emailPasswordSignUp,
    signInWithGooglePopup,
    createUserDocument,
    emailPasswordSignIn } from "../../Utils/Firebase/firebase";
import Form from "../../Components/Form/form";
import Button from "../../Components/Button/button";
import AuthRoute from "./styles";
const signUpfields = [
    {label:'Display Name',type:'text',id:1},
    {label:'Email',type:'email',id:2},
    {label:'Password',type:'password',id:3},
    {label:'Confirm Password',type:'password',id:4}
];
const signInfields = [
    {label:'Email',type:'email',id:1},
    {label:'Password',type:'password',id:2}
];
const Signin = () => {

    
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocument(user);
    };
    
    
    const signUp = async ({ displayName,email,password,confirmPassword }) => {
        if (password !== confirmPassword){
            alert('Passwords do not match');
            return false;
        }
        try {
            const { user } = await emailPasswordSignUp(
                email,
                password);
                await createUserDocument(user,{ displayName });

        } catch (error) {
            if (error.code ==='auth/email-already-in-use') {
                alert('cannot create user,email already in use');
            } else if (error.code === 'auth/weak password') {
                alert('too weak password.should be at least 6 characters');
            }
            console.log(error);
            return false;
        }
        //reset form fields if succsessful
        return true;
    };
    
    
    const signIn = async ({ email,password }) => {
        try {
            await emailPasswordSignIn(email,password);

        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;   
                default:
                    console.log(err); 
            }
            return false;
        }
        //reset form fields if successful
        return true;
    };
    
    
    return (
        <AuthRoute>
            <h1>Sign In</h1>
            <div>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <Form fields={signInfields} 
                onSubmit={signIn} 
                buttonText='Sign In'>
                    <Button $google type='button'  onClick={logGoogleUser}>
                        Google Sign In
                    </Button> 
                </Form>
            </div>
            <div>
                <h2>I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <Form fields={signUpfields} 
                onSubmit={signUp} 
                buttonText='Sign Up' />       
            </div>
        </AuthRoute>
    );
};
export default Signin;