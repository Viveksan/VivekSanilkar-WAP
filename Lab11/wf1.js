$(document).ready(function() {
    "use strict";

    function NewLoginID(email, password, checkbox){
        this.email = email;
        this.password = password;
        this.checkbox = checkbox;
    }

    $("#webform1").submit(
        event => {
            event.preventDefault();

            const email = $("#email").val();
            const password = $("#password").val();
            const checkbox = $("#checkbox").val();
           
            const newLoginID = new NewLoginID(email, password, checkbox);

            let newDataRow = `<div>            
            Email: ${email}<br/><br/>
            Password: ${password}<br/><br/>
            Checkbox: ${checkbox}<br/><br/>
            </div>`;

           // console.log(newPatient.toString());
            $("#divid").append(newDataRow);

        });

        // NewProduct.prototype.toString = function() {
        //     `{Email: ${this.email}, 
        //     Password: ${this.password}, 
        //     Checkbox: ${this.checkbox}
        //     }`;
        // };

});