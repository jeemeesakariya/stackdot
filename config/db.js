const mongoose = require("mongoose");

const dbConnect = (url) =>{
    mongoose.connect(url).then(e => { console.log("database is connected") }).catch((err) => {
        console.log(err)
    })

}

module.exports={dbConnect}