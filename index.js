const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors')

// IMPORT ALL ROUTERS
const FeedBackRouter = require('./routes/feedbackFormRouter')




app.use(express.json());
app.use(cors());

app.use("/api/feedback",FeedBackRouter);

dotenv.config();

const port = process.env.PORT || 9000;


// MONGO DB CONNECTION
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("db connected..")).catch(err=>console.log(err));

app.get('/', (req, res) => {
  res.send('Welcome')
})



// NODE SERVER
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})


