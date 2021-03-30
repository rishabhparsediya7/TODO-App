function addData() {

    var thing = document.getElementById("todothings").value;

    var ul = document.getElementById("items");
    var li = document.createElement("li");
    li.className = "list-group-item";

    var deleteBtn = document.createElement("BUTTON");
    deleteBtn.className = "btn btn-danger delete";

    deleteBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(document.createTextNode(thing));
    li.appendChild(deleteBtn);
    ul.appendChild(li);

    document.getElementById("taskadded").innerHTML = "Text edited successfully";

    document.getElementById("taskadded")
        .style.display = "block";

    setTimeout(function() {
        document.getElementById("taskadded")
            .style.display = "none";
    }, 3000);

    deleteBtn.onclick = function() {
        ul.removeChild(li);
    }
}