import mongoose from "mongoose"

const dhtSchema = new mongoose.Schema({
  deviceName: String,
  temperature: Number,
  humidity: Number,
  timestamp: { type: Date, default: Date.now }
});

const tempSchema = mongoose.models.DHT || mongoose.model('DHT', dhtSchema);

export default tempSchema;