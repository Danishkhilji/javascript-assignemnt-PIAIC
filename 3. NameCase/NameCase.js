var str ="hello dear how ARE YOU"

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

var TitleCase = toTitleCase(str)

console.log(` Lower case ==>  ${str.toLowerCase()} || upper case ==>  ${str.toUpperCase()}   
|| TitleCase ==>  ${TitleCase} `);