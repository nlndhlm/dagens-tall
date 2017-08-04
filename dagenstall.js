var tall = 123;
var hundrere;
var tiere;
var enere;

var hundrere = Math.floor(tall / 100);
var tiere = Math.floor(tall / 10) - (hundrere * 10);
var enere = tall - ((hundrere * 100) + (tiere * 10));

function usynlig() {
    document.getElementById("valg").style.visibility = "hidden";
    document.getElementById("valgKnapp").style.visibility = "hidden";
    document.getElementById("dagenstall").innerHTML = tall;
    
}

function oppdater() {
    tall = document.getElementById("valg").value;
    document.getElementById("dagenstall").innerHTML = tall;
    tall = parseInt(tall);
    
    hundrere = Math.floor(tall / 100);
    tiere = Math.floor(tall / 10) - (hundrere * 10);
    enere = tall - ((hundrere * 100) + (tiere * 10));
    
    usynlig();
}

function restart() {
    location.reload();
}

var farge = "#55FA7B";
var farge2 = "white";

function naboTall() {  
    var nabo1 = tall - 1;
    var nabo2 = tall + 1;
    
    document.getElementById("nabotall").innerHTML ="Nabotallene er " + nabo1 + " og " + nabo2;
    document.getElementById("nabotall").style.backgroundColor = farge;
    
    usynlig();
}

function tverrSum() {
    var tverrs = hundrere + tiere + enere;
    
    document.getElementById("tverrsum").innerHTML = "Tverrsummen er " + tverrs;
    document.getElementById("tverrsum").style.backgroundColor = farge;
    
    usynlig();
    
}

function prod() {
    if (tall > 99) {
        var produkt = hundrere * tiere * enere;
    }
    if (tall < 10) {
        var produkt = enere;
    }
    if (tall < 100 && tall > 9) {
        var produkt = tiere * enere;
    }
        
    document.getElementById("produkt").innerHTML = "Produktet er " + produkt;
    document.getElementById("produkt").style.backgroundColor = farge;
    
    usynlig();
}

function utvidetForm() {
    
    if (tall > 99) {
        var utvidet = (hundrere * 100) + " + " + (tiere * 10) + " + " + enere;
    }
    if (tall < 10) {
        var utvidet = enere;
    }
    if (tall < 100 && tall > 9) {
        var utvidet = (tiere * 10) + " + " + enere;
    }
    
    document.getElementById("utvidetform").innerHTML = "Utvidet form: " + "<br>" + utvidet;
    document.getElementById("utvidetform").style.backgroundColor = farge;
    
    usynlig();
}

function halvpart() {
    var halv = (tall / 2);
	
	halv = halv.toString();
	
	halv = halv.replace("." , ",");
    
    document.getElementById("halvparten").innerHTML = "Halvparten er " + halv;
    
    document.getElementById("halvparten").style.backgroundColor = farge;
    
    usynlig();
}

function tvillingTall() {
    
    if (tall > 99) {
        var tvilling = (enere * 100) + (tiere * 10) + hundrere;
    }
    if (tall < 10) {
        var tvilling = enere;
    }
    if (tall < 100 && tall > 9) {
        var tvilling = (enere * 10) + tiere;
    }
    
    document.getElementById("tvillingtall").innerHTML = "Tvillingtallet er " + tvilling;
    document.getElementById("tvillingtall").style.backgroundColor = farge;
    
    usynlig();
}

function dobbelTall() {
    var dobbel = tall * 2;
    
    document.getElementById("detdobbelte").innerHTML = "Det dobbelte er " + dobbel;
    document.getElementById("detdobbelte").style.backgroundColor = farge;
    
    usynlig();
}

function parOdd() {
    if (enere % 2 == 0) {
        var parodd = "partall";
    }
        else {
            var parodd = "oddetall";
        }
    
    document.getElementById("partalloddetall").innerHTML = tall + " er et " + parodd;
    document.getElementById("partalloddetall").style.backgroundColor = farge;
    
    usynlig();
}