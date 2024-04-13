import mongoose from "mongoose";

const mq135Schema = new mongoose.Schema({
    deviceName: String,
    gasConcentration: Number,
    timestamp: { type: Date, default: Date.now },
});

const gasSensorSchema =
    mongoose.models.MQ135 || mongoose.model("MQ135", mq135Schema);

export default gasSensorSchema;
