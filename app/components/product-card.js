import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		editarComponent(){
			this.onUpdate();
		},
		eliminarComponent(){
			this.onDelete();
		}
	}
});
