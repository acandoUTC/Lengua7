var resp2 = 0;
function veriRadio() {
    if ($("#radio1").prop("checked") == true) {
    	resp2 = 5;

    }else{
    	resp2 = 0;
    }
    $("#nt1_2").val(parseInt(resp2));
}

function ResolverN36() {
veriRadio();
var nota1 = document.getElementById("nt1_1").value;
    var nota2 = document.getElementById("nt1_2").value;
  
  if ((nota1 == "") || (nota2 == "")) {
        alert("Debe ingresar las notas para poder evaluar");
        document.getElementById("nt1_1").focus();
    } else {
        if ((nota1 <= 5) && (nota2 <= 5)) {
            var total = parseInt(nota1) + parseInt(nota2);
            document.getElementById("nt1_1").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt1_2").style.backgroundColor = "#6DFF6F";
            $('#txtNota').html(total.toFixed(2) + ' ');

            document.getElementById('bt_comprobar').disabled = true;
            document.getElementById('nt1_1').disabled = true;
            document.getElementById('nt1_2').disabled = true;
             $("input").prop('disabled', true);
        } else {
            alert('La nota no debe exceder los 5 puntos');
            document.getElementById("nt1_1").style.backgroundColor = "#F95858";
            document.getElementById("nt1_2").style.backgroundColor = "#F95858";
            document.getElementById("nt1_1").focus();
        }
    }


}