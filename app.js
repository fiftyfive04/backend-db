const app = require('./index')
require("dotenv").config()

app.listen(process.env.APP_PORT,() => {
    console.log(`Server up and running on port ${process.env.APP_PORT}`);
});