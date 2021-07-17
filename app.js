var male = document.getElementById("male")
var female = document.getElementById("female")
var au = document.getElementById("au")
var br = document.getElementById("br")
var ca = document.getElementById("ca")
var ch = document.getElementById("ch")
var de = document.getElementById("de")
var gb = document.getElementById("gb")
var dk = document.getElementById("dk")
var es = document.getElementById("es")
var fi = document.getElementById("fi")
var fr = document.getElementById("fr")
var ie = document.getElementById("ie")
var ir = document.getElementById("ir")
var no = document.getElementById("no")
var nl = document.getElementById("nl")
var nz = document.getElementById("nz")
var tr = document.getElementById("tr")

const btn = document.querySelector("#button");
function buttonClick() {
    
    let genderValue;
    let countryValue;
    const genderName = document.querySelectorAll('input[name="gender"]');
    const countryName = document.querySelectorAll('input[name="country"]');
    for(const rb of genderName){
        if(rb.checked){
            genderValue = rb.value;
            break;
        }
    }
    for(const br of countryName){
        if(br.checked){
            countryValue = br.value;
            break;
        }
    }
    countryValue == String(countryValue)
    countryValue = countryValue.toUpperCase();
    console.log(genderValue)
    console.log(countryValue)
    console.log('https://randomuser.me/api/?gender=male&?nat=' + countryValue)
    if(genderValue == "male"){
        $.ajax({
            url: 'https://randomuser.me/api/?gender=male&?nat=' + countryValue,
            dataType: 'json',
            success: function(data) {
              console.log(data);
            }
          });
    }
    else if(genderValue == "female"){
        $.ajax({
            url: 'https://randomuser.me/api/?gender=female&?nat=' + countryValue,
            dataType: 'json',
            success: function(data) {
              console.log(data);
            }
          });
    }
}
