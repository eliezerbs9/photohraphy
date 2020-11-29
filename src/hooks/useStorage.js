import {useState, useEffect} from 'react'
import {storage} from '../firebase/config'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        console.log('creating ref with: ', file.name)
        const storageRef = storage.ref(file.name)
        console.log('ref created: ', storageRef)

        storageRef.getDownloadURL().then((url) => {
            //IF THERE'S URL, IT MEANS THAT THE FILE ITS ALREADY UPLOADED
            console.log('File with the same name already exists: ', url)
            setUrl(url)
            setProgress(100)
        }).catch(error => {
            //IF THERE"S AN ERROR. IT MEANS THE THE FILE HAS NOT BEEN UPLOADED YEAT
            console.log('File with the same name DOES NOT exists: ', url)
            storageRef.put(file).on('state_changed', (snap) => {
                //UPDATE PROGRESS BAR WITH A REAL TIME SNAP 
                let percentage = (snap.bytesTransferred / snap.totalBytes ) * 100
                setProgress(percentage)
            }, (err) => {
                console.error('Error adding file: ',err)
                setError(err)
            }, async () => {
                //WHEN ITS DONE RETURNS A URL OF THE UPLOADED FILE
                const url = await storageRef.getDownloadURL()
                console.log('getDownloadURL at the end: ', url)
                setUrl(url)
            })
            console.log('Error useStorage: ', error)
        })

    },[file])

    return {progress, error, url}

}

export default useStorage