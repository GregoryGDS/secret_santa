module.exports = (app) => { //app por affecter toutes les routes
	//export = permet d'utiliser dans d'autres fichier via require
	const userController = require('../controllers/userController');

	app.route('/')
	.get(function(req, res) {
    res.render('index.ejs');
	});

	app.route('/user')
	.get(userController.list_all_users)
	.post(userController.create_a_user);

	app.route('/user/:user_id')
	.get(userController.get_a_user)
	.put(userController.update_a_user)
	.delete(userController.delete_a_user);

	// plus logique si chemin comme ça car lié au groupe ???
	app.route('/group/:name_group/user')
	.get(userController.get_all_user_in_group);

}