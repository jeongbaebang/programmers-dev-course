import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  address: String,
  description: String,
  email: String,
  isCompleted: Boolean,
});

export default mongoose.model('users', userSchema);
