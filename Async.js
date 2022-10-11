function cook_list(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(console.log("would you prefer chicken or goat.") )
      },2000)
    })
  }
async function dashain_activities(){

console.log("Hello");

await cook_list();

console.log("I would Perfer Chicken.");
console.log("Thank you!!!");

}
dashain_activities(); 
