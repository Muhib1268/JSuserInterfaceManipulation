let attendanceObject = {
  startDate: "june 7, 2014",
  endDateLength: 7,
  attendanceArray: [
    {
      name: "Ted",
      aList: [
        true,
        false,
        true,
        true,
        true,
        false,
        true
      ]
    }, {
      name: "John",
      aList: [
        false,
        false,
        true,
        true,
        true,
        false,
        true
      ]
    }, {
      name: "Dave",
      aList: [
        false,
        false,
        false,
        true,
        true,
        false,
        true
      ]
    }, {
      name: "Tom",
      aList: [
        true,
        true,
        true,
        true,
        true,
        true,
        true
      ]
    }, {
      name: "Mat",
      aList: [
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }, {
      name: "Gregory",
      aList: [
        true,
        false,
        false,
        false,
        false,
        false,
        true
      ]
    }

  ]
};
const saveClick = () => {
  save(data);
}
let saveButton = document.getElementById("saveButton");
//console.log(saveButton);
saveButton.addEventListener("click", saveClick);
let data = attendanceObject;
// const save = (data) => {
//   localStorage.setItem("data", JSON.stringify(data));
// }
// const getData = () => {
//   return JSON.parse(localStorage.getItem("data"));
// }
// // console.log(getData());
// if (getData() == null)
//   save(attendanceObject);
// else
//   data = getData();

console.log(data);
const createHeader = (data) => {
  let date = new Date(data.startDate);
  let headerStr = "<th>name</th>";
  for (let i = 0; i < data.endDateLength; i++) {
    let date2 = new Date(date.getTime() + (i * 24 * 60 * 60 * 1000));
    headerStr += "<th>" + date2.getDate() + "/" + date2.getMonth() + "/" + date2.getFullYear() + "</th>"

  }
  return headerStr;
}
const buildTable = (data) => {
  document.write("<table class ='table table-bordered'>" + createHeader(data) + createRows(data.attendanceArray) + "</table>");
}
const createRows = (data) => {
  let rowString = "<tbody>";
  for (let i = 0; i < data.length; i++) {
    rowString += "<tr><td>" + data[i].name + "</td>";
    for (let j = 0; j < data[i].aList.length; j++) {
      if (data[i].aList[j] == false) {
        rowString += "<td id='" + i + "," + j + "' onClick='cellClickFunction(this)' style = 'background-color:#FF5733'>Absent</td>";
      } else
        rowString += "<td  id='" + i + "," + j + "' onClick='cellClickFunction(this)' style = 'background-color:#33AFFF'>Present</td>";
      }
    rowString += "</tr>";
  }
  rowString += "</tbody>"
  return rowString;
}
const cellClickFunction = (evt) => {
  let namePair = evt.id.split(',');
  let td = document.getElementById(evt.id);
  if (td.style.backgroundColor == "rgb(51, 175, 255)") {
    data.attendanceArray[namePair[0]].aList[namePair[1]] = false;
    td.style.backgroundColor = "rgb(255, 87, 51)";
    td.innerHTML = "Absent";
  } else if (td.style.backgroundColor == "rgb(255, 87, 51)") {
    td.style.backgroundColor = "rgb(51, 175, 255)";
    td.innerHTML = "Present";
    data.attendanceArray[namePair[0]].aList[namePair[1]] = true;
  }

}

buildTable(data);
