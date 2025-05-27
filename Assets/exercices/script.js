// Verifier la disponibité d'un pseudo lors de l'insription.
const bitcoin = document.getElementById('bitcoin');
const ip = document.getElementById('ip');
const local_ip = document.getElementById('local-ip');

// Date.
let x = setInterval(function() {
    document.getElementById("date").innerHTML = Date()}, 1000);

// Bitcoin
let y = setInterval(function BitcoinNow() {
    let ajax = new XMLHttpRequest();
    ajax.onload = function() { bitcoin.innerHTML = ajax.responseText }
    ajax.ontimeout = function(){
        console.log("An error occurred.");
        setTimeout("getCours()", 5000);
        data.append()
    }
    let url="https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR";
    ajax.open("GET", url, true);
    ajax.send();
}, 3000);

// Addresse IP.
let z = setInterval( function GetIP() {
    var ajax = new XMLHttpRequest();
    ajax.onload = function() { ip.innerHTML = ajax.responseText }
    var url="https://www.toutjavascript.com/api/get-my-ip.php";
    ajax.open("GET", url, true);
    ajax.send();
}, 1000)

// Faire une requete local.
async function LocalIP() {
    try {
        const url = "local-ip.php"
        const response = await fetch(url);
        if (response.status === 200) {
            throw new Error(`Response status: ${response.status}`);
        }
        local_ip.innerHTML = await response.json();
        console.log(local_ip.innerHTML)
    } catch (error) {
        console.log(error);
    }
}

async function getCours() {

    await LocalIP();
}