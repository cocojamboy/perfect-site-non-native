
import Stripe from 'stripe';

export default async function handler(req, res) {
    try {
        if (req.method !== 'POST') {
            res.setHeader('Allow', 'POST');
            return res.status(405).json({ error: 'Method Not Allowed' });
        }

        // DEBUG: Check if Stripe Key exists
        if (!process.env.STRIPE_SECRET_KEY) {
            console.error("FATAL: STRIPE_SECRET_KEY is missing/undefined.");
            return res.status(500).json({ error: "Server Config Error: Stripe Secret Key is missing." });
        }

        // Initialize Stripe
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        const { items, hasBump } = req.body;

        let amount = 1900;
        if (hasBump) {
            amount += 1700;
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                hasBump: hasBump ? 'true' : 'false'
            }
        });

        return res.status(200).json({ clientSecret: paymentIntent.client_secret });

    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ error: error.message || "Unknown Server Error" });
    }
}
