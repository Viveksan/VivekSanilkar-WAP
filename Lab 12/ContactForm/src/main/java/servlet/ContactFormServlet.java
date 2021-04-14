package servlet;

import java.io.IOException;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.ContactFormData;

/**
 * Servlet implementation class ContactFormServlet
 */
@WebServlet(description = "ContactFormServlet", urlPatterns = { "/ContactFormServlet" })
public class ContactFormServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public ContactFormServlet() {
    	super();
}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String destination = "contactform.jsp";
		RequestDispatcher requestDispatcher = request.getRequestDispatcher(destination);
		requestDispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	//	doGet(request, response);
		
		String missingFieldMsg = "";
		String name = request.getParameter("name");
        String gender = request.getParameter("gender");
        String category = request.getParameter("category");
        String message = request.getParameter("message");
        
        ContactFormData contactFormData = new ContactFormData(name, gender, category, message);
        request.setAttribute("contactFormData", contactFormData);
        System.out.println("name: "  + name + "gender: " + gender + "category: " + category + "message: " + message);
        
        if(name.equals("")) {
        	missingFieldMsg += "<span style='color:red;font-size:1em'>Name is missing.</span><br/>";
        }
        
        if(gender==null) {
        	missingFieldMsg += "<span style='color:red;'>Gender is missing.</span><br/>";
        }
		
        if(category.equals("null")) {
        	missingFieldMsg += "<span style='color:red;'>Category is missing.</span><br/>";
        }
        
        if(message.equals("")) {
        	missingFieldMsg += "<span style='color:red;'>Message is missing.</span><br/>";
        }
        
        if(!missingFieldMsg.equals("")) {
        	//
        	request.setAttribute("isErrMsgsPresent", true);//setting errorFlag to true
        	request.setAttribute("errMsgs", missingFieldMsg);//set error messages from missingFieldMsg
        	
    		RequestDispatcher requestDispatcher = request.getRequestDispatcher("contactform.jsp");
    		requestDispatcher.forward(request, response);//forward back to contact form        	
        }
        else{
        	String currDateTime = ZonedDateTime.now().format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy - h:mm:ss a zzzz"));
            request.setAttribute("currDateTime", currDateTime);
            
    		RequestDispatcher requestDispatcher = request.getRequestDispatcher("thankyou.jsp");
    		requestDispatcher.forward(request, response);
        }
	}

}
