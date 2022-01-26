fruits="mango/cherries/kiwi/grapes/pear/peach/orange/lemon";



document.write(fruits.split("/").join("<br><br>"));

fruitsarray = fruits.split("/");


for(let i = 0; i < fruitsarray.length; i++){
    console.log(fruitsarray[i])
}


