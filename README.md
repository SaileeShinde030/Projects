using System;
using System.IO;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using Org.BouncyCastle.OpenSsl;
using Org.BouncyCastle.Security;
using Org.BouncyCastle.Crypto;

class Program
{
    static void Main()
    {
        string pemFilePath = "path/to/your/certificate.pem";
        string pfxFilePath = "path/to/your/certificate.pfx";
        string pfxPassword = "yourPfxPassword";

        string dataToEncrypt = "Hello, RSA Encryption!";

        // Encrypt with public key from PEM
        byte[] encryptedData = EncryptWithPemPublicKey(dataToEncrypt, pemFilePath);
        Console.WriteLine("Encrypted Base64: " + Convert.ToBase64String(encryptedData));

        // Decrypt with private key from PFX
        string decryptedData = DecryptWithPfxPrivateKey(encryptedData, pfxFilePath, pfxPassword);
        Console.WriteLine("Decrypted Text: " + decryptedData);
    }

    static byte[] EncryptWithPemPublicKey(string plainText, string pemFilePath)
    {
        using (TextReader reader = File.OpenText(pemFilePath))
        {
            PemReader pemReader = new PemReader(reader);
            var certificate = (Org.BouncyCastle.X509.X509Certificate)pemReader.ReadObject();
            AsymmetricKeyParameter publicKey = certificate.GetPublicKey();

            var rsa = DotNetUtilities.ToRSA((RsaKeyParameters)publicKey);
            return rsa.Encrypt(System.Text.Encoding.UTF8.GetBytes(plainText), RSAEncryptionPadding.Pkcs1);
        }
    }

    static string DecryptWithPfxPrivateKey(byte[] encryptedData, string pfxFilePath, string password)
    {
        var cert = new X509Certificate2(pfxFilePath, password, X509KeyStorageFlags.Exportable);
        using (RSA rsa = cert.GetRSAPrivateKey())
        {
            byte[] decryptedBytes = rsa.Decrypt(encryptedData, RSAEncryptionPadding.Pkcs1);
            return System.Text.Encoding.UTF8.GetString(decryptedBytes);
        }
    }
}
