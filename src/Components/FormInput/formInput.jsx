import { useState } from "react";
// import './forminput.scss';
import {Input,InputLabel,InputContainer} from './styles'
const FormInput = ({label,...props}) => {
    const [ value,setValue ] = useState('');  
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
