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
    // case 'REMOVE':
    //   firebase.database().ref(`tetrads/${data.uid}/${action.el}/${action.i}`)
    //     .update(null, err => {
    //       if (err) {
    //         alert('We had an issue connecting to the database. Sorry about that! Please try again.')
    //         return
    //       }
    //     })
    //   return data
    case 'STORY':
      console.log('story')
      return {...data, story:Object.values(action.update)}
    case 'AESTH':
      return {...data, aesth:Object.values(action.update)}
    case 'MECH':
      return {...data, mech:Object.values(action.update)}
    case 'TECH':
      return {...data, tech:Object.values(action.update)}
    default:
      alert('Error updating game data')
  }
}
