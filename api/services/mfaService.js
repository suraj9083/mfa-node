const Q = require("q");
const qrcode = require('qrcode');
const speakeasy = require('speakeasy');

/**
 * @author: Suraj Sonkar
 * @email <surajsonkar1919@gmail.com> // if any query.
 */

// Generate a secret key
const secret = speakeasy.generateSecret({ length: 20 });

// Generate a QR code for the user to scan //`<img src="${qrCodeUrl}" alt="QR Code">`
exports.qr = async () => {
    const deferred = Q.defer();
    const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url);
    deferred.resolve({
        "qrCodeUrl": qrCodeUrl,
        "secret": secret.otpauth_url
    })
    return deferred.promise;
}

// Verify the user's OTP
exports.verify = async (req) => {
    const deferred = Q.defer();
    const token = req.body.token;
    const verified = speakeasy.totp.verify({
        secret: secret.base32,
        encoding: 'base32',
        token: token
    });
    if (verified) {
        deferred.resolve({
            "status": "success",
            "error": "false",
            "msg": "OTP verified successfully!"
        });
    } else {
        deferred.resolve({
            "status": "failed",
            "error": "true",
            "msg": "OTP Invalid!!"
        });
    }
    return deferred.promise;
}