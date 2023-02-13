const imgSelection = document.querySelector(".user-img");
const dataHead = document.querySelector(".data-head");
const infodata= document.querySelector(".data");
const icon = document.querySelector(".icon-container");
const changeUser = document.querySelector(".changeUser");
let userPassword,userCellNum,userAddress,userDOB,userEmail,userName;

 const  Userdata = async() =>
{
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();
   
   userImage = data.results[0].picture.large;
    imgSelection.setAttribute("src",userImage);
   userName = data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last;
   userEmail = data.results[0].email;
  let [year,month,day] = data.results[0].dob.date.split("-");
   userDOB = `${day.slice(0,2)}/${month}/${year}`
   userAddress = data.results[0].location.city+", "+data.results[0].location.country; 
   userCellNum = data.results[0].phone;
   userPassword = data.results[0].login.password;

   dataHead.textContent = "UserName";
   infodata.textContent = userName;

   icon.addEventListener("click",(event)=>
{
    let target = event.target.classList; 
   if(target.contains("img1"))
   {
    dataHead.textContent = "UserName";
    infodata.textContent = userName;
   }
   else if(target.contains("img2"))
   {
    dataHead.textContent = "Email Address";
    infodata.textContent = userEmail;
   }
   else if(target.contains("img3"))
   {
    dataHead.textContent = "Date Of Birth";
    infodata.textContent = userDOB;
   }
   else if(target.contains("img4"))
   {
    dataHead.textContent = "Address";
    infodata.textContent = userAddress;
   }
   else if(target.contains("img5"))
   {
    dataHead.textContent = "Cell Number";
    infodata.textContent = userCellNum;
   }
   else if(target.contains("img6"))
   {
    dataHead.textContent = "User Password";
    infodata.textContent = userPassword;
   }
})
  
}

Userdata();

changeUser.addEventListener("click",()=>
{
  Userdata();
  
})


