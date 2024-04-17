const app = require('./app');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

const port = process.env.PORT || 3000;
app.use(cors())
app.listen(port, () => {
  console.log(`App running in port ${port}`);
});
