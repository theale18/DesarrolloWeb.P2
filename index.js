document.getElementById("login").addEventListener("submit", function(event){
    event.preventDefault();

    var usuario = document.getElementById("user").value;
    var contra = document.getElementById("pass").value;
    
    if( usuario==="mirtita" && contra==="123" ){
        var url1 = "paciente.html?user=" +usuario;   /* LINK DE LA PAGINA */
        window.location.href = url1;

    } 
    else{
        if( usuario==="house" && contra==="123"){
            var url2 = "doctor.html?user=" +usuario;/* LINK DE LA PAGINA */
            window.location.href = url2;
        }
        else{
            alert("Usuario Incorrecto");
        }
    }
});