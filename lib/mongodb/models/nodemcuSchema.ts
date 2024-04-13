import mongoose from "mongoose"

const espSchema = new mongoose.Schema({
  deviceName: String,
  wifiStatus: String,
  analogPins: [Number],
  digitalPins: [Boolean],
  timestamp: { type: Date, default: Date.now }
});

const nodemcuSchema = mongoose.models.ESP || mongoose.model('ESP', espSchema);

export default nodemcuSchema;
