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

</head>
<body>
    <div id="divMainContainer" style="padding-top:1em;" class="container">
        <form id="patientForm">
            <div class="container">
                <!--1 Column-->

                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                Thank you! Your message has been received as follows:
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Name: <c:out value="${contactFormData.name}"></c:out></h4>
                                <br/>
                                    <h5 class="card-subtitle mb-2 text-muted">Gender: <c:out value="${contactFormData.gender}"></c:out></h5>
                            <br/>
                    <h5 class="card-subtitle mb-2 text-muted">Category: <c:out value="${contactFormData.category}"></c:out></h5>
                    <br/>
                    <p class="card-text">Message: <c:out value="${contactFormData.message}"></c:out></p>
                    <br/><br/>
                    <p>Please feel free to <a href="contactform.jsp" class="card-link">Contact Us</a> again</p>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                             
                            </div>
                          </div>
                       
                    </div>
                                     
                </div>
                
            </div>
        </form>
    </div>
</body>

</html>