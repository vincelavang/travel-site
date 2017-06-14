var places = [
{country: "London, United Kingdom" , airport:"Heathrow-(LHR)"},
{country: "Paris, France" , airport:"Charles Degaulle-(CDG)"},
{country: "Rome, Italy" , airport:"Fiumicino-(FCO)"},
{country: "Bangkok, Thailand" , airport:"(BKK)"},
{country: "Ho Chi Minh City, Vietnam" , airport:"(SGN)"},
{country: "Sydney, Australia" , airport:"(SYD)"},
{country: "Dubai, United Arab Emirates" , airport:"(DXB)"},
{country: "Cape Town, South Africa" , airport:"(CPT)"},
{country: "Rio De Janeiro, Brazil" , airport:"(GIG)"},
{country: "Reykjavik, Iceland" , airport:"(KEF)"}
]

document.addEventListener('keydown', function() {
  var results = ''
  document.querySelector(".image-container").innerHTML = ''
  for (var i = 0; i < places.length; i++) {
    var country = places[i].country + " " +  places[i].airport
    //console.log(event.target.value);
    if (country.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
            //console.log(country)
            results += "<li class='list-group-item' id='" + i +  "'>" + country + "</li>"
      }
    }
    console.log(results)
    if(results !== null){
      document.querySelector(".list-group").innerHTML = results
    }

    document.querySelector("li.list-group-item").addEventListener("click", function(e){
        document.querySelector(".search").value = this.innerHTML
        document.querySelector(".list-group").innerHTML = ''
        document.querySelector(".image-container").innerHTML = "<img src='/Users/Vince/travel-site/pictures/" + this.id  + ".jpg'/><br><p>" + this.innerHTML  + "</p>"
    })
})
