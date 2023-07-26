import { SpinnerContainer,SpinnerOverlay } from './styles';
import { HTMLAttributes} from 'react';

type SpinnerProps = {
    $small?:boolean
} & HTMLAttributes<HTMLDivElement>


const Spinner = (props:SpinnerProps) => {
    return (
        <SpinnerContainer {...props}>
            <SpinnerOverlay/>
        </SpinnerContainer>
    );
}
export default Spinner;