/**
 * app.js
 */
"use strict";
window.onload = function() {
    let currentRowId = 2;
    const formNewAccount = document.querySelector("#formCourseReg");
    formNewAccount.addEventListener("submit", 
        event => {
            event.preventDefault();
            const txtStudentId = document.querySelector("#txtStudentId");
            const txtFullName = document.querySelector("#txtFullName");
            const txtdropdown1 = document.querySelector("#dropdown1");

            const strStudentId = txtStudentId.value;
            const strFullName = txtFullName.value;
            const strDD = txtdropdown1.value;

            addNewRegistrationDataRow(strStudentId, strFullName, strDD);
            txtStudentId.value = "";
            txtFullName.value = "";
            txtdropdown1.value = "";


            txtStudentId.focus();
    });
    const addNewRegistrationDataRow = function(studentId, fullName, course) {
        const tblRegistrations = document.querySelector("#tblRegistrations");

        // for (var i = 0, row; row = table.rows[i]; i++) {
        //     //iterate through rows
        //     //rows would be accessed using the "row" variable assigned in the for loop
        //     for (var j = 0, col; col = row.cells[j]; j++) {
        //       //iterate through columns
        //       //columns would be accessed using the "col" variable assigned in the for loop
        //       if(col == `${studentId}`){
        //           alert("Student ID exists");
        //       }
        //     }  
        //  }

        const newRow = tblRegistrations.insertRow(-1);
        const newCellRowId = newRow.insertCell(0);
        const strNewRowId = document.createTextNode(`${++currentRowId}.`);
        newCellRowId.appendChild(strNewRowId);
        const newCellStudentId = newRow.insertCell(1);
        const strNewRowStudentId = document.createTextNode(`${studentId}`);
        newCellStudentId.appendChild(strNewRowStudentId);
        const newCellFullName = newRow.insertCell(2);
        const strNewRowFullName = document.createTextNode(`${fullName}`);
        newCellFullName.appendChild(strNewRowFullName);
        const newCellDD = newRow.insertCell(3);
        const strDDCourse = document.createTextNode(`${course}`);
        newCellDD.appendChild(strDDCourse);
    }
}