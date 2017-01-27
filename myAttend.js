let productsList = [
  {
    id: 1,
    category: 'Sporting Goods',
    price: '49.99',
    qty: 12,
    name: 'football'
  }, {
    id: 2,
    category: 'Sporting Goods',
    price: '9.99',
    qty: 15,
    name: 'baseball'
  }, {
    id: 3,
    category: 'Sporting Goods',
    price: '29.99',
    qty: 14,
    name: 'basketball'
  }, {
    id: 4,
    category: 'Electronics',
    price: '99.99',
    qty: 34,
    name: 'iPod Touch'
  }, {
    id: 5,
    category: 'Electronics',
    price: '399.99',
    qty: 12,
    name: 'iPhone 5'
  }, {
    id: 6,
    category: 'Electronics',
    price: '199.99',
    qty: 23,
    name: 'nexus 7'
  }
];

const createHeader = () => {
  let headerStr="" //= "<thead><th>#</th>";
  headerStr+="<th>Name</th>";
  headerStr+="<th>Price</th>";
  headerStr+="<th>Quantity</th>";
  headerStr+="<th>Category</th>";
  return headerStr +"</thead>";
}
const buildTable = (list) => {
  document.write("<table class ='table table-bordered'>" + createHeader() + createRows(list) + "</table>");
}
//

let createRows=(lists)=>{
  let rowStr="<tbody class='chart' id='chart'>"
  for(let i=0; i<lists.length; i++)
  {
    //rowStr += "<tr><td>" + lists[i].id +"</td>";
    //rowStr += "<td>" + lists[i].name +"</td>";
    rowStr += "<td>" + "<input type='text' id='name' value="+lists[i].name +" onchange=this.value>" +"</td>";
    rowStr += "<td>" + "<input type='text' id='price' value="+lists[i].price +" onchange=this.value>" +"</td>";
    rowStr += "<td>" + "<input type='text' id='quantity' value="+lists[i].qty +" onchange=this.value>" +"</td>";
    rowStr += "<td>" + "<input type='text' id='category' value="+lists[i].category +" onchange=this.value>" +"</td>";
    rowStr += "</tr>"
  }
  // rowStr +="<tr>";
  // rowStr +="<td>  <button id='saveButton' type='button' class='btn btn-primary btn-block'>Save</button> </td>"
  // rowStr +="<td>  <button id='addButton' type='button' class='btn btn-info btn-block'  >Add</button> </td>"
  // rowStr +="<td>  <button id='deleteButton' type='button' class='btn btn-warning btn-block'>Delete</button> </td>"
  // rowStr += "</tr>";
  return rowStr + "</tbody>";
}

let createNewRow=()=>{


  let rowNew=document.createElement("tr");
  rowNew.setAttribute("id", "myTr");
  let l=productsList.length;
  //console.log(l);
  let ids=["name", "price", "quantity", "category"];


  //subCol.appendChild(l);
  for(let i=0; i<4; i++)
  {
    let  subCol = document.createElement("td");
    subCol.setAttribute("id", ids[i]);
    //console.log(ids[i]);
    let inpu = document.createElement("INPUT");
    subCol.appendChild(inpu);
    rowNew.appendChild(subCol);
  }

  document.getElementById("chart").appendChild(rowNew);

  // let l=productsList.length;
  // let newRow={l:"", category:"", price:"", qty:"", name:""};
  // productsList.push(newRow);
}
//console.log(document.getElementById("addButton"));
document.getElementById("addButton").addEventListener('click', createNewRow, false);


let saveClick = () => {
  let chart=document.getElementById("chart");
  let l=chart.rows.length;
  //console.log(l);

  for(let i=0; i<l; i++)
  {
    productsList[i].id=(i+1);
    productsList[i].name=chart.rows[i].cells[0].innerHTML;
    productsList[i].price=chart.rows[i].cells[1].innerHTML;
    productsList[i].qty=chart.rows[i].cells[2].innerHTML;
    productsList[i].category=chart.rows[i].cells[3].innerHTML;
  }
}
// let saveClick = () => {
	    // productsList[3].name='samsung';
		// console.log(productsList[3].name +"\n");
// }
let saveButton = document.getElementById("saveButton");
//console.log(saveButton);
saveButton.addEventListener("click", saveClick);



buildTable(productsList);




//onClick="createNewRow(productsList)"
//onClick='createNewRow(productsList)'

// let addButton = document.getElementById("bar").getElementsByTagName("addButton");
// console.log(addButton);
//
// if(addButton)
// {
//   addButton.addEventListener("click", createNewRow);
// }
//
// let saveButton = document.getElementById("saveButton");
// console.log(saveButton);
//
// if(saveButton)
// {
//   addButton.addEventListener("click", createNewRow);
// }

// let addClick = () => {
//   let addRow="<table id='prodTable'>"
//     addRow += "<tr><td>" + (productList.length+1)+"</td>";
//     addRow += "<td>" + "<input type='text' name='txt' value='' onchange=this.value>" +"</td>";
//     addRow += "<td>" + "<input type='text' name='txt' value='' onchange=this.value>" +"</td>";
//     addRow += "<td>" + "<input type='text' name='txt' value='' onchange=this.value>" +"</td>";
//     addRow += "<td>" + "<input type='text' name='txt' value='' onchange=this.value>" +"</td>";
//     addRow += "</tr>";
//   return addRow + "</table>";
// }
// let addButton = document.getElementById("addButton");
//
// addButton.addEventListener("click", addClick);
//
// const creatingRow = (data) => {
//   let rowString = "<tbody>";
//   for (let i = 0; i < data.length; i++) {
//     rowString += "<tr><td>" + data[i].name + "</td>";
//     for (let j = 0; j < data[i].aList.length; j++) {
//       if (data[i].aList[j] == false) {
//         rowString += "<td id='" + i + "," + j + "' onClick='cellClickFunction(this)' style = 'background-color:#FF5733'>Absent</td>";
//       } else
//         rowString += "<td  id='" + i + "," + j + "' onClick='cellClickFunction(this)' style = 'background-color:#33AFFF'>Present</td>";
//       }
//     rowString += "</tr>";
//   }
//   rowString += "</tbody>"
//   return rowString;
// }
