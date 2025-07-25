const mongoose= require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:25
  },
  lastName:{
        type:String,
        minLength:3,
        maxLength:25
  },
  emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        immutable:true,
  },
  age:{
        type:Number,
        min:6,
        max:80,
  },
  role:{
        type: String,
        enum: ['user', 'admin'],  // ✅ Only these values allowed
        default: 'user',          // ✅ Optional default value
  },
  problemSolved:{
        type:[String],//proble id store
  },
  password:{
      type:String,
      required:true
  }
},{timestamps:true});

const User = mongoose.model("user",userSchema);
module.exports = User;