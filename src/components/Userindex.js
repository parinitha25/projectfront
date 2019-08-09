// import axios from 'axios'

// export const register = newUser => {
//   return axios
//     .post('/signup', {
//       FirstName:newUser.FirstName,
//       LastName:newUser.LastName,
//       Email: newUser.Email,
//       Password: newUser.Password,
//       Phone: newUser.Phone,
//     })
//     .then(res => {
//       console.log('user registerd sucessfully')
//     })
// }


// export const login = user => {
//   return axios
//     .post('/signin', {
//       Email: user.Email,
//       Password: user.Password
//     })
    
//     .then(res => {
//       console.log('login sucessfully')
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }
// export const appointment = user => {
//   return axios
//     .post('/appt', {
//       email: user.email,
//       name: user.name,
//       date:user.date,
//       time:user.time

//     })
//     .then(res => {
//       console.log('Appointment sucessfully')
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }