var magicians = ["Apollo Robbins", "Derren Brown", "Jerry Sadowitz", "Criss Angel"]

var make_great = (magicians) => {
    var newMagicians = magicians.map(element => {
        return (`The Greate ${element}`);
    });
    return newMagicians
}
var newMagiciansArray = make_great(magicians)

var show_magicians=(magicians)=>{
    magicians.forEach(element => {
        console.log(element);
    });
    }

console.log(`Original ==> ${magicians}`);

console.log(`Modified ==> ${newMagiciansArray}`);