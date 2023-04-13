import FormInput from "../FormInput/formInput";
import Button from "../Button/button";
import './form.scss';
const Form = ({ fields,onSubmit,submit,children }) => {
    for (let i of fields) {
        i.name = i.label.replace(/ /g,'')
        .replace(i.label[0],i.label[0].toLocaleLowerCase());
    }
    const submitHandler = async event => {
        event.preventDefault();
        const values = {};
        for (let i of event.target) {
            if (i.localName === 'input') {
                values[i.name] = i.value;
            }
        }
        if (await onSubmit(values)) event.target.reset();

    };
    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                {fields.map(({ id,...props })=> {
                    return <FormInput key={id} {...props} required/>; 
                })}
                <div className="child">
                    <Button type='submit'>
                        {submit}
                    </Button>
                    {children}
                </div>
            </form>
        </div>
    );
};
export default Form;