var app = new Vue({
    el: '#body',
    data:{
        p_Change: '',
        p_Reason: '',
        p_Description: '',
        p_StartDate: '',
        p_EndDate: '',
        p_Budget: '',
    },
    methods: {
      submitValues: function () {
        console.log({ nid: parseInt(this.nid) }) 
          axios.post('/rest/CreateChangeRequest', {
            p_Code: this.p_Code,
            p_Name: this.p_Name,
            p_Description: this.p_Description,
            p_StartDate: this.p_StartDate,
            p_EndDate: this.p_EndDate,
            p_Budget: this.p_Budget
            }).then(response => {
                window.location.href = '/project/createprojectplan.html';
            }).catch(error => {
                console.log(error.response)
            });
        }
      }
    
})