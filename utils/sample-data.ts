import { User, SubmitAnswer, SubmitNewLevel } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

type sampleCreateLevelType = {
  submit: string,
  approved: boolean,
  error?: string
}

export const sampleCreateLevel = (payload:SubmitNewLevel) : Promise<sampleCreateLevelType> => {
  // Has three outcome either 401 - Forbidden , 201- Created and 400 - Bad Request
  if(payload.secretphrase && payload.submission_input){
    // If request is valid
    // MALFORMED BODY
    return new Promise(()=>{
      return {"submit":"failed","approved":false,"error":"Malformed body"}
    })
    //
  }
  return new Promise(()=>{
    return {"submit":"approved","approved":true}
  })
}

export const sampleSubmitAnswer = (payload : SubmitAnswer):boolean=>{
  // Will imitiate the call to the API
  return false
}