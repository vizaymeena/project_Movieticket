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

 <div id="firstname1">'${data.firstname}'</div>
 <div id="lastname1">'${data.lastname}'</div>
 <div id="age1">'${data.age}'</div>
 <div id="contact1">'${data.contact}'</div>
 <div id="day1">'${data.day}'</div>
 <div id="date1">'${data.date}'</div>
 <div id="meals1">'${data.meals}'</div>
 <div id="seat1">'${data.seat}'</div>
 <div id="price1">'${data.price}'</div>
 <div id="person1">'${data.person}'</div>
 <input type="text" value="submit" onclick="update('${data.id}')">

 ` 
}


let finalupdate=(id)=>{

  // inputvalues
  
  let firstname = document.querySelector("#fullname1").value
  let lastname = document.querySelector("#lastname1").value
  let age = document.querySelector("#age1").value
  let person = document.querySelector("#person1").value
  let date = document.querySelector("#date1").value
  let day = document.querySelector("#day1").value
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
              date:date,
              contact:contact,
              meals:meals,
              seat:seat,
              price:300*person
          }
      )
}
  )
}















