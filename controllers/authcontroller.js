//const User = require('../models/user')

const test =(req,res) =>{
    res.json('test is working')
}
const regsiterUser=async(req,res)=>{
   try{
      const{name,email,password}=req.body;
      // check if name was entered
      if(!name){
        return res.json({
            error :'name is reuired'
        })
      };
      //check if password is entered
      if(!password|| password.length < 6){
        return res.json({
            error: 'password is required and  should be atleast 6 charc long'
        })
      };
      //check email 
      const exist = await User.findOne({email})
    if(exist) {
        return res.json({
            error:'email is taken'
        })
    };
    const user = await User.create({
         name, email,password
    })

    return res.json(user)
   } catch(error){
    console.log(error)

   }
}
module.exports ={
    test,
    regsiterUser
}