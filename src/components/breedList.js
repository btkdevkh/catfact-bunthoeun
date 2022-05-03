import simpleFetch from '../api/simpleFetch'
import { API_URL, API_URL_FACT } from '../config'
import breedCard from './breedCard'
import breedPagination from './breedPagination'
import tooltip from './tooltip'

const breedList = async (listEl, bleedBtns) => {
  const breeds = await simpleFetch(API_URL)

  listEl.innerHTML = ''
  breeds.data.forEach(breed => {
    listEl.innerHTML += breedCard(breed)
  })

  breedPagination(breeds.links, bleedBtns, listEl)
  
  const childrenDivs = document.querySelectorAll('.breed__list div')
  const randomFactEl = document.querySelector('.random__fact')

  childrenDivs.forEach(child => {
    child.addEventListener('click', async (e) => {
      const randomFact = await simpleFetch(API_URL_FACT)
      
      randomFactEl.innerHTML = tooltip(randomFact)
      if(!e.target.classList.contains('breed__grid')) randomFactEl.classList.add('active')
    })
  })
  
  randomFactEl.addEventListener('click', e => {
    if(e.target.classList.contains('random__fact')) {
      randomFactEl.classList.remove('active')
    }
  })
}

export default breedList
