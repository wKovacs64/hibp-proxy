const fetch = require('node-fetch');

module.exports = async (req, res) => {
  res.end(
    await (await fetch(`https://api.pwnedpasswords.com${req.url}`, {
      headers: {
        'User-Agent': process.env.UA,
      },
    })).text(),
  );
};
