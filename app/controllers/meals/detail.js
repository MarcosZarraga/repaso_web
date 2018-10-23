import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		editarMeal(model){
			model.save().then(()=>{
				this.transitionToRoute('meals.index');
			})

		}
	}
});
