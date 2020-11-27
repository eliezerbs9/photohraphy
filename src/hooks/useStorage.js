import {useState, useEffect} from 'react'
import {storage} from '../firebase/config'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = storage.ref(file.name)

        storageRef.getDownloadURL().then((url) => {
            //CHECK IF ALREADY EXISTS A FILE WITH THAT SAME NAME 
            if(url){
                console.log('File with the same name already exists: ', url)
                //IF YES SET THE URL TO THA FILE'S URL AND PROGRESS 100% (NO FILE WAS UPLOADED THO)
                setUrl(url)
                setProgress(100)
            }else{
                //IF NOT, UPLOAD THAT FILE TO FIRESTIRE
                storageRef.put(file).on('state_changed', (snap) => {
                    //UPDATE PROGRESS BAR WITH A REAL TIME SNAP 
                    let percentage = (snap.bytesTransferred / snap.totalBytes ) * 100
                    setProgress(percentage)
                }, (err) => {
                    setError(err)
                }, async () => {
                    //WHEN ITS DONE RETURNS A URL OF THE UPLOADED FILE
                    const url = await storageRef.getDownloadURL()
                    console.log('getDownloadURL at the end: ', url)
                    setUrl(url)
                })
            }
        })
    },[file])

    return {progress, error, url}

}

export default useStorage