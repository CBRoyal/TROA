function showAlert(alertId){
    setTimeout(() => {
        const messageAlert= document.querySelector("#", alertId);
        const collapse= new bootstrap.Collapse(messageAlert);
        collapse.show();
    }, 500);
}