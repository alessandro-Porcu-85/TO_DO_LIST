var form = document.getElementById("add-form");
var listItem = document.getElementById("list");


//--ADD ELEMENT TO THE LIST--//
form.addEventListener("submit", (e) => {
    e.preventDefault();

    var new_item = document.getElementById("item").value; //<---id of the HTML input ("item");
    //console.log(new_item);


    var li = document.createElement('li');
    li.className = "list-group-item";
    li.innerHTML = new_item;

    var button = document.createElement('button');
    button.className = "btn btn-danger float-right"; //<---button class of HTML
    button.innerHTML = "X";

    li.appendChild(button);
    listItem.appendChild(li); //<--append to the list

});


//--DELETE ELEMENT FROM LIST--//

listItem.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.classList.contains('btn')) {
        var li = e.target.parentElement;
        //console.log(li);

        listItem.removeChild(li);
    }
})