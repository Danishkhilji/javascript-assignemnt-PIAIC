function Make_album (name,title,track=0){
    this.ArtistName =name;
    this.AlbumTitle= title
    if(track){
        this.track=track
    }
}

var Album1 = new Make_album("Atif","Album1");
var Album2 = new Make_album("Rahat","Album2");
var Album3 = new Make_album("Nusrut","Album3");

console.log("Album1 ==>" , Album1);

console.log("Album2 ==>" , Album2);

console.log("Album3 ==>" , Album3);
