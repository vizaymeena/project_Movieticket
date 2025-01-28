
// /* CRUD OPERATIONS FROM HERE */

// /* GET METHOD */
// let fetchData=async()=>{
//     let url = 'http://localhost:3000/movieTicket'  // json url
//     let dataStore = await fetch(url,{method:"GET"}) // Not readable
//     let dataTranslate = await dataStore.json() //  json lang.

//     console.log(dataTranslate)

//     // statement for showing data into html structure

//     let display = document.querySelector(".display")
//     display.map((e)=>{

//       display.innerHTML+=`

//         <div id="finalform"> 

//         <div class="receipt"> Receipt </div>
//         <div class="userdetails">
//           <div class=firstname1> ${e.firstname}</div>
//           <div class=lastname1> ${e.lastname}</div>
//         </div>
//         <div class="age1">${e.age}</div>
//         <div class="person1">${e.person}</div>
//         <div class="date1">${e.date}</div>
//         <div class="day1">${e.day}</div>
//         <div class="contact1">${e.contact}</div>
//         <div class="meals1">${e.meals}</div>
//         <div class="seat1">${e.seat}</div>
//         <div class="price1">${e.price}</div>
//         </div> 
//         <div class="edit"> <input "onclick=finalUpdate()" type="submit" value="Submit"> </div>
      
//       `
//     })
// }

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






/* GET METHOD */
let fetchData = async () => {
  let url = 'http://localhost:3000/movieTicket'; // JSON URL

  try {
      let dataStore = await fetch(url, { method: "GET" }); // Fetch data
      let dataTranslate = await dataStore.json(); // Convert to JSON

      console.log(dataTranslate);

      // Statement for showing data in the HTML structure
      let display = document.querySelector(".display");
      display.innerHTML = ""; // Clear existing content before appending

      dataTranslate.forEach((e) => {
          display.innerHTML += `
           <form> 

            <div class="form-group">
        <!-- name -->
        <div class="putname">
            <div>
               <label for="">First Name:</label>
               <span class="putfullname"> ${e.firstname} </span>
            </div>
            <div>
               <label for="">Last Name:</label>
               <span class="putlastname"> ${e.lastname} </span>
            </div>
        </div>
        <!-- age -->
        <label for="">Age:</label>
        <span class="putage"> ${e.age} </span>
    <!-- Day Date Persons -->
    <div class="putddp">
        <div class="person1">
         <label for="">Persons:</label>
         <select name="" id="putperson">
            ${e.person}
         </select>
        </div>
        <div class="date1">
         <label for="">Date:</label>
         <span class="putdate">${e.date}</span>
        </div>
        <div class="day1">
         <label for="">Day:</label>
         <select name="day" id="putday">
            ${e.day}
         </select>
        </div>
        </div>
        <!-- Contact -->
        <label for="">Contact:</label>
         <span class="putcontact>${e.contact}</span>
        <!-- Meals -->
        <label for="">Meals:</label>
        <select name="meals" id="meals">
           <span class="putmeals> ${e.meals} </span>
        </select>
        <!-- Seat -->
        <div class="seat1">Seat: <span class="seatnum">A1</span></div>
        <!-- Price -->
        <div class="price1">Price: <span><i class="fa-solid fa-indian-rupee-sign"></i> 300 / person</span></div>

        <div>
          <div> <span onclick="cancel('${e.id}'> Cancel </span> </div>
          <div> <span onclick="update('${e.id}')"> Edit </span> </div>
        </div>

    </div>
           
           
           
           </form>
          `;
      });
  } catch (error) {
      console.error("Error fetching data:", error);
  }
};


/* Cancel / DELETE method */

let cancel = (id) => {
  let url = `http://localhost:3000/movieTicket/${id}`; // Corrected URL
  fetch(url, { method: "DELETE" }) // Fixed fetch syntax
  return false
      
};






