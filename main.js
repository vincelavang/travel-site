var places = [
{id: 0, country: "London, United Kingdom" , airport:"Heathrow-(LHR)" , image: "pictures/0.jpg", price:1200, attractions:"Westminster Abbey, Buckingham Palace, St. Paul's Cathedral, Tower of London, Tate Modern, London's Central Parks", duration:"xweek"},
{id: 1, country: "Paris, France" , airport:"Charles Degaulle-(CDG)" , image: "pictures/1.jpg", price:1050, attractions:"Effiel Tower, Catacombs, Louvre Museum, Norte Dame Catherdral, Arc de Triomphe, Champs Elysees" , duration:"xweek"},
{id: 2, country: "Rome, Italy" , airport:"Fiumicino-(FCO)" , image: "pictures/2.jpg", price:1300, attractions:"Colosseum, Pantheon, Roman Forum, Trevi Fountain, St. Peter's Basilica, Vatican Museums" , duration:"xweek"},
{id: 3, country: "Bangkok, Thailand" , airport:"(BKK)", image: "pictures/3.jpg", price:1000, attractions:"Grand Palace, MBK Center, Phi Phi Islands, Patong beach, Phuket beach, Tiger Cave Temple" , duration:"xweek"},
{id: 4, country: "Ho Chi Minh City, Vietnam" , airport:"(SGN)", image: "pictures/4.jpg", price:1000, attractions:"Ha Long Bay, Hoa Lo Prison, Ho Chi Minh Mausoleum, Marble Mountain, Nha Trang , Imperial City of Hue" , duration:"xweek"},
{id: 5, country: "Sydney, Australia" , airport:"(SYD)", image: "pictures/5.jpg", price:1350, attractions:"Sydney Opera House, Sydney Harbour Bridge, Darling Harbour, Bondi Beach, Queen Victoria Building, Manly Beach" , duration:"xweek"},
{id: 6, country: "Dubai, United Arab Emirates" , airport:"(DXB)" , image: "pictures/6.jpg", price:1500, attractions:"Burj Khalifa, Burj Al Arab, Palm Islands, Palm Jumeirah, Dubai Mall, Dubai Marina" , duration:"xweek"},
{id: 7, country: "Cape Town, South Africa" , airport:"(CPT)", image: "pictures/7.jpg", price:1400, attractions:"Kruger National Park, Table Mountain, Robben Island, Apartheid Museum, Cango Caves, Cape " , duration:"xweek"},
{id: 8, country: "Rio De Janeiro, Brazil" , airport:"(GIG)", image: "pictures/8.jpg", price:1100, attractions:"Copacabana, Christ the Redeemer, Sugarloaf Mountain, Ipanema, Tijuca Forest, Botafogo" , duration:"xweek"},
{id: 9, country: "Reykjavik, Iceland" , airport:"(KEF)", image: "pictures/9.jpg", price:1000, attractions:"Blue Lagoon, Gullfoss, Hallgrimskirkja, Dettifoss, Eyjafjallajokull, Askja" , duration:"xweek"}
]





function createAirport(place) {
  var $airport = document.createElement('li')
  $airport.classList.add('list-group-item')
  $airport.setAttribute('id', place.id)
  $airport.setAttribute('price', place.price)
  $airport.setAttribute('attractions', place.attractions)
  $airport.setAttribute('duration', place.duration)
  $airport.textContent = place.country + " " + place.airport
  return $airport
}

document.addEventListener('keydown', function() {
  var $list = document.querySelector('.list-group')
  $list.innerHTML = ""
  console.log(event.target.value)
  for (var i = 0; i < places.length; i++) {
    if (places[i].country.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
            $list.appendChild(createAirport(places[i]))
      }
    }

    if(event.target.value != undefined &&  document.querySelector("li.list-group-item") != undefined ){
      var $imageContainer = document.querySelector(".image-container")
      $imageContainer.innerHTML = ""
      document.querySelector("li.list-group-item").addEventListener("click", function(e){
        $list.textContent = ""
        //console.log(this.textContent)


        $image = document.createElement('img')
        $image.setAttribute('src', "pictures/" + this.id + ".jpg")
        $imageContainer.appendChild($image)


        // Section Price
        $title = document.createElement('span')
        $title.setAttribute('id', "title")
        $data = document.createElement('span')
        $data.setAttribute('id', "text")

        $price = document.createElement('p')
        $title.textContent = "Price: "
        $data.textContent = this.getAttribute('price')
        $price.appendChild($title)
        $price.appendChild($data)
        $imageContainer.appendChild($price)

        // Section Attractions
        $title = document.createElement('span')
        $title.setAttribute('id', "title")
        $data = document.createElement('span')
        $data.setAttribute('id', "text")

        $attractions = document.createElement('p')
        $title.textContent = "Attractions: "
        $data.textContent = this.getAttribute('attractions')
        $attractions.appendChild($title)
        $attractions.appendChild($data)
        $imageContainer.appendChild($attractions)

        // Section Duration
        $title = document.createElement('span')
        $title.setAttribute('id', "title")
        $data = document.createElement('span')
        $data.setAttribute('id', "text")

        $duration = document.createElement('p')
        $title.textContent = "Duration: "
        $data.textContent = this.getAttribute('duration')
        $duration.appendChild($title)
        $duration.appendChild($data)
        $imageContainer.appendChild($duration)
    })
  }
})
