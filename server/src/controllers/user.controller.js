// import {  } from 'mongoose'
import { request, response } from 'express' 
import User from '../models/User.model.js'


const createUser = async (request, response) => {
  console.log(request)

  // try {
  //   const newuser = new User(request.body)
  //   await newuser.save()
  // } catch (error) {
  //   console.log(error)
  // }

  // const data 
  
  // try {
  //   console.log(req)
  //   const newUser = await new user.save()
  //   res.staus(200).json(newUser)
  // } catch (error) {
  //   console.log(error)
  //   res.staus(500).json({
  //     err: ':c' ,
  //     error: error.message
  //   })
  // }
  response.status(200).json({msg: 'it works', req: request.body})
}

export { createUser }
