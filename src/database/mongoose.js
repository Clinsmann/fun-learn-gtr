const mongoose = require("mongoose");

//MONGODB CONNECTION
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log("application successfully connected to database...")
);
