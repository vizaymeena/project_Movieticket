let fetchData=async()=>{
    let url = 'http://localhost:3000/Movie'  /* db.json linked through this url */
    let res = await fetch(url,{Method:"GET"})

    let data = await res.json()
    console.log(data)


    let show = document.querySelector("#display")

    data.map((e)=>{

        show.innerHTML+=`
        
       
        
        <tr >

        <td class="tr2"> ${e.name} </td>
        <td class="tr2"> ${e.age} </td>
        <td class="tr2"> ${e.batch} </td>
        
        </tr>
        
        `
    })
}

