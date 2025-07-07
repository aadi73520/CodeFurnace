const mongoose= require('mongoose');
const { Schema } = mongoose;

const problemSchema = new Schema({
        title:{
                type:String,
                required:true
        },
        description:{
                type:String,
                required:true
        },  
        difficulty:{
                type:String,
                enum:['easy','medium','hard'],
                required:true,
        },
        tags:{
                type:String,
                enum:['array','linkedList','graph','tree','dp','stack','queue','string'],
                required:true
        },
        visibleTestCases:[
                {
                        input:{
                                type:String,
                                required:true,
                        },
                        output:{
                                type:String,
                                required:true,
                        },
                        explanation:{
                                type:String,
                                required:true
                        }
                }
        ],
        hiddenTestCases:[
                {
                        input:{
                                type:String,
                                required:true,
                        },
                        output:{
                                type:String,
                                required:true,
                        }
                }
        ],
        startCode:[
                {
                        language:{
                                type:String,
                                required:true,
                        },
                        initialCode:{
                                type:String,
                                required:true
                        }
                }
        ],
        referenceSolution:[
                {
                        language:{
                                type:String,
                                required:true,
                        },
                        completeCode:{
                                type:String,
                                required:true
                        }
                }
        ],
        problemCreator:{
                type:Schema.Types.ObjectId,//kon user ies problem ko create kara hn
                ref:'user',//ek schema durhre ko refer kara hn
                required:true
        }
},{timestamps:true});

const problem = mongoose.model("problem",problemSchema);
module.exports = Problem;