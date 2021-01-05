import mongoose from 'mongoose';

function initializeDatabase() {
  mongoose.Promise = global.Promise;
  return mongoose.connect(process.env.MONGO_CONNECTIONSTRING, { useNewUrlParser: true });
}

export function closeDatabaseConnection() {
  mongoose.connection.close();
}

export default initializeDatabase;
