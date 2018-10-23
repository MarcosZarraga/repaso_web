import Ember from 'ember';

export default Ember.Controller.extend({
	actions :{
		crearMeal(){
			this.store.createRecord('meal', {name:this.get('name')}).save().then(()=>{
				this.set('name',"");
			});
		}
	}
});
