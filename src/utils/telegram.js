import axios from 'axios';

const TELEGRAM_TOKEN = '7588839274:AAHo7jiou9pswaDGM42ejqOQUNmjc2-qhss';
const CHAT_ID = '-4695328713'; 

export const sendToTelegram = async (message) => {
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    try {
        await axios.post(url, {
            chat_id: CHAT_ID,
            text: message,
        });
        return true;
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        return false;
    }
};
