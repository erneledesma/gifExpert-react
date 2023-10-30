

import { useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = () => {

    const [images, setImages] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs();
        setImages(newImages)
        setLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])



  return {
    images,
    isLoading
  }
}
