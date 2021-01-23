
function wait(delay) {
     var start = new Date().getTime();
     while (new Date().getTime() < start + delay);
   }


function add_level(house, num){
    for (i=0; i < house[0].value; i++) {
        var ground = document.querySelector(".house_image_box_"+num);
        var elem = document.createElement("img");
        elem.setAttribute("src", "images/new_level.png");
        elem.setAttribute("class", "levels");
        elem.setAttribute("alt", "Level");
        ground.style.marginTop = -40*i + "px";
        document.getElementById("level_box_"+num).appendChild(elem);
    }
    return true;
}

 function sunsetHills(){
    var housesizes_1 = document.getElementsByClassName("house-size_1");
    var housesizes_2 = document.getElementsByClassName("house-size_2");
    var housesizes_3 = document.getElementsByClassName("house-size_3");
    var housesizes_4 = document.getElementsByClassName("house-size_4");
    var housesizes_5 = document.getElementsByClassName("house-size_5");
    var housesizes_6 = document.getElementsByClassName("house-size_6");

    var dict = {};
    dict["house_image_box_1"] = housesizes_1[0].value
    dict["house_image_box_2"] = housesizes_2[0].value
    dict["house_image_box_3"] = housesizes_3[0].value
    dict["house_image_box_4"] = housesizes_4[0].value
    dict["house_image_box_5"] = housesizes_5[0].value
    dict["house_image_box_6"] = housesizes_6[0].value

    array_house = [housesizes_1[0].value,housesizes_2[0].value, housesizes_3[0].value,housesizes_4[0].value,housesizes_5[0].value,housesizes_6[0].value]
    array_house_check = array_house
    sunset_array = []
    count = 1
    currentMax = array_house[0]
    sunset_array.push(currentMax)

    // Sonne von links
    for (i=0; i < array_house.length; i++){
        if (array_house[i] > currentMax){
            count++;
            sunset_array.push(array_house[i]);
            currentMax = array_house[i];
        }
    }

for (var key in dict){
    var value = dict[key]
    for (i=0; i < sunset_array.length; i++){
        if (sunset_array[i] == value){
            var tmp_house = document.getElementsByClassName(key)[0];
            // tmp_house.style.boxShadow = "-1px -1px #f8dc08";



            tmp_house.style.webkitBoxShadow= "-6px -10px 7px 0px rgba(250,242,222, 0.45)";
            tmp_house.style.mozBoxShadow=    "-6px -10px 7px 0px rgba(250,242,222, 0.45)";
            tmp_house.style.boxShadow=       "-6px -10px 7px 0px rgba(250,242,222, 0.45)";
            // var sleep = new wait(1000);
            // console.log(tmp_house)
        }
    }
    }
 
    add_level(housesizes_1, 1);
    add_level(housesizes_2, 2);
    add_level(housesizes_3, 3);
    add_level(housesizes_4, 4);
    add_level(housesizes_5, 5);
    add_level(housesizes_6, 6);
}