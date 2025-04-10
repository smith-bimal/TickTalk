import venom from "venom-bot"

function generateOTP(length = 6) {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

venom
    .create()
    .then((client) => start(client))
    .catch((error) => {
        console.error('Failed to start Venom', error);
    });

function start(client) {
    const phoneNumber = '917008421722';
    const otp = generateOTP();

    client.sendText(`${phoneNumber}@c.us`, `🔐 Your OTP is: ${otp}\nIt will expire in 5 minutes.`)
        .then(() => {
            console.log('✅ OTP sent successfully!');
        })
        .catch((error) => {
            console.error('❌ Failed to send message:', error);
        });
}