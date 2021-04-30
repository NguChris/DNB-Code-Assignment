window.onload = function() {

    // Create FORM element
    var form = document.createElement("FORM");
    form.id = "myForm";
    form.name = "myForm";
    form.action = "";
    form.method = "post";
    document.body.appendChild(form);

    // Create "Credit card name" INPUT
    var btn = document.createElement("INPUT");
    var label = document.createElement("LABEL");
    var p = document.createElement("P");
    var span = document.createElement("SPAN");
    btn.type = "text";
    btn.name = "creditName";
    btn.placeholder = "Your name";
    btn.minLength = "5";
    btn.id = "name_on_card";
    label.innerHTML = "Credit Name: ";
    span.id = "creditNameError";
    document.getElementById("myForm").appendChild(label);
    document.getElementById("myForm").appendChild(btn);
    document.getElementById("myForm").appendChild(p);
    document.getElementById("myForm").appendChild(span);
    document.getElementById("myForm").appendChild(p);
    btn.required = true;

    // Create "Credit card number" INPUT
    var btn1 = document.createElement("INPUT");
    var label1 = document.createElement("LABEL");
    var p1 = document.createElement("P");
    var span1 = document.createElement("SPAN");
    btn1.type = "text";
    btn1.name = "creditNumber";
    btn1.placeholder = "XXXXXXXXXXXXXXXX";
    btn1.maxLength = "16";
    btn1.id = "card_number";
    label1.innerHTML = " Credit Number: ";
    span1.id = "creditNumError";
    document.getElementById("myForm").appendChild(label1);
    document.getElementById("myForm").appendChild(btn1);
    document.getElementById("myForm").appendChild(p1);
    document.getElementById("myForm").appendChild(span1);
    document.getElementById("myForm").appendChild(p1);
    btn1.required = true;

    // Create "CVV Number" INPUT
    var btn2 = document.createElement("INPUT");
    var label2 = document.createElement("LABEL");
    var p2 = document.createElement("P");
    var span2 = document.createElement("SPAN");
    btn2.type = "text";
    btn2.name = "cvvNumber";
    btn2.placeholder = "XXX";
    btn2.maxLength = "3";
    btn2.id = "cvv";
    label2.innerHTML = " CVV Number: "
    span2.id = "cvvNumError";
    document.getElementById("myForm").appendChild(label2);
    document.getElementById("myForm").appendChild(btn2);
    document.getElementById("myForm").appendChild(p2);
    document.getElementById("myForm").appendChild(span2);
    document.getElementById("myForm").appendChild(p2);
    btn2.required = true;

    // Create "Expiry Month" INPUT
    var btn3 = document.createElement("INPUT");
    var label3 = document.createElement("LABEL");
    var p3 = document.createElement("P");
    var span3 = document.createElement("SPAN");
    btn3.type = "text";
    btn3.name = "expiryMonth";
    btn3.placeholder = "MM";
    btn3.maxLength = "2";
    btn3.id = "expiry_month";
    label3.innerHTML = " Expiry month: ";
    span3.id = "expiryMonthError";
    document.getElementById("myForm").appendChild(label3);
    document.getElementById("myForm").appendChild(btn3);
    document.getElementById("myForm").appendChild(p3);
    document.getElementById("myForm").appendChild(span3);
    document.getElementById("myForm").appendChild(p3);
    btn3.required = true;

    // Create "Expiry Year" INPUT
    var btn4 = document.createElement("INPUT");
    var label4 = document.createElement("LABEL");
    var p4 = document.createElement("P");
    var span4 = document.createElement("SPAN");
    btn4.type = "text";
    btn4.name = "expiryYear";
    btn4.placeholder = "YYYY";
    btn4.maxLength = "4";
    btn4.id = "expiry_year";
    label4.innerHTML = " Expiry year: ";
    span4.id = "expiryYearError";
    document.getElementById("myForm").appendChild(label4);
    document.getElementById("myForm").appendChild(btn4);
    document.getElementById("myForm").appendChild(p4);
    document.getElementById("myForm").appendChild(span4);
    document.getElementById("myForm").appendChild(p4);
    btn4.required = true;

    // Credit "Card Type" selection 
    var btn5 = document.createElement("SELECT");
    var label5 = document.createElement("LABEL");
    btn5.type = "text";
    btn5.name = "cardType";
    btn5.placeholder = "Your card type";
    btn5.id = "cardType";
    label5.innerHTML = " Card Type: ";

    var array = ["Mastercard", "Visa"];
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("OPTION");
        option.value = array[i];
        option.text = array[i];
        btn5.appendChild(option);
    }

    document.getElementById("myForm").appendChild(label5);
    document.getElementById("myForm").appendChild(btn5);


    // OUTPUTS
    var h3 = document.createElement("H3");
    var p5 = document.createElement("P");
    var p6 = document.createElement("P");
    var p7 = document.createElement("P");
    var p8 = document.createElement("P");
    var p9 = document.createElement("P");
    h3.id = "headerOutput";
    p5.id = "output1";
    p6.id = "output2";
    p7.id = "output3";
    p8.id = "output4";
    p9.id = "output5";
    document.getElementById("myForm").appendChild(h3);
    document.getElementById("myForm").appendChild(p5);
    document.getElementById("myForm").appendChild(p6);
    document.getElementById("myForm").appendChild(p7);
    document.getElementById("myForm").appendChild(p8);
    document.getElementById("myForm").appendChild(p9);



    // BUTTON which will validate the input fields, and output the values if the input values are correct
    document.getElementById("submitButton").onclick = creditCardValidator;



    // Function used to validate the credit card info input
    function creditCardValidator() {
        var creditName = document.getElementById("name_on_card").value;
        var creditNum = document.getElementById("card_number").value;
        var cvvNum = document.getElementById("cvv").value;
        var creditMonth = document.getElementById("expiry_month").value;
        var creditYear = document.getElementById("expiry_year").value;
        var creditType = document.getElementById("cardType").value;

        var creditNameRex = /^[a-zA-Z ,.'-]{5,}$/;
        var creditNumRegex = /^[\d ]{16}$/;
        var cvvRegex = /^\d{3}$/;
        var regMonth = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
        var regYear = /^2022|2023|2024|2025|2026|2027|2028|2029|2030|2031|2032|2033|2034|2035|2036$/;


        if (!creditNameRex.test(creditName) || document.myForm.creditName.value == "") {
            document.getElementById("creditNameError").innerHTML = " You entered a invalid card name";
            document.getElementById("creditNameError").style.color = "#FF0000";
            return false;
        } else if (!creditNumRegex.test(creditNum) || document.myForm.creditNumber.value == "") {
            document.getElementById("creditNumError").innerHTML = " You entered a invalid card number";
            document.getElementById("creditNumError").style.color = "#FF0000";
            return false;
        } else if (!cvvRegex.test(cvvNum) || document.myForm.cvvNumber.value == "") {
            document.getElementById("cvvNumError").innerHTML = " You entered a invalid cvv number";
            document.getElementById("cvvNumError").style.color = "#FF0000";
            return false;
        } else if (!regMonth.test(creditMonth) || document.myForm.expiryMonth.value == "") {
            document.getElementById("expiryMonthError").innerHTML = " You entered a invalid expiry month";
            document.getElementById("expiryMonthError").style.color = "#FF0000";
            return false;
        } else if (!regYear.test(creditYear) || document.myForm.expiryYear.value == "") {
            document.getElementById("expiryYearError").innerHTML = " You entered a invalid expiry year";
            document.getElementById("expiryYearError").style.color = "#FF0000";
            return false;
        } else {
            document.getElementById("headerOutput").innerHTML = "Your credit card information: ";
            document.getElementById("headerOutput").style.color = "#32CD32"
            document.getElementById("output1").innerHTML = "<b>Credit Holder Name</b>" + ": " + creditName;
            document.getElementById("output2").innerHTML = "<b>Card Number</b>" + ": " + creditNum;
            document.getElementById("output3").innerHTML = "<b>CVV Code</b>" + ": " + cvvNum;
            document.getElementById("output4").innerHTML = "<b>Expiration Date</b>" + ": " + creditMonth + "/" + creditYear;
            document.getElementById("output5").innerHTML = "<b>Card Type</b>" + ": " + creditType;
            document.getElementById("creditNameError").innerHTML = "";
            document.getElementById("creditNumError").innerHTML = "";
            document.getElementById("cvvNumError").innerHTML = "";
            document.getElementById("expiryMonthError").innerHTML = "";
            document.getElementById("expiryYearError").innerHTML = "";
            return true;
        }
    }
}