import mongoose from "mongoose";

const relaySchema = new mongoose.Schema({
    deviceName: String,
    channelStatus: [Boolean], // Array of relay channel states
    timestamp: { type: Date, default: Date.now },
});

const RelaySchema =
    mongoose.models.Relay || mongoose.model("Relay", relaySchema);

export default RelaySchema;
