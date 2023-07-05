//this function fetches all the barbers

function fetchBarbers(){
 fetch("https://barbers.onrender.com/barbers")
.then(res=>res.json())
.then(data=>renderBarber(data))
}




function renderBarber(barbers){
    const barblist=document.getElementById("maindiv")
    barbers.forEach(barbers => {
        const li=document.createElement("li")
         li.textContent=barbers.name
         barblist.append(li)

         li.addEventListener('click',displayBarberInfo)

    
        });  
    }

function displayBarberInfo(e){
    console.log(e.target);

    const barberId=e.target.displayBarberInfo
    
}


 document.addEventListener('DOMContentLoaded',fetchBarbers)