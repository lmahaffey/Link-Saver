const inputValue=document.querySelector("#input-el")
const inputSaveBtn=document.querySelector("#input-btn")
const tabSaveBtn=document.querySelector("#tab-btn")
const dltBtn=document.querySelector("#delete-btn")
const linkList=document.querySelector("#ul-el")
const localArr=JSON.parse(localStorage.getItem("myLeads"))


let myArr=[]
if(localArr){
    myArr=localArr;
    render(myArr)
}

tabSaveBtn.addEventListener("click",function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myArr.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myArr))
    render(myArr)

    })
})

inputSaveBtn.addEventListener("click",function(){
    myArr.push(inputValue.value);
    inputValue.value=""
    localStorage.setItem("myLeads",JSON.stringify(myArr))
render(myArr)
  
})
dltBtn.addEventListener("dblclick",function(){
    myArr=[]
    localStorage.clear();
    render(myArr)
   
})



function render(arr){
    let a=""
    for(let i=0; i<arr.length;i++){
        a+=`<li><a href="${arr[i]}"target="_blank">${arr[i]}</a></li>`
    }

    linkList.innerHTML=a;
}