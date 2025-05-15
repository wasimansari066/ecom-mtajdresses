require("mongoose").connect(process.env.DB_KEY)
.then(() => {
    console.log("Database Connected Successsfully");
})
.catch((error) => {
    console.log(error)
})