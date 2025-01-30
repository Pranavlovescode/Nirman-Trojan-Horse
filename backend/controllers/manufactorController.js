const axios = require('axios');
const { sendSMS } = require("../send.js");
const getData = async(req, res)=>{
    const {name, price, description} = req.body;
    const reduced_amount = price - (price*0.10)
    const message = `I am looking to purchase ${name} within a budget of ₹${reduced_amount}. Please provide your price quote.`;
    try {
        // const sellers = await Seller.find({ 'item.name': name });
        // if (sellers.length === 0) {
        //     return res.status(404).json({ message: 'No sellers found with that item' });
        // }
        const sellerPhones = [{
              "phone": "whatsapp:+917999505967",
              "name": "Rahul Traders"
            },
        ]
        for (const vendor of sellerPhones) {
            try {
                await sendSMS(message, vendor.phone);
                console.log(`Message sent to ${vendor.phone}`);
                const response = await axios.post("http://127.0.0.1:5000/sendMsgFromShopkeeper", {
                input: message,
                to: vendor.phone,
                item: name,
                reduced_amount: reduced_amount,
                actual_price : price
            });
                console.log(`Message pushed to Flask server: ${response.data}`);
            } catch (error) {
                console.log(`Error sending SMS to ${vendor.phone}:`, error.message);
            }
        }
        return res.status(200).json({ sellers: sellerPhones });
    } catch (err) {
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
}


module.exports = {getData}