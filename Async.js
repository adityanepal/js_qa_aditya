function cook_list(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(console.log("would you prefer chicken or goat.") )
      },2000)
    })
  }
async function dashain_activities(){ //async function for asynchronous process.

console.log("Hello"); //printing Hello

await cook_list(); //using await keyword for getting value.

console.log("I would Perfer Chicken.");
console.log("Thank you!!!");

}
dashain_activities(); //calling dashain_activities.
