var LevelSelect = Vue.extend({
    name: 'LevelSelect',
    template: '<select @change="createNext($event,$index)" v-for="item in level">' +
        '<option value>{{configData.head}}</option>' +
        '<option v-for="value in item" :value="$key" track-by="$index">{{value.name}}</option>' +
        '</select>',
    data: function() {
        return {
            level: [this.configData.data],
            result: {

            }
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
            this.result[index] = this.level[index][ev.target.value].name;
        }
    }
})
