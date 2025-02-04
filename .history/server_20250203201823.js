const app = require('./src/app');
const connect = require('./src/db/db');

connect();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});