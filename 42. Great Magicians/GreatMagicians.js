var magicians = ["Apollo Robbins", "Derren Brown", "Jerry Sadowitz", "Criss Angel"]

var make_great = (magicians) => {
    var newMagicians = magicians.map(element => {
        return (`The Greate ${element}`);
    });
    console.log(newMagicians);
}

make_great(magicians)

