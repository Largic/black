let frcom;

console.log("txr");
function addblog(){
  let  blogTitle = document.getElementById('bName').value;
  let blogcontent = document.getElementById('bContent').value;
  console.log(blogTitle,blogcontent);
  data.push({name:blogTitle,content:blogcontent, comments:[
    { commenterName:"tamiz",comment:"my name is...."}
  ]});
  console.log(data);
 }
 let data = [
    {name:"dta1",content:"to be loaded and an hardcoded one", comments:[
        { commenterName:"veera",comment:"hi"},{ commenterName:"veera",comment:"hi"},
        { commenterName:"veera",comment:"hi"},{ commenterName:"veera",comment:"hi"}
    ]},
    {name:"dta2",content:"to be loaded and an hardcoded one", comments:[
        { commenterName:"ragul",comment:"hello"}
    ]},
    {name:"dta3",content:"to be loaded and an hardcoded one", comments:[
        { commenterName:"ajay",comment:"creat c,java"}
    ]}
];
data.push({name:"dta4",content:"to be loaded and an hardcoded one", comments:[
    { commenterName:"raj kumar",comment:"what is your name"}
]});
data.push({name:"data5",content:"raj send mail", comments:[
  { commenterName:"tamiz",comment:"my name is...."}
]});
data.push({name:"data6",content:"sarathi raspons mail", comments:[
  { commenterName:"vishnu",comment:"hi"},{ commenterName:"veera",comment:"hi"},
  { commenterName:"veera",comment:"hi"},{ commenterName:"veera",comment:"hi"}
]});


//document.getElementById("inner").innerHTML = x;  
// document.getElementById("content").innerHTML = data[0].content; 
// document.getElementById("title").innerHTML = data[0].name;
let shop = document.getElementById("total");
console.log(shop);
let generateshop = ()=>{
  return (shop.innerHTML=data.map((x)=>{

      let {name,content}=x;
      //let search=basket.find((x)=> x.id === id)  || [];
      return`<div class="blog" id="total">
      <h3 id="title">${name}</h3>
       <div id="content">
         ${content}
       </div>
       <div >
                <h5>COMMENTS
                  <button onclick="addcomment()">+</button>
                </h5>
                <div id ="dialog">
                    <input type = "text" id = "comName"
                    placeholder = "enter your name"/>
                    <textarea id="comcont" placeholder="comment Here"></textarea>
                    <button onclick="mergeComment()">COMMENT</button>
                    </div>
                ${x.comments.map((y)=>{
                  console.log(y);
          let {commenterName,comment} = y;
          console.log(commenterName,comment);
                  return`
                <div id = "comment">
                    <h6>${commenterName}</h6>
                    <p>${comment}</p>
                 </div>`}).join("")}
               </div>
    </div>`
  }).join(""));
};
generateshop();



function addcomment(){
   document.getElementById('dialog').style.display = "block";
  
 }
   
 function mergeComment(){
  let name =document.getElementById('comName').value;
  let cont = document.getElementById('comcont').value;
  console.log(name,cont);
  data.map((x)=>{
    x.comments.push({ commenterName:name,comment:cont});
    console.log(x.comments);
  })
  console.log(data);
 }
//   window.onload = function(){
//     let domgen = () =>{
//       return`<div class="blog" id="total">
//       <h3 id="title"></h3>
//        <div id="content">
         
//        </div>
//        <div >
//                 <h5>COMMENTS
//                   <button onclick="">+</button>
//                 </h5>
                
                
//                </div>
//     </div>`
//     }
//     domgen();
//   }
// let commentbox = document.getElementById('comment');

//     let disComment = ()=>{
//       console.log(data)
//       console.log(commentbox);
//       //iterate map here to get data then iterate the comments alone
//       data.map((x)=>{
//         console.log(x.comments);
//         let {name,content}=x;
//         return (commentbox.innerHTML=x.comments.map((y)=>{
          
          
//           console.log(y);
//           let {commenterName,comment} = y;
//           console.log(commenterName,comment);
         
//           return`
//           <div class="blog" id="total">
//       <h3 id="title">${name}</h3>
//        <div id="content">
//          ${content}
//        </div>
//               <h6>${commenterName}</h6>
//               <p>${comment}</p>
//          `;
//       }).join(""));
//       })
      
//     };
//     //disComment();
    








// console.log(transfered);
// let sepArray = transfered[1];
// let splitval = sepArray.indexOf("comments");
// let combox = sepArray.slice(splitval-1);
// console.log(combox);



// let filtered = data.filter((x)=> x.name === nam);
// console.log(filtered);
// console.log(x);

// [{"name":"dta1","content":"to be loaded and an hardcoded one",
// "comments":[{"commenterName":"nameod","comment":"check the data"}]},
// {"name":"dta2","content":"to be loaded and an hardcoded one",
// "comments":[{"commenterName":"nameod","comment":"check the data"}]},
// {"name":"dta3","content":"to be loaded and an hardcoded one",
// "comments":[{"commenterName":"nameod","comment":"check the data"}]}]

