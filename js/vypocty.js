let krychle = {
    a: 0,
    objem: function(a) { return Math.pow(a, 3); },
    povrch: function(a) { return 6 * Math.pow(a, 2); }
};

let kvadr = {
    a: 0, 
    b: 0, 
    c: 0,
    objem: function(a, b, c) { return a * b * c; },
    povrch: function(a, b, c) { return 2 * (a*b + a*c + b*c); }
};

let jehlan = {
    a: 0, 
    vyska: 0,
    objem: function(a, vyska) { return (1/3) * Math.pow(a, 2) * vyska; },
    povrch: function(a, vyska) { return Math.pow(a, 2) + 2 * a * Math.sqrt(Math.pow(a/2, 2) + Math.pow(vyska, 2)); }
};

let hranol = {
    a: 0, 
    vyska: 0,
    objem: function(a, vyska) { return Math.pow(a, 2) * vyska; },
    povrch: function(a, vyska) { return 2 * Math.pow(a, 2) + 4 * a * vyska; }
};

let koule = {
    r: 0,
    objem: function(r) { return (4/3) * Math.PI * Math.pow(r, 3); },
    povrch: function(r) { return 4 * Math.PI * Math.pow(r, 2); }
};

document.getElementById("krychleBtn").addEventListener("click", function() {
    krychle.a = Number(document.getElementById("krychle-a").value);

    document.getElementById("krychle-objem").innerText = krychle.objem(krychle.a).toFixed(2);
    document.getElementById("krychle-povrch").innerText = krychle.povrch(krychle.a).toFixed(2);
});

document.getElementById("kvadrBtn").addEventListener("click", function() {
    kvadr.a = Number(document.getElementById("kvadr-a").value);
    kvadr.b = Number(document.getElementById("kvadr-b").value);
    kvadr.c = Number(document.getElementById("kvadr-c").value);

    document.getElementById("kvadr-objem").innerText = kvadr.objem(kvadr.a, kvadr.b, kvadr.c).toFixed(2);
    document.getElementById("kvadr-povrch").innerText = kvadr.povrch(kvadr.a, kvadr.b, kvadr.c).toFixed(2);
});

document.getElementById("jehlanBtn").addEventListener("click", function() {
    jehlan.a = Number(document.getElementById("jehlan-a").value);
    jehlan.vyska = Number(document.getElementById("jehlan-vyska").value);

    document.getElementById("jehlan-objem").innerText = jehlan.objem(jehlan.a, jehlan.vyska).toFixed(2);
    document.getElementById("jehlan-povrch").innerText = jehlan.povrch(jehlan.a, jehlan.vyska).toFixed(2);
});

document.getElementById("hranolBtn").addEventListener("click", function() {
    hranol.a = Number(document.getElementById("hranol-a").value);
    hranol.vyska = Number(document.getElementById("hranol-v").value);

    document.getElementById("hranol-objem").innerText = hranol.objem(hranol.a, hranol.vyska).toFixed(2);
    document.getElementById("hranol-povrch").innerText = hranol.povrch(hranol.a, hranol.vyska).toFixed(2);
});

document.getElementById("kouleBtn").addEventListener("click", function() {
    koule.r = Number(document.getElementById("koule-r").value);

    document.getElementById("koule-objem").innerText = koule.objem(koule.r).toFixed(2);
    document.getElementById("koule-povrch").innerText = koule.povrch(koule.r).toFixed(2);
});
