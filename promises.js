var database = [
  { name: "Avani", Age: 22 },
  { name: "Mohan  ", Age: 18 },
  { name: "Roopa", Age: 25 },
  { name: "dinesh", Age: 17 },
];

function getUser() {
  setTimeout(() => {
    database.forEach((post, index) => {
      console.log(post.name);
    });
  }, 2000);
}

function adduser(newUser) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      database.push(newUser);
      //do some err chking here
      let error= false;
      if(error){
          res();
      }
      else{
          rej("Err Occured , Something went wrong")
      }
    }, 3000);
  });
}

adduser({ name: "Sidha", Age: 55 })
.then(getUser)
.catch((err)=>{
    console.log("recvd msg is ", err);
})


//what to do if there are many promises

// use promise .all  which gives u an array 



