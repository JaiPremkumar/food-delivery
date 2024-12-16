const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.paymentProcess=async (req,res,next) => {
    const paymentInten = await stripe.paymentIntents.create({
        amount:req.body.amount,
        currency:"usd",
        description:"TEST PAYMENT",
        metadata:{integration_check:"accept_payment"},
        shipping:req.body.shipping
    })
    res.status(200).json({
        success:true,
        client_secret:paymentInten.client_secret 
    }) 
}

exports.sendStripe=async (req,res,next) => {
    res.status(200).json({
        stripeApiKey:process.env.STRIPE_KEY
    })
}