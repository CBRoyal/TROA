function showAlert(alertId){
    const messageAlert= document.querySelector("#", alertId);
    const collapse= new bootstrap.Collapse(messageAlert);
    collapse.show();
};
const modalYesButton= document.querySelector("#contact-modal .btn-primary");
modalYesButton.addEventListener("click", function(){
    const sendButton= document.querySelector("#help-button");
    sendButton.style.display= "none";
    showAlert("conf-success-alert");
});
const button = document.getElementById("openbtn");
const menu = document.getElementById("routes_of_america_tablet_and_phone_navbar_menu");
button.addEventListener("click", () =>{
    menu.classList.toggle("active");
});