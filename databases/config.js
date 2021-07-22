const { connect } = require('mongoose');
// const dotenv = require('dotenv').config();

const dbConection = async () => {
    try{
        const cluster = `mongodb+srv://${ process.env.USER}:${ process.env.PASS }@${ process.env.DB_CNN }`
        await connect( cluster, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("DB Online")
    }catch( err ){
        console.log( err )
        throw new Error("Error al iniciar base de datos")
    }
}

module.exports= {
    dbConection
}