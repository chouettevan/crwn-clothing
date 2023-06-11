import { SpinnerContainer,SpinnerOverlay } from './styles';

const Spinner = (props) => {
    return (
        <SpinnerContainer {...props}>
            <SpinnerOverlay/>
        </SpinnerContainer>
    );
}
export default Spinner;