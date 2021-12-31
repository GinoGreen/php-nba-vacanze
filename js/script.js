const app = new Vue({
   el: '#app',
   data: {
      matches: [],
      citiesList: [],
      city: '',
      apiURL: 'http://localhost/php-nba-vacanze/server.php?',
   },
   mounted() {
      this.getApi();
   },
   methods: {
      getApi() {
         axios.get(this.apiURL, {
            params: {
               city: this.city,
            }
         })
         .then( response => {
            this.matches = response.data;
            console.log(this.matches);
         })
         .catch( error => {
            console.log(error);
         });
      },
      getCitiesList() {
         this.matches.forEach(match => {
            if (!this.citiesList.includes(match.city)) {
               this.citiesList.push(match.city);
            }
         });
         return this.citiesList;
      },
      getImagePath(imgName){
         let path = 'img/';
         return path += imgName;
      },
   },
})