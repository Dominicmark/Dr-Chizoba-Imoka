import https from 'https';

const options = {
  hostname: 'www.linkedin.com',
  path: '/posts/dr-chizoba-imoka-ubochioma-49b67558_rootsbasededucation-glocaleducation-globaleducation-ugcPost-7457616055981748224-1Voc',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Connection': 'keep-alive',
  }
};

https.get(options, (res) => {
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    console.log("Redirected to:", res.headers.location);
    return;
  }
  let data = '';
  res.on('data', (d) => data += d);
  res.on('end', () => {
    const match = data.match(/<meta\\s+property=[\"']og:image[\"']\\s+content=[\"']([^\"']+)[\"']/i);
    console.log("MATCH:", match ? match[1] : 'not found');
  });
}).on('error', (e) => {
  console.error(e);
});
