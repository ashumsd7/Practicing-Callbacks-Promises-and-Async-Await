var database= [
    {name: "Avani", Age: 22},
    {name: "Mohan  ", Age: 18},
    {name: "Roopa", Age: 25},
    {name: "dinesh", Age: 17},
]


function getUser(){
    setTimeout(()=>{
    database.forEach((post,index)=>{
        console.log(post.name);
    })
    },2000)
}



function adduser(newUser,callback)
{
    setTimeout(() => {
        database.push(newUser);
        callback();
    }, 3000);
   
}

adduser({name:"Sidha", Age: 55},getUser);