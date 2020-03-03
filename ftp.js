var EasyFtp = require('easy-ftp')
var ftp = new EasyFtp();
var config = {
  host: 'hostname',
  port: 21,
  username: 'username',
  password: 'password',
  type: 'ftp'
}

ftp.connect(config)

//upload dir example ??
ftp.upload("./2019-12-02", "/", (err)=> {

  if(err) {console.log(err)}
  setTimeout(()=> {
    console.log(`upload file successfully`)
  },1000)
})
