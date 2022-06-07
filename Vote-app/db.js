import mongoose from "mongoose";
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
  });

  export default function connect() {
    return mongoose.connect('mongodb+srv://mouheb:mouheb1234@cluster0.qthitfu.mongodb.net/?retryWrites=true&w=majority', {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
  }  