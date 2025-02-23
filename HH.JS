// פונקציה ליצירת כפתורי יצירת קשר
function createContactButtons() {
    let container = document.getElementById("contact-container");
    
    // יצירת כפתור WhatsApp
    let whatsappButton = document.createElement("button");
    whatsappButton.innerText = "שלח הודעה ב-WhatsApp";
    whatsappButton.onclick = function() {
        window.open("https://wa.me/972500000000", "_blank"); // שנה למספר המתאים
    };
    container.appendChild(whatsappButton);
    
    // יצירת כפתור דוא"ל
    let emailButton = document.createElement("button");
    emailButton.innerText = "שלח דוא\"ל";
    emailButton.onclick = function() {
        window.location.href = "mailto:example@example.com"; // שנה לכתובת הרצויה
    };
    container.appendChild(emailButton);
    
    // יצירת כפתור טופס יצירת קשר
    let formButton = document.createElement("button");
    formButton.innerText = "מלא טופס יצירת קשר";
    formButton.onclick = function() {
        window.location.href = "contact_form.html"; // שנה לכתובת המתאימה
    };
    container.appendChild(formButton);
}

// קריאה לפונקציה לאחר טעינת הדף
window.onload = createContactButtons;

// הוספת אלמנט HTML לתצוגת הכפתורים
document.write('<div id="contact-container"></div>');
