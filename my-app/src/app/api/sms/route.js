import { NextResponse } from "next/server";
import twilio from "twilio";


const accountSid = "Tus credenciales de Twilio";
const authToken = "Pos tu token el mio esta en .env";


const client = twilio(accountSid, authToken);

export async function GET() {
    try {
        const message = await client.messages.create({
            body: "Hello from Twilio",
            from: 'El numero que te da el Twilio Triviño',
            to: 'A quien se lo mandaras'
        });

        console.log(message.sid);

        return NextResponse.json({ message: "Message Sent" });
    }catch(err) {
        console.error(err);
        return NextResponse.json({ message: "Error Sending Message" }, { status: 500 });
    }
}