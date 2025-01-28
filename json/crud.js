let fetchData=async()=>{
    let url = 'http://localhost:3000/Movie'  /* db.json linked through this url */
    let res = await fetch(url,{method:"GET"})

    let data = await res.json()
    console.log(data)


    let show = document.querySelector("#display")

    data.map((e)=>{

        show.innerHTML+=`
        
       
        
        <tr >

        <td class="tr2"> ${e.name} </td>
        <td class="tr2"> ${e.age} </td>
        <td class="tr2"> ${e.email} </td>
        <td class="tr2"> ${e.person} </td>
        <td class="tr2"> ${e.price} </td>

        <td class="tr2" onclick="del('${e.id}')"> Delete </td>
        <td class="tr2" onclick="update('${e.id}')"> Update </td>


        
        </tr>
        
        `
    })
}



let insert=()=>{

    let name=document.querySelector("#name").value
    let age=document.querySelector("#age").value
   
    let person=document.querySelector("#people").value
    let price=document.querySelector("#price").value


    let url='http://localhost:3000/Movie'

    fetch(url,{

        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(

            {
                name:name,
                age:age,
                email:email,
                person:person,
                price:price,

            }
        )
    })
return false

}

/* Delete */
let del=(id)=>{

    let url=`http://localhost:3000/Movie/${id}`

    fetch(url,{method:"DELETE"})

}


/* Edit */
let update=async(id)=>{

   let url=`http://localhost:3000/Movie/${id}`
  let res=  await fetch(url,{method:"GET"})
  let data=await res.json()

  let show=document.querySelector("#show")
  
  show.innerHTML= `
  
           <div>
            <label for="name">FullName</label>
            <input type="text" id="fullname" value="${data.name}">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="text" id="email">
        </div>
        <div>
            <label for="Num_of_persons">Persons</label>
            <input type="text" id="numpersons">
        </div>
        <div>
            <label for="contact_num">Contact</label>
            <input type="text" id="contact">
        </div>
        <div>
            <label for="age">AGe</label>
            <input type="text" id="age">
        </div>
        <div>
            <label for="meals">Meals</label>
            <select name="None" id="">
                <option value="default"> None
                    <option value="Popcorn">Popcorn</option>
                    <option value="colddrink">Cold Drink</option>
                    <option value="water">Water Bottle</option>
                </option>
            </select>
        </div>
        <div>
            <div>Seat: <span>Display Seat Number through js</span></div>
        </div>
        
      <input type="submit" onclick="return finalupdate('${data.id}')">
    </div>

  
  
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
                email:email,
                numper:numpersons,
                contact:contact

            }
        )
}
    )
}







