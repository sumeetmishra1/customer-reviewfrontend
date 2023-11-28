const reviewform=document.querySelector("#reviewform");
const searchform=document.querySelector("#searchform");
const company=document.querySelector("#company");
const pros=document.querySelector("#pros");
const cons=document.querySelector("#cons");
const rating=document.querySelector("#rating");
const reviewlist=document.querySelector("#reviewlist")
reviewform.addEventListener('submit',onSubmit);
searchform.addEventListener('submit',searchReview);
function onSubmit(e){
let myobj={
    name:company.value,
    pros:pros.value,
    cons:cons.value,
    rating:rating.value
}
e.preventDefault();
axios.post('http://localhost:3000/addrating',myoj)
.then(res=>{
    company.value="";
    pros.value="";
    cons.value="";
    rating.value="";
    console.log("Rating done");
})
.catch(err=>{
    console.log(err)
})
}
function searchReview(e){
    const review=searchname.value;
    e.preventDefault();
   axios.post(`http://localhost:3000/search/${review}`)
   .then()
   .catch(err=>console.log(err))
}
function showonscreen(obj){
    let name=obj.name;
    let pros=obj.pros;
    let cons=obj.cons;
    let rating=obj.rating;
    const childHtml=`<li  class="list-group-item" >Company name: ${name}</li>
    <li  class="list-group-item" >Pros: ${pros}</li><li  class="list-group-item" >Cons: ${cons}</li><li  class="list-group-item" >Rating: ${rating}</li>`
    reviewlist.innerHTML=reviewlist.innerHTML+childHtml;
}