// Add Note

var btn = document.getElementById("add-btn");
var input = document.getElementById("add-input");
var ul = document.getElementById("list");

btn.addEventListener("click", function (e) {
    e.preventDefault();

    var li = document.createElement("li");
    var p = document.createElement("p");
    var p2 = document.createElement("p");
    var text = document.createTextNode(input.value);


    var i1 = document.createElement("i");
    i1.className = "fa fa-pencil-square-o";

    var i2 = document.createElement("i");
    i2.className = "fa fa-times";

    var i3 = document.createElement("input");
    i3.className = "edit-note";
    i3.setAttribute("type", "text");

    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(p2);
    p.appendChild(text);

    p2.appendChild(i1);
    p2.appendChild(i2);

    li.appendChild(i3);


    // console.log(ul);
});





// Hide Note

var hidenote = document.getElementById("hide");

hidenote.addEventListener("click", function () {

    var label = document.querySelector("label");

    if (hidenote.checked) {
        label.textContent = "Unhide notes";
        ul.classList = "changeD";
    }
    else {
        label.textContent = "Hide notes";
        ul.classList = "changeD1";
    }
});





// Remove

ul.addEventListener("click", function (e) {

    if (e.target.classList[1] === 'fa-times') {
        var re = e.target.parentNode.parentNode;
        re.parentNode.removeChild(re);
    }

    // console.log(e.target)
});




// Edit

ul.addEventListener("click", function (e) {

    if (e.target.classList[1] === 'fa-pencil-square-o') {
        var re1 = e.target.parentNode;
        re1.style.display = 'none';

        var ps = re1.previousElementSibling;
        var ns = re1.nextElementSibling;

        ns.style.display = 'block';
        ns.value = ps.textContent;

        ns.addEventListener("keypress", function (e) {

            if (e.keyCode === 13) {
                if (ns.value !== "") {
                    ps.textContent = ns.value;
                    re1.style.display = "block";
                    ns.style.display = "none";
                }
                else {
                    var li1 = ns.parentNode;
                    li1.parentNode.removeChild(li1);
                }
            }
        });
    }
    // console.log(re1.classList);
    // console.log(e.target);
    // console.log(ul);
    // console.log(re1);
    // console.log(ps);
    // console.log(ns);
});





// Search Note

var search = document.getElementById("searching");

search.addEventListener("keyup", function (e) {

    var input = document.getElementById('searching');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("list");
    var li = ul.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) {
        var p = li[i].getElementsByTagName("p")[0];
        var txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});




