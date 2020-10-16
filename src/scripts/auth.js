import {auth} from '../firebase/config'

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
        await auth.createUserWithEmailAndPassword(email, password)
    }catch(error){
        console.error(error)
    }
    return await auth.currentUser.updateProfile({
        displayName: name
    })
}

export const currentUser = async () => {
    let user = await auth.currentUser
    return user
}



