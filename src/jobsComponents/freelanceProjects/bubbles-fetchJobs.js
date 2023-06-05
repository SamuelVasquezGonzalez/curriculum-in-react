import LoaderVideo from '../../assets/loader.gif'

export async function fetchBubblesData(reqData) { 
  await fetch('https://samuelvasquezgonzalez.github.io/API-portf/freelance.json')
    .then(response => response.json())
    .then(response => {
      reqData(response)
    })
    .catch(error => {
      reqData([
        {
          img: LoaderVideo,
          info: "We have had some inconveniences when loading the information :(",
          url: '#'
        },
        {
          img: LoaderVideo,
          info: "We have had some inconveniences when loading the information :(",
          url: '#'
        },
        {
          img: LoaderVideo,
          info: "We have had some inconveniences when loading the information :(",
          url: '#'
        }
      ]);
      console.log(error)
    });
}
