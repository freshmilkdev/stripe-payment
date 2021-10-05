import {useEffect, useState} from "react";
import {loadStripe} from "@stripe/stripe-js";

export const useStripePromise = () => {
    const [stripePromise, setStripePromise] = useState(null);
    useEffect(() => {
        (async () => {
            const {publishableKey} = await fetch('/config').then((r) => r.json());
            setStripePromise(loadStripe(publishableKey));
        })();
    }, []);
    return {
        stripePromise
    }
}