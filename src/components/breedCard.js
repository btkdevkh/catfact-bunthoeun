import { catPics } from '../data/catPics'
import catgeneric from '../assets/img/cats/catgeneric.jpg'

const breedCard = ({ breed, coat, country, origin, pattern }) => {
  const foundCatPic = catPics.find(c => c.breed.toLowerCase() === breed.toLowerCase())

  return `
    <div class="relative rounded overflow-hidden cursor-pointer hover:text-white">
      ${foundCatPic ? 
        `<img src="${foundCatPic.path}" class="w-full h-52 object-cover" />` : 
        `<img src="${catgeneric}" class="w-full h-52 object-cover" />`
      }
      <div class="flex flex-col justify-center text-gray-600 bg-white p-5 shadow-md h-60 hover:bg-green-900 hover:shadow-inner hover:text-white transition ease-in-out delay-100">
        <i class="text-3xl absolute right-2 top-2 fa-solid fa-cat"></i>
        <p class="mb-2"><strong>Race:</strong> ${breed}</p>
        <p class="mb-2"><strong>Pilosité:</strong> ${coat ? coat : 'N/A'}</p>
        <p class="mb-2"><strong>Pays:</strong> ${country ? country : 'N/A'}</p>
        <p class="mb-2"><strong>Originaire:</strong> ${origin}</p>
        <p><strong>Motif:</strong> ${pattern ? pattern : 'N/A'}</p>
      </div>
    </div>
  `
}

export default breedCard
