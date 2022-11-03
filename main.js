var input =  document.querySelector("#input");
var button = document.querySelector("#btn");
var list = document.querySelector("#ul");
var listEmpty = document.querySelector("#empty");

button.addEventListener('click',function(){
    if(input.value != ""){
    var inputText = input.value;
    var li = document.createElement("li");
    li.innerHTML = inputText;
    list.appendChild(li);
    var createSpan = document.createElement("span");
    createSpan.innerHTML = "<strong>   Delete</strong>";
    li.appendChild(createSpan);
    function checkList(){
        return list.children.length;
    }
    createSpan.addEventListener('click',function(){
        li.remove();
        console.log(list.children.length);
        if (checkList() === 1){
            console.log("worked!");
            listEmpty.style.display = "block";
        }
    });
    input.value = "";
    if (checkList() > 1){
        // console.log("worked!");
        listEmpty.style.display = "none";
    }
    }
});

    
