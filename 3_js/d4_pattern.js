// I
let num = 5;

for(let i=1;i<=num;i++){
    // console.log(i+" * * * * *");
    let pattern = "";
    if(i==1 || i==num){
        for(let j=1;j<=num;j++){
            pattern = pattern + "* ";
        }
    } else {
        // pattern = pattern + ". ";
        for(let z = 1;z<num/2;z++){
            pattern = pattern + "  ";
        }
        pattern = pattern + "* ";
    }
    console.log(i+" "+pattern);
}