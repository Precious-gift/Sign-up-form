let x = document.getElementById('claim');
let f = document.getElementById('first');
let l = document.getElementById('last');
let e = document.getElementById('email');
let p = document.getElementById('password');

let nameFormat = /[A-Za-z]/gi;
let mailFormat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi;
let pwFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/gi;

let fc = document.getElementById('confirm');
let sc = document.getElementById('confirm1');
let tc = document.getElementById('confirm2');
let fhc = document.getElementById('confirm3');

function myFunction() {
    if (f.value.match(nameFormat)) {
        fc.innerHTML = "";
    } else { 
        fc.style.display = "block";
        fc.style.fontSize = "12px";
        fc.style.textAlign = "right";
        fc.style.color = "hsl(0, 100%, 74%)";
        fc.style.fontStyle = "italic";
        fc.style.margin = "0px";
        fc.style.padding = "0px";
        f.style.marginBottom = "0px";
        f.style.border = "2px solid hsl(0, 100%, 74%)";
        f.style.backgroundImage = "url('images/icon-error.svg')";
        f.style.backgroundRepeat = "no-repeat";
        f.style.backgroundPositionX = "95%";
        f.style.backgroundPositionY = "center";
        l.style.marginTop = "10px";
        fc.innerHTML = "First name cannot be empty";
    }

    if (l.value.match(nameFormat)) {
        sc.innerHTML = "";
    } else { 
        sc.style.display = "block";
        sc.style.fontSize = "12px";
        sc.style.textAlign = "right";
        sc.style.color = "hsl(0, 100%, 74%)";
        sc.style.fontStyle = "italic";
        sc.style.margin = "0px";
        sc.style.padding = "0px";
        l.style.marginBottom = "0px";
        l.style.border = "2px solid hsl(0, 100%, 74%)";
        l.style.backgroundImage = "url('images/icon-error.svg')";
        l.style.backgroundRepeat = "no-repeat";
        l.style.backgroundPositionX = "95%";
        l.style.backgroundPositionY = "center";
        e.style.marginTop = "10px";
        sc.innerHTML = "Last name cannot be empty";
    }

    if (e.value.match(mailFormat)) {
        tc.innerHTML = "";
    } else { 
        tc.style.display = "block";
        tc.style.fontSize = "12px";
        tc.style.textAlign = "right";
        tc.style.color = "hsl(0, 100%, 74%)";
        tc.style.fontStyle = "italic";
        tc.style.margin = "0px";
        tc.style.padding = "0px";
        e.style.marginBottom = "0px";
        e.style.border = "2px solid hsl(0, 100%, 74%)";
        e.style.backgroundImage = "url('images/icon-error.svg')";
        e.style.backgroundRepeat = "no-repeat";
        e.style.backgroundPositionX = "95%";
        e.style.backgroundPositionY = "center";
        p.style.marginTop = "10px";
        tc.innerHTML = "Looks like this is not an email";
    }

    if (p.value.match(pwFormat)) {
        fhc.innerHTML = "";
    } else { 
        fhc.style.display = "block";
        fhc.style.fontSize = "12px";
        fhc.style.textAlign = "right";
        fhc.style.color = "hsl(0, 100%, 74%)";
        fhc.style.fontStyle = "italic";
        fhc.style.margin = "0px";
        fhc.style.padding = "0px";
        p.style.marginBottom = "0px";
        p.style.border = "2px solid hsl(0, 100%, 74%)";
        p.style.backgroundImage = "url('images/icon-error.svg')";
        p.style.backgroundRepeat = "no-repeat";
        p.style.backgroundPositionX = "95%";
        p.style.backgroundPositionY = "center";
        x.style.marginTop = "10px";
        fhc.innerHTML = "Password name cannot be empty";
    }
}

x.addEventListener('click', myFunction)