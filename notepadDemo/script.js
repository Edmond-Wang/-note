/* eslint-disable no-undef */
new Vue({
    el: "#todoapp",
    data: {
        list: ["早安", "午安", "晚安"],
        inputValue: ""
    },
    methods: {
        add: function () {
            if (this.inputValue != "" && this.inputValue.replace(/ /g, "").length == 0) {
                alert("不能全为空格");
                this.inputValue = "";
            }
            else if (this.inputValue != "") {
                this.list.push(this.inputValue);
                this.inputValue = "";
            }
        },
        remove: function (index) {
            this.list.splice(index, 1);
        },
        removeAll: function () {
            this.list = [];
        }
    },
})