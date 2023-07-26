import SignInForm from "../../Components/Forms/sign-in/sign-in-form.component";
import SignUpForm from "../../Components/Forms/sign-up/sign-up-form.component";
import AuthRoute from "./styles";

const Signin = () => {    
   return (
        <AuthRoute>
            <SignInForm/>
            <SignUpForm/>
        </AuthRoute>
    );
};
export default Signin;