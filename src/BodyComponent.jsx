

export function BodyComponent ({showbg}) {
    const animals = {
        dolphin: {
          image: './images/dolphin.jpg',
          facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
        },
        lobster: {
          image: './images/lobster.jpg',
          facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
        },
        starfish: {
          image: './images/starfish.jpg',
          facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
        }
      };

    const images = [];

    function displayFact(e) {
        const animal = e.target.alt;
        const index = Math.floor(Math.random() * animals[animal].facts.length);
        const funFact = animals[animal].facts[index];
      
        const p = document.getElementById('fact');
        p.innerHTML = funFact;
      }

    for(const animal in animals) {
        const image = (
                    <img
                    onClick={displayFact}
                    key={animal}
                    className='animal'
                    alt={animal}
                    src={animals[animal].image}
                    aria-label={animal}
                    role='button'
                    />
                    );
  images.push(image);
}
    return (
        <div className='animals'>{showbg && images}</div>
    )
}