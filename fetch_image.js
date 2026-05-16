import https from 'https';

https.get('https://www.linkedin.com/posts/dr-chizoba-imoka-ubochioma-49b67558_rootsbasededucation-glocaleducation-globaleducation-ugcPost-7457616055981748224-1Voc', (res) => {
  let data = '';
  res.on('data', (d) => data += d);
  res.on('end', () => {
    const match = data.match(/<meta\\s+property=[\"']og:image[\"']\\s+content=[\"']([^\"']+)[\"']/i);
    console.log("MATCH:", match ? match[1] : 'not found');
  });
}).on('error', (e) => {
  console.error(e);
});
