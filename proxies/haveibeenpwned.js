const fetch = require('node-fetch');

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=600');
  res.setHeader('Content-Type', 'application/json');
  res.end(
    await (await fetch(`https://haveibeenpwned.com${req.url}`, {
      headers: {
        Accept: 'application/vnd.haveibeenpwned.v2+json',
        'User-Agent': process.env.UA,
      },
    })).text(),
  );
};
