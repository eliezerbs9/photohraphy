import {auth} from '../firebase/config'
import {createProfile} from './firestore'

// const [user, setUser] = useState(null)


export const login =  async (email, password) => {
    try{
        console.log('log in')
        await auth.signInWithEmailAndPassword(email, password)
    }catch(err){
        console.log(err)
    }
}

export const logout = () => {
    console.log('logging out')
    return auth.signOut()
}

export const register = async (name, email, password) => {
    console.log(`REGISTERING ${name} ${email} ${password}`)
    try{
        let user = await auth.createUserWithEmailAndPassword(email, password)
        let profile = {
            about_me: "",
            birth_date: "",
            location: "",
            name: name,
            photo: ""
        }
        console.log('REGISTERED USER: ', user)
        createProfile(user.user.uid, profile)
        return user.user
    }catch(error){
        console.error(error)
    }
}

export const currentUser = async () => {
    let user = await auth.currentUser
    return user
}



