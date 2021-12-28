const app = Vue.createApp({
  data() {
    return { 
      enteredValue: '',
      values: [],
      taskListIsVisible: true
    };
  },
  methods: {
    addList(){
      this.values.push(this.enteredValue);
    },
    toggleTaskList(){
      this.taskListIsVisible = !taskListIsVisible;
    },
  }
});

app.mount('#assignment');
