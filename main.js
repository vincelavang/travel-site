var places = [
  {id: "0", country: "London, United Kingdom" , airport:"Heathrow-(LHR)" , image: "pictures/0.jpg", price:1200, attractions:"Westminster Abbey, Buckingham Palace, St. Paul's Cathedral, Tower of London, Tate Modern, London's Central Parks", duration:"xweek"},
  {id: "1", country: "Paris, France" , airport:"Charles Degaulle-(CDG)" , image: "pictures/1.jpg", price:1050, attractions:"Effiel Tower, Catacombs, Louvre Museum, Norte Dame Catherdral, Arc de Triomphe, Champs Elysees" , duration:"xweek"},
  {id: "2", country: "Rome, Italy" , airport:"Fiumicino-(FCO)" , image: "pictures/2.jpg", price:1300, attractions:"Colosseum, Pantheon, Roman Forum, Trevi Fountain, St. Peter's Basilica, Vatican Museums" , duration:"xweek"},
  {id: "3", country: "Bangkok, Thailand" , airport:"(BKK)", image: "pictures/3.jpg", price:1000, attractions:"Grand Palace, MBK Center, Phi Phi Islands, Patong beach, Phuket beach, Tiger Cave Temple" , duration:"xweek"},
  {id: "4", country: "Ho Chi Minh City, Vietnam" , airport:"(SGN)", image: "pictures/4.jpg", price:1000, attractions:"Ha Long Bay, Hoa Lo Prison, Ho Chi Minh Mausoleum, Marble Mountain, Nha Trang , Imperial City of Hue" , duration:"xweek"},
  {id: "5", country: "Sydney, Australia" , airport:"(SYD)", image: "pictures/5.jpg", price:1350, attractions:"Sydney Opera House, Sydney Harbour Bridge, Darling Harbour, Bondi Beach, Queen Victoria Building, Manly Beach" , duration:"xweek"},
  {id: "6", country: "Dubai, United Arab Emirates" , airport:"(DXB)" , image: "pictures/6.jpg", price:1500, attractions:"Burj Khalifa, Burj Al Arab, Palm Islands, Palm Jumeirah, Dubai Mall, Dubai Marina" , duration:"xweek"},
  {id: "7", country: "Cape Town, South Africa" , airport:"(CPT)", image: "pictures/7.jpg", price:1400, attractions:"Kruger National Park, Table Mountain, Robben Island, Apartheid Museum, Cango Caves, Cape " , duration:"xweek"},
  {id: "8", country: "Rio De Janeiro, Brazil" , airport:"(GIG)", image: "pictures/8.jpg", price:1100, attractions:"Copacabana, Christ the Redeemer, Sugarloaf Mountain, Ipanema, Tijuca Forest, Botafogo" , duration:"xweek"},
  {id: "9", country: "Reykjavik, Iceland" , airport:"(KEF)", image: "pictures/9.jpg", price:1000, attractions:"Blue Lagoon, Gullfoss, Hallgrimskirkja, Dettifoss, Eyjafjallajokull, Askja" , duration:"xweek"}
]
var $list = document.querySelector('.list-group')
var msPerDay = 1000 * 60 * 60 * 24
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
var $search = document.querySelector('#search')
$search.addEventListener('keydown', function() {
  $list.innerHTML = ""
  for (var i = 0; i < places.length; i++) {
    if (places[i].country.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
            $list.appendChild(createAirport(places[i]))
    }
  }
})
$list.addEventListener("click", function(event){
  var $details = document.querySelector("#details")
  $list.textContent = ""
  $details.innerHTML = ""
  var $start = document.querySelector('.start').value
  //console.log($start)
  var $end = document.querySelector('.end').value
  //console.log($end)
  var startDate = new Date($start)
  var endDate = new Date($end)
  var totalTime = Math.round(endDate.getTime()- startDate.getTime()) / (msPerDay)
  console.log(totalTime)
  var id = event.target.id
  var place = findPlace(id, places)
  var $place = renderPlace(place, totalTime)
  $details.appendChild($place)
})
function findPlace (id, places) {
  for (var i= 0; i < places.length; i++) {
    var place = places[i]
    if (place.id === id) {
      return place
    }
  }
}
function renderPlace (place , days) {
  var $place = document.createElement('div')
  $place.classList.add('panel')
  var $details = document.createElement('div')
  $details.className = 'panel-body panel-default'
  var $locationWrapper = document.createElement('div')
  $locationWrapper.classList.add('col-md-12')
  var $location = document.createElement('h2')
  $location.textContent = place.country
  $locationWrapper.appendChild($location)
  $place.appendChild($locationWrapper)
  var $imageWrapper = document.createElement('div')
  $imageWrapper.classList.add('col-md-6')
  var $image = document.createElement('img')
  $image.classList.add('img-responsive')
  $image.setAttribute('src', "pictures/" + place.id + ".jpg")
  $imageWrapper.appendChild($image)
  $details.appendChild($imageWrapper)
  var $description = document.createElement('div')
  $description.classList.add('col-md-6')
  var $price = document.createElement('div')
  var $title = document.createElement('span')
  $title.setAttribute('id', "title")
  var $data = document.createElement('span')
  $data.setAttribute('id', "text")
  $description.appendChild($title)
  $description.appendChild($data)
  $details.appendChild($description)
  $place.appendChild($details)
  if (days) {
    $price = document.createElement('p')
    $title.textContent = "Price: "
    $data.textContent = "$ " + ((place.price * days) - (place.price * days) * .75)
    $description.appendChild($price)
    var $duration = document.createElement('div')
    var $title = document.createElement('span')
    $title.setAttribute('id', "title")
    var $data = document.createElement('span')
    $data.setAttribute('id', "text")
    $description.appendChild($duration)
    $duration.appendChild($title)
    $duration.appendChild($data)
    $title.textContent = "Duration: "
    $data.textContent = days + " days"
  }
  var $attractions = document.createElement('div')
  var $title = document.createElement('span')
  $title.setAttribute('id', "title")
  var $data = document.createElement('span')
  $data.setAttribute('id', "text")
  $place.appendChild($attractions)
  $attractions.appendChild($title)
  $attractions.appendChild($data)
  $title.textContent = "Attractions: "
  $data.textContent = place.attractions
  $description.appendChild($attractions)
  return $place
}
