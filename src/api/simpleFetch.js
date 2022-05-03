const simpleFetch = async (url) => {
  try {
    const response = await fetch(`${url}`)

    if(!response.ok) throw new Error('Could not fetch the data')

    const datas = await response.json()

    return datas
  } catch (error) {
    console.log(err);
  } 
}

export default simpleFetch
