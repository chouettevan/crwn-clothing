import { useState } from "react";
import './forminput.scss';
const FormInput = ({label,...props}) => {
    const [ value,setValue ] = useState('');  
    return (
        <div className='input-container' >
            <input 
            {...props}
            className='form-input'
            onChange={event => setValue(event.target.value)}
            />
            {
                label ?
                <label className={`${value.length > 0 ? 'shrink ':''}input-label`}>{label}</label>
                : null
            }
        </div> 
    );
};
export default FormInput;