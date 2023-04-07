const Tasks = require('../Models/Tasks');


//create task
module.exports.createTask = (req, res)=>{
    Tasks.create({
        title: req.body.title,
        desc: req.body.desc
    }).then(val =>{
        //console.log(val);
        res.json({success: "Task created!"})
    }).catch(err =>{
        return res.json({error: err});
    });

    
}

//fetch all tasks
module.exports.getAllTasks = async (req, res)=>{
    await Tasks.find({})
    .then((doc)=>{
        res.json({tasks:doc});
    }).catch((err)=>{
        console.log(err);
    });
    
}

//delete task
module.exports.deleteTask = async function (req, res){
   await Tasks.deleteOne({_id: req.body.id});
   return res.json({'success':'Task deleted!'})
}

//update the task
module.exports.updateTask = async function(req, res){
    Tasks.findById({_id:req.body.id})
    .then(async (doc) =>{
        if(doc){
            doc.title = req.body.title;
            doc.desc = req.body.desc;
            await doc.save();
            return res.json({message:'Task updated!'})
        }
    }).catch((err)=>{
        return res.json({'error': err});
    })
}