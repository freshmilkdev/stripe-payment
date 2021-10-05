import './App.css';
import {CheckoutForm} from "./components/CheckoutForm/CheckoutForm";
import {Elements} from "@stripe/react-stripe-js";
import {useStripePromise} from "./hooks/useStripePromise";

function App() {
    const {stripePromise} = useStripePromise();
    return (
        <div className="App">
            <header className="App-header">
                <h1>Stripe Payment App</h1>
            </header>
            <div>
                {stripePromise &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>}
            </div>
        </div>
    );
}

export default App;
