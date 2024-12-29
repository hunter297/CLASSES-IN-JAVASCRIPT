//class






class striker{
    constructor(name,age,hobby,color){
      this.name = name
      this.age = age
      this.hobby = hobby
      this.color = color
    }
}

let strikerB = new striker("Semilore", 12, "football","blue")
let strikerC = new striker("LORD DIDI", 16, "Unknown","black")



console.log("my name is", strikerB.name, "and i am", strikerB.age, "years old", "and my hobby is", strikerB.hobby, "and my favorite color is", strikerB.color)




console.log("my name is", strikerC.name, "and i am", strikerC.age, "years old", "and my hobby is", strikerC.hobby, "and my favorite color is", strikerC.color)







class cars{
  constructor(name, color, model, yearcreated,) {
    this.name = name
    this.color = color
    this.model = model
    this.yearcreated = yearcreated
   }
}

let carA = new cars("buggati", "black", "2023model", "2022")
let carD = new cars("lamboghini", "gold", "26-qwe-34", "2019")


console.log("the name of the car is", carA.name, "the color is", carA.color,"and the model is",carA.model, "and it was created in year",carA.yearcreated)