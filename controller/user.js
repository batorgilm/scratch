const User = require("../model/User")

const users = async (req, res) => {
try {
    const users = await User.find({}).populate({path: 'newses',})
    res.status(200).send({
        users
    })
} catch (error) {
    res.status(400).send({
        error
    }) 
}
} 

const create = async (req, res) => {
    try {
        const users = await User.create(req.body)
        res.status(200).send({
            users
        })
    } catch (error) {
        res.status(400).send({
            error
        }) 
    }
    }
    
    const remove = async (req, res) => {
        try {
          const user = await User.findByIdAndRemove(req.params.id);
      
          res.status(200).send({
           success: user._id
          });
        } catch (error) {
          res.status(400).send({
            error,
          });
        }
      };
      
    

module.exports = {users, create,remove}