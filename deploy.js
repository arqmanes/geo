require('dotenv').config();
const ftp = require('basic-ftp');
const path = require('path');
const fs = require('fs');

const EXCLUDES = [
    'node_modules',
    '.git',
    '.env',
    '.DS_Store',
    'deploy.js',
    'package.json',
    'package-lock.json',
    '.gitignore'
];

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        if (!process.env.FTP_HOST || !process.env.FTP_USER || !process.env.FTP_PASSWORD) {
            throw new Error('❌ Faltan credenciales en el archivo .env');
        }

        console.log('🔌 Conectando a Hostinger via FTPS...');
        await client.access({
            host: process.env.FTP_HOST.replace(/^ftp:\/\//, ''),
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            secure: true,
            secureOptions: { rejectUnauthorized: false }
        });

        console.log('✅ Conexión establecida.');

        const remoteRoot = process.env.FTP_REMOTE_ROOT || '/domains/arqmanes.com/public_html';
        const localRoot = __dirname;

        console.log(`📂 Subiendo archivos desde ${localRoot} a ${remoteRoot}...`);

        await client.ensureDir(remoteRoot);
        // await client.clearWorkingDir(); // Disabled for safety, enables incremental updates

        // Recursive upload function
        async function uploadDirectory(localDir, remoteDir) {
            const items = fs.readdirSync(localDir);

            for (const item of items) {
                if (EXCLUDES.includes(item)) continue;
                if (item.startsWith('.')) continue; // ignore hidden files/dirs by default except specific ones if needed

                const localPath = path.join(localDir, item);
                const remotePath = `${remoteDir}/${item}`;
                const stats = fs.statSync(localPath);

                if (stats.isDirectory()) {
                    await client.ensureDir(remotePath);
                    await uploadDirectory(localPath, remotePath);
                } else {
                    console.log(`⬆️ Subiendo ${item}...`);
                    await client.uploadFrom(localPath, remotePath);
                }
            }
        }

        await uploadDirectory(localRoot, remoteRoot);

        console.log('🚀 Despliegue completado con éxito en www.arqmanes.com');

    } catch (err) {
        console.error('❌ Error en el despliegue:', err);
        process.exit(1);
    }
    client.close();
}

deploy();
