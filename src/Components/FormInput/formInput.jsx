import {Input,InputLabel,InputContainer} from './styles'
const FormInput = ({label,...props}) => {
    return (
        <InputContainer>
            <Input 
            {...props}
            />
            {
            label ?
            <InputLabel shrink={props.value.length}>{label}</InputLabel>
            : null
            }
        </InputContainer> 
    );
};
export default FormInput;
