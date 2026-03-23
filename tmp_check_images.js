
const urls = [
    'https://img.youtube.com/vi/kFwWXshd95c/maxresdefault.jpg',
    'https://img.youtube.com/vi/kFwWXshd95c/hqdefault.jpg',
    'https://img.youtube.com/vi/T2cK10z9otc/maxresdefault.jpg',
    'https://img.youtube.com/vi/T2cK10z9otc/hqdefault.jpg'
];

async function check() {
    for (const url of urls) {
        try {
            const res = await fetch(url, { method: 'HEAD' });
            console.log(`${url}: ${res.status}`);
        } catch (e) {
            console.log(`${url}: FAILED`);
        }
    }
}

check();
