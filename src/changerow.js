//click event on button control inside #table
$('#table').on('click', 'button', function () {
row.child( GetHtml( obj ) ).show();
}

//template for new row
function GetHtml( obj ) {
   return '<table id="'+ id +'"><tr><td>'+ obj.some_value +'</td></tr>' +    '</table>';
}

$(document).ready(function() {
    $('#example').dataTable();
    $('#addbtn').click(addrow);
} );

function addrow() {
    $('#example').dataTable().fnAddData( [
        $('#fname').val(),
        $('#lname').val(),
        $('#email').val() ] );

}
//you need to call the addrow() in the button click.
let rowNew=document.createElement("tr");
rowNew.setAttribute("id", "myTr");
let l=productsList.length;
let subCol0 = document.createElement("td");
subCol0.setAttribute("id", l);
let subCol1 = document.createElement("td");
subCol1.setAttribute("id", "name");
let subCol2 = document.createElement("td");
subCol2.setAttribute("id", "price");
let subCol3 = document.createElement("td");
subCol3.setAttribute("id", "quantity");
let subCol4 = document.createElement("td");
subCol4.setAttribute("id", "category");

document.getElementById(l).appendChild(subCol1);
document.getElementById("myTr").appendChild(subCol);
document.getElementById("prodTable").appendChild(rowNew);




let rowNew=document.createElement("tr");
rowNew.setAttribute("id", "myTr");
let l=productsList.length;
console.log(l);
let ids=[l,"name", "price", "quantity", "category"];

for(var i=0; i<5; i++)
{
  let subCol = document.createElement("td");
  subCol.setAttribute("id", ids[i]);
  console.log(ids[i]);
  let inpu = document.createElement("INPUT");
  subCol.appendChild(inpu);
  rowNew.appendChild(subCol);
}
document.getElementById("tbody").appendChild(rowNew);
