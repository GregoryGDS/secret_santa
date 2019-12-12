module.exports = (app) => { //app por affecter toutes les routes
	//export = permet d'utiliser dans d'autres fichier via require
	const userController = require('../controllers/userController');

	app.route('/user')
	.get(userController.list_all_users)
	.post(userController.create_a_user);

	app.route('/user/:user_id')
	.get(userController.get_a_user)
	.put(userController.update_a_user)
	.delete(userController.delete_a_user);
}