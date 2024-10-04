import {useState, useEffect} from "react"

async function fetchData(url) {
  const rs = await fetch(url);
  const json = await rs.json();
  return json;
} 

export default function GetPhotos({ category }) {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    if (category) {
      fetchData(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${category}&per_page=24&format=json&nojsoncallback=1`)
        .then((data) => setPhotos(data.photos.photo))
    }
  }, [category])

  return (
    <>
      <div className='flex flex-wrap gap-9 mt-8 justify-center'>
        {photos.map(photo => (
          <figure key={photo.id} className='size-40'>
            <img className='w-full h-full' 
              src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} 
              alt="" />
          </figure>
        ))}
      </div>
    </>
  )
}
