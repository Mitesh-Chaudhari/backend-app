//To handle API Response
class ApiResponse{
    constructor(
        statusCode,
        data,
        message="Success",
    ){
        // super(message);
        this.data = data,
        this.message = message;
        this.success = statusCode < 400;
    }
}

export default ApiResponse;