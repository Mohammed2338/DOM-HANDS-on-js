let text=document.getElementById("text")
console.log(text.innerHTML)


let tag=document.getElementsByTagName("h2")
console.log(tag[0].innerHTML)


let box=document.getElementsByClassName("box")
console.log(box[0].innerHTML)


document.getElementById("replace").innerHTML = "Hello World";


let me=document.getElementById("me")
function replace(){
    me.innerText="Welcome to Elevation academy"
}

// Qno 6 Javascript
let st=document.getElementById("heading")

st.addEventListener('click',() =>{
    st.setAttribute('style','color:blue')
})
var head=document.getElementById("clock")
function clock(){
    let time= new Date();
    let hour=time.getHours();
    let mins=time.getMinutes();
    let secs=time.getSeconds();

    // let timezone= hour + ":" + mins + ":" + secs":";
    let timezone= `Hour ${hour} : Mins ${mins} : Secs ${secs}`

    head.innerText=timezone;
}
setInterval(clock,1000)



let parent=document.getElementById('parent')
let btn=document.getElementById('direction')
let count=0;
btn.addEventListener('click', () => {
if(count%2===0){
    parent.setAttribute('style','flex-direction:column');
    count++;
}
else{
    parent.setAttribute('style','flex-direction:row');
    count++; 
}

    
})


