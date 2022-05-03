const tooltip = (randomFact) => {
  return `
    <div class="w-80 font-bold text-white bg-rose-500 text-center p-5 rounded fact">
      <p>${randomFact.fact}</p>
    </div>
  `
}

export default tooltip
