//Q1
var array = [34,45,65,23,5,676,32,34]
var target= 66;
var flag=flase;
for( var i=0;i<array.length;i++){
    for ( var j=i+1; j<array.length;j++){
        if(array[i]+array[j]===target){
                flag=true;
        }
        if(flag===true){
                console.log(array[i],array[j])
        }
        else{
            console.log("Number Not Found")
        }
    }
}







//Q2
var start = 5768;
var end = 78656;
var count=0;
 for( var i=0; i<start.length;i++){
   for(var j=i+1; j<start.length;j++){
    if(array[i]+array[j]){
        count++
    }

   }
 } 
 console.log(count)

//Q3
 var number = 19;
 var array = [3,5,79,45,0,-67,23,77,19,78,12]

 var flag=false;
 for(var i=0; i<array.length;i++ ){
    if(array[i]===number){
        flag=true;
    }
    if(flag===true){
        console.log("Number Found")
    }
    else{
        console.log("Not Found")
    }

 }

 //Q4
  
 var array = [34,45,567,78,89,34,78,89]
 var obj={};
 var flag=false;
 for(var i=0; i<array.length;i++){
    if(array[i]===obj){
        flag=true
    }
    if(flag===true){

    }

 }
