<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
   
    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="author" content="VivekSanilkar">
    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/cerulean/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EmRcsPP774S9MOi4ywB+JXUWjYnBdyInMzG2XsC5siZEUpexqxOMJW358dCYEjPu" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/master.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>

    <title>Contact Form</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark " style="background-color: #e95420;">
        <a style="padding-right: 2em;" class="navbar-brand" href="index.html">Customer Contact Form</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" style="border-left: white 1px solid; padding-left: 2em; padding-right: 2em;">
                    <a id="lnkGetBooks" class="nav-link" href="index.html">Home</a>
                </li>
                
            </ul>
           
        </div>
    </nav>
    <div id="divMainContainer" style="padding-top:1em;" class="container">
        <form id="contactform" name="contactform" method="post" action="ContactFormServlet">
         
         <c:if test="${isErrMsgsPresent}">
                    <div>
                        <p>
                            ${errMsgs}
                        </p>
                    </div>
                </c:if>
            <div class="container">
                <!--1 Column-->

                <div class="row">
                    <div class="col-sm-12">
                        <!-- Form heading-->
                <h3 style="color: #51555c">Customer Contact Form</h3>
                    </div>
                                     
                </div>
                <!--1 Column-->

                <div class="row">
                    <div class="col-sm-12">
                         <!--Label, Textbox and lower text small-->
                <label for="name">Name</label>
                <input type="text" value="${contactFormData.name}" class="form-control" id="name" placeholder="e.g John Smith" name="name"
                         >
                <small style="opacity: 50%;">Enter your full name</small>
                    </div>
                                     
                </div>
                <!--1 Column-->
                <br/>
                <div class="row">
                    <div class="col-sm-12">
                        <!--2x Radio buttons-->
                <!--Inside row div-->
                <label> *Gender</label> <br>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input id="male" class="form-check-input" type="radio" name="gender"
                            value="Male" <c:if test="${contactFormData.gender eq 'Male'}"> checked </c:if> /> Male
                    </label>
                    <label class="form-check-label"style="margin-left: 10px;">
                        <input id="female" class="form-check-input" type="radio" name="gender"
                            value="Female" <c:if test="${contactFormData.gender eq 'Female'}"> checked </c:if>> Female
                    </label>
                </div>
                    </div>
                                     
                </div>
                <!--1 Column-->
                <br/>
                <div class="row">
                    <div class="col-sm-12">
                        <!--Dropdown-->
                <label for="category">*Category:</label>
                <select id="category" class="form-control" name="category" >
                    <option value=null selected>Select...</option>
                    <option value="Feedback" <c:if test="${contactFormData.category eq 'Feedback'}"> selected </c:if>>Feedback</option>
                    <option value="Inquiry" <c:if test="${contactFormData.category eq 'Inquiry'}" >selected </c:if>>Inquiry</option>      
                    <option value="Complaint" <c:if test="${contactFormData.category eq 'Complaint'}">selected</c:if>>Complaint</option>
      
                </select>
                    </div>
                                     
                </div>
                <!--1 Column-->
                <br/>
                <div class="row">
                    <div class="col-sm-12">
                        <label for="text1">*Message:</label>
                <input type="text" value="${contactFormData.message}" class="form-control" id="message" name="message" >
                    </div>
                                     
                </div>

                <!--1 Column-->
                <br/>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-row" style="float: right; padding-right: 15px;">
                            
                            <button id="submit" type="submit" class="btn btn-default" 
                                style="margin-left:30px ;padding-right: 70px; padding-left: 70px; background-color: orangered;color: white;">Submit
                            </button>
                        </div>
                        <br> <br>
                    </div>
                                     
                </div>
                
            </div>
        </form>
    </div>
</body>
