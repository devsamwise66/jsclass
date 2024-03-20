
var cart = [];

if (cart.length == 0) {
  bigDiv.style.display = "block";
  bigDiv.innerHTML = `
                <p class="alert alert-danger text-center p-2">No items added yet</p>
            `;
}
function submitItem() {
  if (items.value === "") {
    errorMsg.style.display = "block";
  } else {
    bigDiv.style.display = "none";
    errorMsg.style.display = "none";
    bigShow.style.display = "block";
    cart.push(items.value);
    console.log(cart);
    document.getElementById("items").value = "";
    displayItem();
  }
}

//  DELETE ALL ITEM FUNCTION
function delAll() {
  var confirmation = confirm(
    "Are you sure you want to delete. This action is irreversible"
  );
  console.log(confirmation);
  if (confirmation === true) {
    cart.splice(0, cart.length);
    displayItem();
  }
}

//  DELETE EACH ITEM FUNCTION
function deleteItem(detlItem) {
  cart.splice(detlItem, 1);
  displayItem();
}

//  EDIT EACH ITEM FUNCTION
editItem.value = " ";
function editItem(idx) {
  console.log(idx);
  if(editInput.value){
    if (editInput.value == ""){
        errorFirst.style.display = "block";
    } else{
        // closeModal.style.display = "none"
        errorFirst.style.display = "none";
        cart.splice(idx, 1, editInput.value);
        displayItem();
    }
  }
}

let cartIndex 

function getIndex(idx) {
  cartIndex = idx
}

function onSubmit(){
  editItem(cartIndex)
}

function displayItem() {
  show.innerHTML = "";
  cart.map((goods, i) => {
    show.innerHTML += `
            <tr >
                <th scope="row">${i + 1}</th>
                <td>${goods}</td>
                <td>
                    <button type="button" id="edit${i}" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  onclick="getIndex(${i})">
                    EDIT
                    </button> 
                    <button class="btn btn-danger" onclick="deleteItem(${i})">DELETE</button> 
                </td>
            </tr>
                    `;
  });
}
