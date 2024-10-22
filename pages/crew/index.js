const crewData = [
  {
    role: 'Commander',
    name: 'Douglas Hurley',
    description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: '../../starter-code/assets/crew/image-douglas-hurley.png'
  },
  {
    role: 'Mission Specialist',
    name: 'Mark Shuttleworth',
    description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    image: '../../starter-code/assets/crew/image-mark-shuttleworth.png '
  },
  {
    role: 'Pilot',
    name: 'Victor Glover',
    description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    image: '../../starter-code/assets/crew/image-victor-glover.png'
  },
  {
    role: 'Flight Engineer',
    name: 'Anousheh Ansari',
    description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    image: '../../starter-code/assets/crew/image-anousheh-ansari.png'
  }
];

function changeCrew(index) {
  document.querySelector('.role').textContent = crewData[index].role;
  document.querySelector('.name').textContent = crewData[index].name;
  document.querySelector('.description').textContent = crewData[index].description;
  document.getElementById('crew-image').src = crewData[index].image;

  // Update active dot
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('dot-active'));
  dots[index].classList.add('dot-active');
}
