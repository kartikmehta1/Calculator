const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mult = (a,b)=> a*b;
//const div = (a,b) => a/b;
function div(a,b){
    if(b==0) return "ERROR"
    else return a/b
}
var exp = "";
var ab = document.getElementById('display');
function calculate(str)
{
    var num = "";
    var blocknum = [];
    let special = [];
    var j=0;
    var l=0;
    for (let i=0; i<str.length; i++)
    {
        (!isNaN(String(str[i]) * 1) || str[i]=='.') ? num+=str[i]
            :(special[j]=str[i], blocknum[j] = parseFloat(num), num="", j=j+1);
    }
    blocknum[j] = parseInt(num);
    for (l=0; l<blocknum.length; l++){                 
        if(special[l]=='+'){ blocknum[l+1] = add(blocknum[l],blocknum[l+1])}
        else if(special[l]=='-'){blocknum[l+1] = sub(blocknum[l],blocknum[l+1])}
        else if(special[l]=='*'){blocknum[l+1] = mult(blocknum[l],blocknum[l+1])}
        else if(special[l]=='/'){blocknum[l+1] = div(blocknum[l],blocknum[l+1])}
    }
    ab.innerText = (blocknum[l-1]);
    exp = ab.innerText;
}
function clicked(e){
    if(e.target.innerText == 'CE') {
        ab.innerText ="";
        exp="";
    }
    if(exp=="ERROR") return "ERROR"
    if(e.target.innerText == "back"){
        console.log('in');
        exp = exp.substring(0, exp.length - 1);
        ab.innerText = exp;
    }
    if(e.target.innerText!== 'back' && e.target.innerText!== '=' && e.target.innerText!=='CE' && (e.target.className=='number' || e.target.className=='column2' || e.target.className=='toprowbutton')){
        exp += e.target.innerText
        ab.innerText = exp; 
        }
    else if(e.target.innerText == '=') calculate(exp);
    
    
};
function typed(e){
    if(e.key == 'Escape') {
        ab.innerText ="";
        exp="";
    }
    if(exp=="ERROR") return "ERROR"
    if(e.key == "Backspace"){
        console.log('in');
        exp = exp.substring(0, exp.length - 1);
        ab.innerText = exp;
    }
    else {
        console.log(typeof(e.key));
        if(((e.key >= 0 && e.key <= 9 ) || e.key =='.'|| e.key =='+'||e.key=='-'||e.key=='*'||e.key=='/')){
            exp += e.key;
            ab.innerText = exp; 
        }
        else if(e.key == 'Enter') calculate(exp)
    }
}
window.addEventListener('click',clicked);
window.addEventListener('keydown',typed);

/*
Negative integer to start with error.
*/