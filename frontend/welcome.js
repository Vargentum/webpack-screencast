export default function(who) {

  // EnvironmentPlugin
  if (process.env.NODE_ENV === 'development') {
    console.log(process.env) // {}
  }

  // DefinePlugin
  // if (NODE_ENV === 'development') {
  //   console.log(process.env) // {}
  // }

  console.log('Hello ' + who)
}