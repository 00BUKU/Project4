import mongoose from 'mongoose'

mongoose.connect(
  "mongodb+srv://00BUKU:@podlux.nwomy7k.mongodb.net/PodLux?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`🎉 Connected to MongoDB at ${db.host}:${db.port} 🎉`);
});

db.on('error', function(error) {
  console.error(`😞 Connection error: ${error} 😞`);
});