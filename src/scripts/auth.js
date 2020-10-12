import {auth} from '../firebase/config'

// const [user, setUser] = useState(null)


export const login =  (email, password) => {
    try{
        console.log('log in')
        auth.signInWithEmailAndPassword(email, password)
    }catch(err){
        console.log(err)
    }
}

export const logout = () => {
    console.log('logging out')
    return auth.signOut()
}

export const register =  (name, email, password) => {
    console.log(`REGISTERING ${name} ${email} ${password}`)
     auth.createUserWithEmailAndPassword(email, password)
    return auth.currentUser.updateProfile({
        displayName: name
    })
}

export const onAuthStateChange =  () => {
    auth.onAuthStateChanged((user) => {
        if(user){
            console.log('user  logged in')
            return true
        }else{
            console.log('user  logged out')
            return false
        }
    })
}



