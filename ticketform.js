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
           
         <thead>
        <tr class="headkey">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Persons</th>
          <th>Date</th>
          <th>Day</th>
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
             <td> ${e.day} </td>
             <td> ${e.contact} </td>
             <td> ${e.meals} </td>
             <td> ${e.seat} </td>
             <td> ${e.price} </td>
             <td onclick="update('${e.id}')"> Edit </td>
             <td onclick="cancel('${e.id}')"> Cancel </td>
        </tr>
      </tbody>

          `;
      });
  } catch (error) {
      console.error("Error 404 Not Found:", error);
  }
};


/* POST METHOD */
let insert=()=>{

let firstname = document.querySelector("#fullname").value
let lastname = document.querySelector("#lastname").value
let age = document.querySelector("#age").value
let person = document.querySelector("#person").value
let date = document.querySelector("#date").value
let day = document.querySelector("#day").value
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
        "day":day,
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
  return false
      
};

/* Edit Method */

let update=async(id)=>{

  let url=`http://localhost:3000/Movie/${id}`
 let res=  await fetch(url,{method:"GET"})
 let data=await res.json()

 let show=document.querySelector("#show")
 
 show.innerHTML=`

     <form id="form" action="">
    <div class="form-group">
        <!-- name -->
        <div class="name">
            <div>
               <label for="fullname">First Name:</label>
               <input value="${e.firstname}" type="text" id="fullname">
            </div>
            <div>
               <label for="lastname">Last Name:</label>
               <input value="${e.lastname}" type="text" id="lastname">
            </div>
        </div>
        <!-- age -->
        <label for="age">Age:</label>
        <input value="${e.age}" type="number" id="age">
    <!-- Day Date Persons -->
    <div class="ddp">
        <div class="person">
         <label for="person">Persons:</label>
         <select value="${e.person}" name="noofpersons" id="person">
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
        <div class="date">
         <label for="date">Date:</label>
         <input value="${e.date}" type="date" id="date">
        </div>
        <div class="day">
         <label for="day">Day:</label>
         <select value="${e.day}" name="day" id="day">
            <option value="default">Select</option>
            <option value="default">Sunday</option>
            <option value="default">Monday</option>
            <option value="default">Tuesday</option>
            <option value="default">Wednesday</option>
            <option value="default">Thursday</option>
            <option value="default">Friday</option>
            <option value="default">Saturday</option>
         </select>
        </div>
        </div>
        <!-- Contact -->
        <label for="contact">Contact:</label>
        <input value="${e.contact}" type="number" id="contact">
        <!-- Meals -->
        <label for="meals">Meals:</label>
        <select value="${e.meals}" name="meals" id="meals">
            <option value="default">None</option>
            <option value="Popcorn">Popcorn</option>
            <option value="colddrink">Cold Drink</option>
            <option value="water">Water Bottle</option>
        </select>
        <!-- Seat -->
        <div class="seat">Seat: <span class="seatnum">A1</span></div>
        <!-- Price -->
        <div class="price">Price: <span><i class="fa-solid fa-indian-rupee-sign"></i> 300 / person</span></div>

        <input id="submit" type="submit" onclick="return finalUpdate('${e.id}')">

    </div>   
</form> 
 
 ` 
}



let finalupdate=(id)=>{

  let url=`http://localhost:3000/Movie/${id}`

  fetch(url,{method:"PUT",

      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(

          {
              name:name,
              age:age,
              person:person,
              date:date,
              day:day,
              contact:contact,
              meals:meals,
              seat:seat,
              price:person*300
          }
      )
}
  )
}















