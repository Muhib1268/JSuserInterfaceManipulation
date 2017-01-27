function flip() {
    var onbulb = 'light_on.png';
    var offbulb = 'light_off.jpeg';
    document.getElementById("myImg").src = (document.getElementById("myImg").src ===offbulb) ? onbulb : offbulb;

}
document.getElementById("button").addEventListener('click', flip, false);


// function myFunction() {
//     var x = document.createElement("IMG");
//     x.setAttribute("src", "img_pulpit.jpg");
//     x.setAttribute("width", "304");
//     x.setAttribute("width", "228");
//     x.setAttribute("alt", "The Pulpit Rock");
//     document.body.appendChild(x);
// }
//
// function myFunction() {
//     var x = document.getElementById("myImg").src;
//     document.getElementById("demo").innerHTML = x;
// }
//
// function rndEl(){
//     return arr[~~(rnd()*arr.length)];
// }
//
//
// function rndTx(){
//     var tx = rndEl();
//     var txt = document.createTextNode(tx);
//     var sp = document.createElement('span');
//     sp.appendChild(txt);
//     de.innerHTML = '';
//     de.appendChild(sp).style.color = tx;
// }
// rnd = Math.random;
// arr = ['red', 'orange', 'yellow', 'green', 'blue'];
// de = document.getElementById('de');
// document.getElementById("button").addEventListener('click',rndTx,false);
