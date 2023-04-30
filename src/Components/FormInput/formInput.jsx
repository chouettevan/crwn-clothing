import { useState } from "react";
// import './forminput.scss';
import {Input,InputLabel,InputContainer} from './styles'
const FormInput = ({label,reset,...props}) => {
    const [ value,setValue ] = useState('');  
    if (reset) {
        props.value = '';
    }
    return (
        <InputContainer>
            <Input 
            {...props}
            onChange={event => setValue(event.target.value)}
            />
            {
            label ?
            <InputLabel shrink={value.length}>{label}</InputLabel>
            : null
            }
        </InputContainer> 
    );
};
export default FormInput;
