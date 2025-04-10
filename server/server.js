import { config } from "dotenv";
config()

import express from "express";
import cors from "cors";
import twilio from "twilio";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Send OTP
app.post('/send-otp', async (req, res) => {
  const { phone } = req.body;
  try {
    const verification = await client.verify
      .v2.services(process.env.TWILIO_VERIFY_SID)
      .verifications.create({ to: phone, channel: 'sms' });

    res.status(200).json({ status: verification.status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verify OTP
app.post('/verify-otp', async (req, res) => {
  const { phone, code } = req.body;
  try {
    const verification_check = await client.verify
      .v2.services(process.env.TWILIO_VERIFY_SID)
      .verificationChecks.create({ to: phone, code });

    if (verification_check.status === 'approved') {
      res.status(200).json({ success: true, message: 'Phone number verified' });
    } else {
      res.status(401).json({ success: false, message: 'Incorrect OTP' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
    res.send("Hello from TickTalk server")
});

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})