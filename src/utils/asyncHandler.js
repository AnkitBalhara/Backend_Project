// Explaination of rthis code is written bellow in comments...
const asyncHandler = (requestHandler) =>async (req,res,next)=>{
    try {
        await requestHandler(req,res,next)
    } catch (error) {
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }
};

module.exports = { asyncHandler };

// There are two method for making this asyncHandler function..
// One is to go with tryCatch method and
// Other is to go with Promise..

// Try Catch Method is up ^^^

// //Higher order function...(those function which take a function as an parameter.)
// Step by Step....
// const asyncHandler = (funct) =>{()=>{}}
// const asyncHandler = (funct) =>()=>{};
// // if want  to make this function as async function..
// const asyncHandler = (funct) =>async(req,res,next)=>{};

// // Promise Method..
// const asyncHandler = (requsetHandler) => (req, res, next) => {
//   Promise.resolve(requsetHandler(req, res, next)).catch((err) => next(err));
// };
