require('dotenv').config();
const ftp = require('basic-ftp');

async function testFTP() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: process.env.FTP_HOST.replace(/^ftp:\/\//, ''),
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            secure: true,
            secureOptions: { rejectUnauthorized: false }
        });

        const path = '/domains/arqmanes.com/public_html';

        console.log('--- RESTORING ORIGINAL FILES ---');

        // Restore index.html
        try {
            await client.rename(`${path}/index.php`, `${path}/index.html`);
            console.log('✅ Restored index.html');
        } catch (e) {
            console.log('❌ Could not restore index.html');
        }

        // Restore .htaccess
        try {
            await client.rename(`${path}/.htaccess.disabled`, `${path}/.htaccess`);
            console.log('✅ Restored .htaccess');
        } catch (e) {
            console.log('❌ Could not restore .htaccess');
        }

    } catch (err) {
        console.error(err);
    }
    client.close();
}

testFTP();
