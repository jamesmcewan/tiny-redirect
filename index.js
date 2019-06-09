module.exports = (req, res) => {
  res.writeHead(301, {
    Location: process.env.REDIRECT_TO
  });
  res.end("Moved Permanently");
};
