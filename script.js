const reviewform=document.querySelector("#reviewform");
const searchform=document.querySelector("#searchform");
const company=document.querySelector("#company");
const pros=document.querySelector("#pros");
const cons=document.querySelector("#cons");
const rating=document.querySelector("#rating");
const reviewlist=document.querySelector("#reviewlist")
const ratings = document.getElementById('rating1');
    const rating1 = new CDB.Rating(ratings);
    rating1.getRating;
reviewform.addEventListener('submit',onSubmit);
searchform.addEventListener('submit',searchReview);
function onSubmit(e){
let myobj={
    name:company.value,
    pros:pros.value,
    cons:cons.value,
    rating:ratings.dataset.rating
}
e.preventDefault();
axios.post('http://localhost:3000/addreview',myobj)
.then(res=>{
    company.value="";
    pros.value="";
    cons.value="";
    console.log("Rating done");
})
.catch(err=>{
    console.log(err)
})
}
 function searchReview(e){
    removevefromscreen();
    const name=searchname.value;
    e.preventDefault();
   axios.get(`http://localhost:3000/getreview/${name}`)
   .then(res=>{
    for(let i=0;i<res.data.allReviews.length;i++){
        showonscreen(res.data.allReviews[i]);
    }
   })
   .catch(err=>console.log(err))
}
function showonscreen(obj){
    let name=obj.name;
    let pros=obj.pros;
    let cons=obj.cons;
    let rating=obj.rating;
    const childHtml=`<ul id="reviewitems" class="list-group mt-2 bg-light-subtle p-3"style="font-family: 'Times New Roman'">
    <h2>Company name: ${name}</h2>
    <h3>Pros: ${pros} </h3>
    <h3>Cons: ${cons}</h3>
    <h3>Rating: ${rating} <i class="bi bi-star-fill" style="color: cadetblue; font-size:2rem;"></i></h3>
</div>
</ul>`
    reviewlist.innerHTML=reviewlist.innerHTML+childHtml;
}
function removevefromscreen(){
    while(reviewlist.firstChild){
           reviewlist.removeChild(reviewlist.firstChild);
    }
}