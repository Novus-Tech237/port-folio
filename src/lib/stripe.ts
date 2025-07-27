
import Stripe from "stripe";

// Temporarily disable Stripe for development
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY!)
  : null;

export default stripe;
