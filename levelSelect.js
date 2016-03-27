var LevelSelect = Vue.extend({
    name: 'LevelSelect',
    template: 
    	'<div class="level_select">'+ 
	    	'<select @change="createNext($event,$index)" v-for="item in level">' +
	        	'<option value="null">{{configData.head}}</option>' +
	        	'<option v-for="value in item" :value="$key" track-by="$index">{{value.name}}</option>' +
	        '</select>'+
	        '<button @click="resetAll()">重置</button>'+
	     '</div>',
    data: function() {
        return {
            level: [this.configData.data],
            result: {}
        }
    },
    props: ['configData'],
    methods: {
        createNext: function(ev, index) {
            this.level.length = index + 1;
            var cell = this.level[index][ev.target.value].cell;
            if (cell) {
                this.level.push(cell)
            }
            this.configData.result[index] = this.level[index][ev.target.value].name;
        },
        resetAll: function(){

        	this.level = [this.configData.data];
        	this.configData.result = {};
        	document.querySelectorAll('.level_select')[0].children[0].value = null;
        	console.log(this.level,this.configData.result);
        }
    }
})
