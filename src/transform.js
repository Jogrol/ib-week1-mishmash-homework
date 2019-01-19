module.exports = {

 groupAdultsByAgeRange(people){

     return people.reduce((currentPerson,person) => {
        if(person.age >= 50){ 
             return { 
                 '51 and older': currentPerson['51 and older'].concat([person]),
                 '21-30': currentPerson['21-30'],
                 '31-40': currentPerson['31-40'],
                 '41-50': currentPerson['41-50'],
                 '20 and younger': currentPerson['20 and younger'],
             }
        } else if (person.age >= 41){
             return {
                 '51 and older': currentPerson['51 and older'],
                 '21-30': currentPerson['21-30'],
                 '31-40': currentPerson['31-40'],
                 '41-50': currentPerson['41-50'].concat([person]),
                 '20 and younger': currentPerson['20 and younger'],
             }
        } else if (person.age >= 31){
             return {
                '51 and older': currentPerson['51 and older'],
                '21-30': currentPerson['21-30'],
                '31-40': currentPerson['31-40'].concat([person]),
                '41-50': currentPerson['41-50'],
                '20 and younger': currentPerson['20 and younger'],
             }
         } else if (person.age >= 21){
             return {
                '51 and older': currentPerson['51 and older'],
                '21-30': currentPerson['21-30'].concat([person]),
                '31-40': currentPerson['31-40'],
                '41-50': currentPerson['41-50'],
                '20 and younger': currentPerson['20 and younger'],
             }
         } else if(person.age < 20){
             return {
                '51 and older': currentPerson['51 and older'],
                '21-30': currentPerson['21-30'],
                '31-40': currentPerson['31-40'],
                '41-50': currentPerson['41-50'],
                '20 and younger': currentPerson['20 and younger'].concat([person])
             }
         }
 }, {'20 and younger':[],'21-30':[],'31-40':[],'41-50':[],'51 and older':[]});
 
}
}