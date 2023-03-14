let input = document.getElementById("input");
let price = document.getElementById("price");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
let mode = "create";
let temp;
// function get total
function gettotal() {
    if (price.value !== "") {
        let result = +price.value - +discount.value;
        total.innerHTML = result;
        total.style.background = "#040"
    }
}
// function create
let arr = [];
if (localStorage.data != null) {
    arr = JSON.parse(localStorage.data);
}else{
    let arr = [];
}
// function subment
submit.onclick = function() {
    let obj = {
        input : input.value, 
        price : price.value, 
        discount : discount.value, 
        total : total.innerHTML, 
        count : count.value,
        category : category.value
    };
    if (mode === "create") {
        if (obj.count > 1) {
            for (let i = 0; i < obj.count; i++) {
                arr.push(obj);   
            }
        }else{
            arr.push(obj);
        }  
    }else{
        data [temp] = obj 
        mode = "create";
        submit.innerHTML = "Create";
        count.style.display = "block"
    }
    localStorage.setItem("data", JSON.stringify(arr));
    showData();
    clear();
}
// function clear
function clear() {
    input.value = ""; 
    price.value = ""; 
    discount.value = ""; 
    total.innerHTML = ""; 
    count.value = "";
    category.value = "";
}
//function showData
function showData() {
    let table = ``;
    for (let i = 0; i < arr.length; i++) {
        table +=   `
        <tr>
        <td>${i+1}</td>
        <td>${arr[i].input}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].discount}</td>
        <td>${arr[i].total}</td>
        <td>${arr[i].category}</td>
        <td><button onclick="upDate(${i})"id="update">Update</button></td>
        <td><button onclick="deleteItem(${i})" id="delete">Soldout</button></td>
        </tr>
        `
        document.getElementById("tbody").innerHTML = table;
        let deleteAll = document.getElementById("deleteAll");
        if (arr.length > 0) {
            deleteAll.innerHTML = `
            <button id="deleteAll" onclick="deleteAll()">Delete All(${arr.length})</button>
            `
        }else{
            deleteAll.innerHTML = "";
        }
    }
};
showData();
// function deleteItem
function deleteItem(i) {
    arr.splice(i, 1);
    localStorage.data = JSON.stringify(arr);
    showData();
}
// function deleteAll
function deleteAll() {
    localStorage.clear();
    arr.splice(0);
    showData();
}
// function upDate
function upDate(i) {
    input.value = arr[i].input;
    price.value = arr[i].price;
    discount.value = arr[i].discount;
    total.innerHTML = arr[i].total;
    count.style.display = "none";
    category.value = arr[i].category;
    submit.innerHTML = "update";
    mode = "update";
    temp = i;
    scroll({
        top:0,
        behavior:"smooth"
    })
}
// function search
let searchMode = "title";
function getSearchMode(id) {
    if (id === "searchbyid") {
      searchMode = "title"
    }else{
      searchMode = "category"
    }  
}
function search(value) {
  let table = "";
  if (searchMode == "title") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].title.includes(value)) {
        table +=   `
        <tr>
        <td>${i+1}</td>
        <td>${arr[i].input}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].discount}</td>
        <td>${arr[i].total}</td>
        <td>${arr[i].category}</td>
        <td><button onclick="upDate(${i})"id="update">Update</button></td>
        <td><button onclick="deleteItem(${i})" id="delete">Soldout</button></td>
        </tr>
        `
      }
    }
  }else{
    
  }
  document.getElementById("tbody").innerHTML = table;
  showData();
}