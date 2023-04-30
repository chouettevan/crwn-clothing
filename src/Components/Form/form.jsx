import FormInput from "../FormInput/formInput";
import Button from "../Button/button";
import {FormContainer,Child } from "./styles";
import { useState } from "react";
const Form = ({ fields,onSubmit,buttonText,children}) => {
    const [ reset,setReset ] = useState(false);
    for (let i of fields) {
        i.name = i.label.replace(/ /g,'')
        .replace(i.label[0],i.label[0].toLocaleLowerCase());
    }
    const submitHandler = async event => {
        event.preventDefault();
        const values = {};
        //extracting form  input values from the event
        for (let i of event.target) {
            if (i.localName === 'input') {
                values[i.name] = i.value;
            }
        }
        if (await onSubmit(values)) setReset(true);

    };
    let isGoogleButton = false;
    if (children) {
        isGoogleButton = true;
    }
    return (
        <FormContainer>
            <form onSubmit={submitHandler}>
                {fields.map(({ id,...props })=> {
                    return <FormInput key={id} reset={reset} {...props} required/>; 
                })}
                <Child $isGoogleButton={isGoogleButton}>
                    <Button type='submit'>
                        {buttonText}
                    </Button>
                    {/* the google sign in button,if one */}
                    {children}
                </Child>
            </form>
        </FormContainer>
    );
};
export default Form;