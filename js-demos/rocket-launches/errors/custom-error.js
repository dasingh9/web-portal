class FetchLaunchError extends Error {
  constructor(message, statusCode) {
    super(message); // Call the parent class constructor (Error)
    this.name = this.constructor.name; // Set the error name to 'CustomError'
    this.statusCode = statusCode || 500; // Optional custom property
    Error.captureStackTrace(this, this.constructor); // Captures the stack trace
  }
}