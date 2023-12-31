const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    shippingInfo: {
        address: {
            type: String,
            requred: true
        },
        state: {
            type: String,
            requred: true
        },
        city: {
            type: String,
            requred: true
        },
        country: {
            type: String,
            requred: true
        },
        zipCode: {
            type: Number,
            requred: true
        },
        phone: {
            type: Number,
            requred: true
        },
    },
    orderItems: [{
        price: {
            type: Number,
            requred: true
        },
        quantity: {
            type: Number,
            requred: true
        },
        product: {
            type: mongoose.Schema.ObjectId,
            ref: "Product",
            requred: true
        },
    }],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        requred: true
    },
    // paymentInfo:{
    //     id:{
    //         type:String,
    //         required:true
    //     },
    //     status:{
    //         type:String,
    //         required:true,
    //     }
    // },
    paidAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    orderStatus: {
        type: String,
        required: true,
        enum: ['Processing', 'Shipped', 'Delivered'],
        default: 'Processing'
    },
    deliveredAt: Date,
}, {
    timestamps: true,
})

module.exports = mongoose.model('Order', orderSchema);