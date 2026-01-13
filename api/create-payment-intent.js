const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { items, hasBump } = req.body;

    // Calculate Price securely on the server
    // Base Guide: $19.00
    let amount = 1900;

    // Order Bump: CV Review & Priority Support: $17.00
    if (hasBump) {
        amount += 1700;
    }

    try {
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

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Stripe Error:', error);
        res.status(500).json({ error: error.message });
    }
}
