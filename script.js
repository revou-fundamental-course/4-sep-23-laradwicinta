function hitungLuasDanKeliling() {

    var sisi = parseFloat(document.getElementById("sisi").value);

    if (!isNaN(sisi)) {

        var luas = sisi * sisi;
        var keliling = 4 * sisi;

        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Luas: " + luas + " satuan persegi²" + "<br>Keliling: " + keliling + " satuan persegi";
    } else {
        alert("Masukkan panjang sisi yang valid.");
    }
}

function resetUlang() {

    var sisiInput = document.getElementById("sisi");

    sisiInput.value = "";

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
}