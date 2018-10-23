import Ember from 'ember';

export default Ember.Controller.extend({
	actions :{
		crearProducto(){
			this.store.createRecord('product',{
				name: this.get('nombre'),
				calories: this.get('calorias')
			}).save().then(()=>{
				this.set("nombre","")
				this.set("calorias","")
			})
		},
		editarTemplate(product){
			product.save();
		},
		eliminarTemplate(product){
			product.destroyRecord();
		}
	}
});
