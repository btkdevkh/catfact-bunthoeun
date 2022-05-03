import simpleFetch from "../api/simpleFetch";
import { API_URL } from "../config";
import breedCard from "./breedCard";

const breedPagination = (links, bleedBtns, listEl) => {
  let inc = 1
  const linkLengthWithoutPrevAndNextBtns = links.length - 2;
    
  links.forEach(link => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    link.active ? 
    btn.classList.add('active') : 
    btn.classList.remove('active')
    
    if(link.label === 'Previous') link.label = '<'
    if(link.label === 'Next') link.label = '>'

    btn.textContent = link.label
    
    btn.addEventListener('click', async () => {
      document.querySelectorAll('.bleed__btns button').forEach(bt => { 
        bt.classList.remove('active')
      })

      btn.classList.add('active')

      if(btn.textContent === '<') {
        inc--
        link.url = `${API_URL}?page=${inc}`
      }

      if(btn.textContent === '>') {
        inc++
      } else {
        inc = link.url.split('')[link.url.split('').length - 1]
      }

      if(inc <= 0) inc = 1
      if(inc >= linkLengthWithoutPrevAndNextBtns) inc = linkLengthWithoutPrevAndNextBtns
      
      link.url = `${API_URL}?page=${inc}`

      const breeds = await simpleFetch(link.url)

      listEl.innerHTML = ''
      breeds.data.forEach(breed => {
        listEl.innerHTML += breedCard(breed)
      })
    })

    bleedBtns.append(btn)
  })
}

export default breedPagination
