




/* CRUD OPERATIONS STARTS HERE */

/* GET METHOD */
let fetchData = async () => {
  let url = 'http://localhost:3000/movieTicket'; // JSON URL

  try {
      let dataStore = await fetch(url, { method: "GET" }); // Fetch data
      let dataTranslate = await dataStore.json(); // Convert to JSON

      console.log(dataTranslate);

      // Statement for showing data in the HTML structure
      let table = document.querySelector("#table");
      // Applied foreach method for accessing each data from json file
      dataTranslate.forEach((e) => {
          table.innerHTML += `
           
         <thead id="thead" >
        <tr class="headkey">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Persons</th>
          <th>Date</th>
          <th>Contact</th>
          <th>Meals</th>
          <th>Seat</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr class="headvalue">
             <td>${e.firstname}</td>
             <td> ${e.lastname}</td>
             <td> ${e.age} </td>
             <td> ${e.person} </td>
             <td> ${e.date} </td>
             <td> ${e.contact} </td>
             <td> ${e.meals} </td>
             <td> ${e.seat} </td>
             <td> ${e.price} </td>
             <td onclick="update('${e.id}')"> Edit </td>
             <td onclick="confirmcancel('${e.id}')"> Cancel </td>
        </tr>
      </tbody>

          `;
      });
  } catch (error) {
      console.error("Error 404 Not Found:", error);
  }
};


/* PUT METHOD */
let insert=()=>{

let firstname = document.querySelector("#fullname").value
let lastname = document.querySelector("#lastname").value
let age = document.querySelector("#age").value
let person = document.querySelector("#person").value
let date = document.querySelector("#date").value
let contact = document.querySelector("#contact").value
let meals = document.querySelector("#meals").value
let seat = document.querySelector(".seat")
let price = document.querySelector(".price")

let url = 'http://localhost:3000/movieTicket'   // json url

 fetch(url,{
    
    method:"POST",
    
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(   // converting body content into strings

      { // Post through key value pair to json 
        "firstname":firstname,
        "lastname":lastname,
        "person":person,
        "age":age,
        "date":date,
        "contact":contact,
        "meals":meals,
        "seat":seat,
        "price":300*person,
      }
    )
})

return false // do not refresh the page

}

/* Cancel Method */

let cancel = (id) => {
  let url = `http://localhost:3000/movieTicket/${id}`; // Corrected URL
  fetch(url, { method: "DELETE" }) // Fixed fetch syntax  
};

let confirmcancel=(id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      cancel(id)
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
}



/* Edit Method */

let update=async(id)=>{

   
  let url = `http://localhost:3000/movieTicket/${id}`; // Corrected URL

 let res =  await fetch(url,{method:"GET"})

 let data = await res.json()

 let show=document.querySelector("#show")
 
 show.innerHTML=`

   <form id="form2"  action="">
  <div class="form-group2">

      
      <h2> <span><i class="fa-solid fa-arrow-left arrowback_up"></i> </span> Edit Details </h2>
     
      <!-- name -->
      <div class="name">
          <div>
             <label for="fullname1">First Name:</label>
             <input value="${data.firstname}" type="text" id="fullname1">
          </div>
          <div>
             <label for="lastname1">Last Name:</label>
             <input value="${data.lastname}" type="text" id="lastname1">
          </div>
      </div>
      <!-- age -->
      <label for="age1">Age:</label>
      <input value="${data.age}" type="number" id="age1">
  <!-- Day Date Persons -->
  <div class="ddp">
      <div class="person">
       <label for="person1">Persons:</label>
       <select value="${data.person}" name="noofpersons" id="person1">
          <option value="default">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
       </select>
      </div>
      <div class="date1">
       <label for="date1">Date:</label>
       <input value="${data.date}" type="date" id="date1">
      </div>
     
      </div>
      <!-- Contact -->
      <label for="contact">Contact:</label>
      <input value="${data.contact}" type="number" id="contact1">
      <!-- Meals -->
      <label for="meals1">Meals:</label>
      <select value="${data.meals}" name="meals" id="meals1">
          <option value="default">None</option>
          <option value="Popcorn">Popcorn</option>
          <option value="colddrink">Cold Drink</option>
          <option value="water">Water Bottle</option>
      </select>
      <!-- Seat -->
      <div class="seat1">Seat: <span class="seatnum1">A1</span></div>
      <!-- Price -->
      <div class="price1">Price: <span><i class="fa-solid fa-indian-rupee-sign"></i> 300 / person</span></div>

      <input id="submit1" type="submit" onclick="return finalupdate('${data.id}')">

  </div>   
</form> 


 `
 /* Goback Function */
 
let goback = document.querySelector(".arrowback_up");

    goback.addEventListener('click',()=> {
        goback.classList.add(".aarowback_up")
         location.href = "#thead";  

    });

 location.href="#form2"

}


let finalupdate=(id)=>{

  // inputvalues
  
  let firstname = document.querySelector("#fullname1").value
  let lastname = document.querySelector("#lastname1").value
  let age = document.querySelector("#age1").value
  let person = document.querySelector("#person1").value
  let date = document.querySelector("#date1").value

  let contact = document.querySelector("#contact1").value
  let meals = document.querySelector("#meals1").value
  let seat = document.querySelector(".seat1")
  let price = document.querySelector(".price1")


  let url=`http://localhost:3000/Movie/${id}`

  fetch(url,{method:"PUT",

      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(

          {
              firstname:firstname,
              lastname:lastname,
              age:age,
              person:person,
              date:date,
              contact:contact,
              meals:meals,
              seat: Array.from({ length: 10 }, () => Math.floor(Math.random() * 51)),
              price:300*person
          }
      )
}
  )
  location.href="#thead"
}















