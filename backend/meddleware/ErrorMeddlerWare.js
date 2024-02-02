// const errorHandler = (err, req, res, next)=>{
    // const statusCode = res.statusCode ? res.statusCode : 500
    // res.json ({
        // message: err.message,
        // stack: process.env.NODE_ENV === 'production' ? null : err.stack 
    // })
// }
// module.exports={
    // errorHandler
// }
// 


// const errorHandler = (err, req, res, next) => {
    // const statusCode = res.statusCode ? res.statusCode : 500;
    // res.status(statusCode).json({
        // message: err.message,
        // stack: process.env.NODE_ENV === 'production' ? null : err.stack 
    // });
// };
// 
// module.exports = {
    // errorHandler
// };
// 
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    
    console.error('Error en el middleware de manejo de errores:', err.message);

    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack 
    });
};

module.exports = {
    errorHandler
};
