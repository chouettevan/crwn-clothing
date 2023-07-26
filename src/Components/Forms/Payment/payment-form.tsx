import { useState,MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { totalPriceSelector } from '../../../Store/cart/cart.selectors';
import { cleanUpCart } from "../../../Store/cart/cart.actions";
import Spinner from "../../Spinner/spinner";
import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import { StripeCardElement } from '@stripe/stripe-js'
import Button from '../../Button/button';
import { PaymentFormContainer,FormContainer } from './styles';
import { useSelector,useDispatch } from "react-redux";
import { userSelector } from "../../../Store/user/user.selector";


const ifValidCardElement = (card:StripeCardElement | null):card is StripeCardElement => card !== null;


const PaymentForm = () => {
    const [isProcessingPayment,setIsProcessingPayment] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(totalPriceSelector);
    const user = useSelector(userSelector);
    const paymentHandler = async (event:MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (!stripe || !elements || !amount) return;
        if (!window.confirm(`total:${amount}$\nDo you want to proceed?`)) return;
        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/payments',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ amount:amount*100 })
        }).then(res => res.json());
        const {
            paymentIntent:{ client_secret }
        } = response;
        const cardDetails = elements.getElement(CardElement)
        if (!ifValidCardElement(cardDetails)) return;
        const paymentResult = await stripe.confirmCardPayment(
            client_secret,
            {
                payment_method:{
                    card:cardDetails,
                    billing_details:{
                        name:(user && user.displayName ) || 'Guest' ,
                    }
                }
            }
        );
        setIsProcessingPayment(false);
        if (paymentResult.error) {
            const { error } = paymentResult
            switch (error.code) {
                case 'incomplete_cvc':
                case 'invalid_expiry_year_past':
                    alert(error.message);
                    break;
                default:
                    console.log(error);
                    alert('There was a problem with your payment.')
            }
        }
        else if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment successful');
                dispatch(cleanUpCart());
                navigate('/');
            }
    }
    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment:</h2>
                <CardElement/>
                <Button 
                $inverted 
                onClick={paymentHandler}
                >{isProcessingPayment
                 ? <Spinner $small />
                 : 'Pay Now'
                 }</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
};
export default PaymentForm;

