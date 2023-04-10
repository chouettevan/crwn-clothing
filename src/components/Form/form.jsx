import FormInput from "../FormInput/formInput";
import Button from "../Button/button";
import './form.scss';
const Form = ({ fields,onSubmit,submit }) => {
    for (let i of fields) {
        i.name = i.label.replace(/ /g,'')
        .replace(i.label[0],i.label[0].toLocaleLowerCase());
    }
    const submitHandler = event => {
        console.log(event);
        event.preventDefault();
        const values = {};
        for (let i of event.target) {
            if (i.localName === 'input') {
                values[i.name] = i.value;
            }
        }
        if (onSubmit(values)) event.target.reset();

    };
    return (
        <div className="form-container">
            <h2>Don't Have an Account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={submitHandler}>
                {fields.map(({ id,...props })=> {
                    return <FormInput key={id} {...props} required/>; 
                })}
                <Button children={submit} type='submit'/> 
            </form>
        </div>
    );
};
export default Form;