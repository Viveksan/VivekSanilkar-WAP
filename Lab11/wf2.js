$(document).ready(function() {
    "use strict";

    let productArray = [];
     
    function NewProduct(productID,quantityId,nameID,supplierID,unitpriceID,supplieddateID){
        this.productID = productID;
        this.quantityId = quantityId;
        this.nameID = nameID;
        this.supplierID = supplierID;
        this.unitpriceID = unitpriceID;
        this.supplieddateID = supplieddateID;

    }
    
    $("#formSubmit").submit(
        event => {
            event.preventDefault();
            const productID = $("#productID").val();
            const quantityId = $("#quantityId").val();
            const nameID = $("#nameID").val();
            const supplierID = $("#supplierID").val();
            const unitpriceID = $("#unitpriceID").val();
            const supplieddateID = $("#supplieddateID").val();

            const newProduct = new NewProduct(productID,quantityId,nameID,supplierID,unitpriceID,supplieddateID);
            productArray.push(newProduct);

            let newDataRow = `<div>
            productID = ${productID}<br/>
             quantityId = ${quantityId}<br/>
             nameID = ${nameID}<br/>
             supplierID = ${supplierID}<br/>
             unitpriceID = ${unitpriceID}<br/>
             supplieddateID = ${supplieddateID}<br/>
             <hr>            
            </div>`;

            $("#productsList").append(newDataRow);



    });

    
});