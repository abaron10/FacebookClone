var app = new Vue({
    el: '#main',
    delimiters: ['[[',']]'],
    data: {
        header: 'Vues ',
        hijos:'NO',
        user:'',
        password:'',
        active: 0,
        active2:0
     
    },
    methods: {
        // fetchData: function() {
        //     this.$http.get('/test').then(response =>{
        //         return response.body;

        //     }, response => {

        //     console.log("An error")
        //     });
        // }
        logIn: function () {

            let par = {

                user: this.user,
                password: this.password
            
              
            };
     
            var url = "/testing";
            fetch(url, {
                method: "POST",
                body: JSON.stringify(
                    par
                 
                ),
                headers: {
                    'Accept': "application/json",
                    "Content-Type": "application/json"
                }

            }).then(response => {
                if (response.ok) {
                    return response.text();

                } else {
                    alert("error");

                }

            }).then(MyJson => {
                console.log(MyJson);
                
            })
        },
        mouseOver: function(){
            this.active = 1;   
        },
        mouseOut: function(){
            this.active = 0;   
        },
        mouseOver2: function(){
            this.active2 = 1;   
        },
        mouseOut2: function(){
            this.active2 = 0;   
        }

    }
   

});