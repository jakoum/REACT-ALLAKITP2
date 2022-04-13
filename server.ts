const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors')

const items=require('./routes/api/items')
//initialiser"express dans une variable
const app=express();
app.use(cors);
app.use(express.json())
//db config
const db=require('./key').mongoURI;
//connect to mongodb
mongoose.connect(db).then(()=>console.log('mongodb connected....'))
 app.use('/api/items',items);
const port=process.env.port || 5001;
 app.listen(port,()=>console.log(`server started on port ${port}`));
 
