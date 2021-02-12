import firebase from 'firebase'

export default function tetradSave(data, action) {
  switch (action.type) {
    case 'RESET':
      return {
        uid:null,
        name:null,
        mech:[],
        tech:[],
        story:[],
        aesth:[],
      }
    case 'CREATE':
      const uid = firebase.database().ref(`/tetrads`)
        .push()
        .getKey()
      firebase.database().ref(`/tetrads/${uid}`)
        .set({name:action.name,aesth:true,mech:true,story:true,tech:true}, err => {
          if (err) {
            alert('We had an issue connecting to the database. Sorry about that! Please try again.')
            return
          }
        })
      return {...data, uid:uid, name:action.name}
    case 'OPEN':
      return {...data, uid:action.uid, name:action.name}
    case 'STORY':
      return {...data, story:action.update}
    case 'AESTH':
      return {...data, aesth:action.update}
    case 'MECH':
      return {...data, mech:action.update}
    case 'TECH':
      return {...data, tech:action.update}
    default:
      alert('Error updating game data')
  }
}
