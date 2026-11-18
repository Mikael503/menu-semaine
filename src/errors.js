export class ApiError extends Error {
    constructor(message) {
        super(message);
        this.name = "ApiError";
    }
}

export class HttpError extends ApiError {
    constructor(message, status) {
        super(message);
        this.name = "HttpError";
        this.status = status;
    }
}

export class NotFoundError extends ApiError {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}

export class NetworkError extends ApiError {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}