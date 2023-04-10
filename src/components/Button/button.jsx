import './button.scss';
const Button = ({ children,className,...props }) => {
    return (
        <button {...props} className={`${className} button`}>{children}</button>
    );
};
export default Button;