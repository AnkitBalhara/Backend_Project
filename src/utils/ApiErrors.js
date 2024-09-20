class ApiErrors extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.errors = errors
        this.success=false //This is because we are handling for errors.

        
        if(statck){
            this.stack=statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}