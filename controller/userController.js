const crudSchema=require("../model/crudSchemaModel")

const getUser=async(req, res)=> {
    try{
      console.log("get Request");
      const crud=await crudSchema.find()
      res.json(crud)
    }catch(err){
    res.send("err" +err);
    }
  };


  const addUser=async (req, res) => {
      console.log(req.body);
    
      const data = new crudSchema({
        name: req.body.name,
        email: req.body.email,
        sub: req.body.sub,
      });
    
      try {
        const addres = await data.save();
        res.json({
          status: "succesfull",
          data: addres,
        });
      } catch (err) {
        res.send({
          status: "Failure",
          message: "Error Occure" + err.message,
        });
      }
    };


    const updateUser= async(req,res)=>{
  console.log(req.params.id);
  try{
    const crud=await crudSchema.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true});
  }catch(err){
    res.send("err" +err)

  }
}

const deleteUser=
async(req,res)=>{
  await crudSchema.findByIdAndDelete(req.params.id);
try{
  res.status(204).send().json({
    status:"Success",
    data:{},
  });
}catch(err){
  res.status(500).json({
    status:"Failed",
    message:err,
  })
}
}

  module.exports={
    getUser,addUser,deleteUser,updateUser
  }