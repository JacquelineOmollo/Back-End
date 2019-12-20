const server = require("./api/server");

const PORT = process.env.PORT || 5050;
server.listen(PORT, () =>
  console.log(`\n== Server Running on port: ${PORT} ==\n`)
);
