import {Input,InputLabel,InputContainer} from './styles';
import { FC,InputHTMLAttributes } from 'react';

type FormInputProps = {
    label:string,
} & InputHTMLAttributes<HTMLInputElement>


const FormInput:FC<FormInputProps> = ({label,...props}) => {
    return (
        <InputContainer>
            <Input 
            {...props}
            />
            {
            label ?
            <InputLabel shrink={Boolean(
            props.value
            && typeof props.value === 'string'
            && props.value?.length
            )}>{label}</InputLabel>
            : null
            }
        </InputContainer> 
    );
};
export default FormInput;
