document.addEventListener('keydown' , (e)=>{
    const keyName=document.querySelector("div >h1>span");
    keyName.innerText=e.key;
    const keyNo=document.querySelector("#key-no");
    keyNo.innerText=e.keyCode;
    keyNo.style .border="5px solid rgba(58, 55, 55, 0.321)";
    
    keyName.style .color="#08df13";
})