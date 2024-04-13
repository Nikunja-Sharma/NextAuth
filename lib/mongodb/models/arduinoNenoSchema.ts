import mongoose from "mongoose"
const arduinoSchema = new mongoose.Schema({
  deviceName: String,
  connectionStatus: String,
  digitalPins: [Boolean], // Array of digital pin states
  analogPins: [Number], // Array of analog pin readings
  powerSource: String,
  timestamp: { type: Date, default: Date.now }
});

const ArduinoSchema = mongoose.models.Arduino || mongoose.model('Arduino', arduinoSchema);

export default ArduinoSchema;
