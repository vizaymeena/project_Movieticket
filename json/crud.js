let fetchData=async()=>{
    let url = 'http://localhost:3000/Movie'  /* db.json linked through this url */
    let res = await fetch(url,{Method:"GET"})

    let data = await res.json()
    console.log(data)
}