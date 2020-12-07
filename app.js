var url="https://api.funtranslations.com/translate/minion.json"
var output=document.querySelector("#output");
var txtinput=document.querySelector("#input-text");
var btnTranslate=document.querySelector("#btn");
console.log("js connected");

function geturl(input){
    return url + "?" + "text=" + input
}
function errorHandler(error){
    console.log("error occured",error);
    alert("something went wrong! try again later");
}

function buttonclick(){
    var textinput=txtinput.value; //input value
    //calling server to get translated value
    fetch(geturl(textinput))
    .then(response => response.json())
    .then(json => console.log(json))
    console.log("translation done"); 
       /* var translatedOutput =json.contents.translated;
        output.innertext= translatedOutput; //output
        console.log("translation done"); 
    }) 
    .catch(errorHandler); */
};

btnTranslate.addEventListener("click",buttonclick)