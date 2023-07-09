import mongoose from 'mongoose';

const DBConnection = async ()=> {
    const MONODB_URI =`mongodb://filesharing1:filesharing1@ac-r0v2nex-shard-00-00.o9xmppi.mongodb.net:27017,ac-r0v2nex-shard-00-01.o9xmppi.mongodb.net:27017,ac-r0v2nex-shard-00-02.o9xmppi.mongodb.net:27017/?ssl=true&replicaSet=atlas-gmxkdu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONODB_URI,{useNewUrlParser:true});
       console.log('Database connected successfully');
    }catch(error){
        console.error('Errorwhile connecting with the database',error.message);
    }
}

export default DBConnection;