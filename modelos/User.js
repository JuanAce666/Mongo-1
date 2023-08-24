import mongoose from "mongoose";

const esquema = mongoose.Schema({
    nombre:{
        type: String,
        required: [true,"invalid name"],
        trim: true,
        minlength: 5,
        maxlength:[55, "lengh is too long"]
    },
    edad:{
        type: Number,
        required: [true,"invalid age"],
        min:[1,"Must be over 1 year old"],
        max:[99,"Must be maximun 99 years old"],
        trim:true,
    },
    familia:{
        type:Array,
        default:[]
    }
},{
    timestamps: true
})

let modeloUsuario;
try {
    modeloUsuario = mongoose.model('Usuario');
} catch (error) {
    modeloUsuario = mongoose.model('Usuario', esquema);
}


export default modeloUsuario;