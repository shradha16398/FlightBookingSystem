package com.search.exception;


   import java.util.Date;
  
  import org.springframework.http.HttpStatus;
   import org.springframework.http.ResponseEntity; 
   import org.springframework.web.bind.MethodArgumentNotValidException; 
   import org.springframework.web.bind.annotation.ControllerAdvice; 
   import org.springframework.web.context.request.WebRequest;
   import  org.springframework.web.bind.annotation.ExceptionHandler;
  @ControllerAdvice
   public class ExceptionHandlerResource { //handle specific exception
  
 @ExceptionHandler( ResourceNotFoundException.class) 
 public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException exception,
  WebRequest request) { ErrorDetails errorDetails=new ErrorDetails(new Date(),
  exception.getMessage(), request.getDescription(false)); return new
  ResponseEntity<>(errorDetails,HttpStatus.NOT_FOUND); }
  
  //handle global exception
  
 @ExceptionHandler(Exception.class)
  public ResponseEntity<?> handleGlobalException(Exception exception,
  WebRequest request) { ErrorDetails errorDetails=new ErrorDetails(new Date(),
  exception.getMessage(), request.getDescription(false)); return new
  ResponseEntity<>(errorDetails,HttpStatus.INTERNAL_SERVER_ERROR); }
  
  //handling validation exceptions
  
  @ExceptionHandler( MethodArgumentNotValidException.class) 
  public ResponseEntity<?>customValidation(MethodArgumentNotValidException exception)
  { 
	  ErrorDetails errorDetails=new ErrorDetails(new Date() ,"Validation Error..!! Please recheck the data that you need to added..",
  exception.getBindingResult().getFieldError().getDefaultMessage()); return new
  ResponseEntity<>(errorDetails,HttpStatus.BAD_REQUEST); } }
 