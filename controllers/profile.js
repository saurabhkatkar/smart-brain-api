
const handleProfile=(req, res,db)=>{
	const { id } = req.params;
	var found = false;
	db('users').where({id})
	.then(user => {
		if(user.length)
		res.json(user[0]);
		else
		res.status(400).json('Not Found'); 
	})
	
}

module.exports ={
	handleProfile: handleProfile
}