const app = require('./app')
const port = process.env.PORT || 5002
app.listen(port,() => {console.log(`Server running on port ${port}`)});
