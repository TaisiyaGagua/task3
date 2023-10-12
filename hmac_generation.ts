import crypto from "crypto";

function generateSecureKey(): string {
    return crypto.randomBytes(32).toString("hex");
}

function computeHMAC(key: string, message: string): string {
    const hmac = crypto.createHmac("sha256", key);

    hmac.update(message);
    return hmac.digest("hex");
}

function showHMAC(string: string) {
    const key = generateSecureKey();

    const hmac = computeHMAC(key, string);

    console.log("HMAC:", hmac);
    return `HMAC key: ${key}`;
}

export { showHMAC };
