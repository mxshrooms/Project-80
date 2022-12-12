
toppings = [];
function submit() {
    var Itemone = document.getElementById("item1").value;
    var Itemtwo = document.getElementById("item2").value;
    var Itemthree = document.getElementById("item3").value;
    var Itemfour = document.getElementById("item4").value;
    
    toppings.push(Itemone);
    toppings.push(Itemtwo);
    toppings.push(Itemthree);
    toppings.push(Itemfour);

    console.log(toppings);
    document.getElementById("suggestions").innerHTML=toppings;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort() {
    toppings.sort();
    console.log("toppings");
    document.getElementById("suggestions").innerHTML=toppings;
}
