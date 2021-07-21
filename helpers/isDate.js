// const { request, responce } = require('express')
const moment = require('moment')

const isDate = ( value, { req, location, path } ) => {
    
    if( !value ){
        return false
    }
    
    if( moment( value ).isValid() ){
        return true
    }else{
        return false
    }
    // console.log( moment( value ).toDate() )
    // console.log( req, location, path )
    
}

module.exports = {
    isDate
}