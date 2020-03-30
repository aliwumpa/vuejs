//Vue-1
var app = new Vue({
    el: '#app-vue1',
    data: {
      title: 'THE IDOLM@STER: Shiny Colors'
    }
  })
//vue-2
var app2 = new Vue({
    el: '#app-vue2',
    data: {
        createdby: 'Hello, Producer Wumpa !!!'
    }
})
//vue-navbar
var navbar = new Vue({
    el: '#navbar',
    data: {
        url_page1: '/page1.html',
        url_page2: '/page2.html',
        name_page1: 'Page 1',
        name_page2: 'Page 2'
    }
})


//vue-component days
Vue.component('days', {
    props: ['daysprops'],
    template:   `   <li>
                        <p class="wumpa-p">
                            {{ daysprops.text }}
                        </p>
                        <span>
                            <img class="img-shiny" v-bind:src="daysprops.image">
                        </span>
                        <card></card>   
                    </li>
                `
})

//vue-component maids
Vue.component('maids', {
    props: ['maidsprops'],
    template: `    <li>
                        <div class="wrapper-maid">
                            <p class="wumpa2-p">
                                {{ maidsprops.text}}
                            </p>
                            <span>
                                <img class="img-maid" v-bind:src="maidsprops.image">
                            </span>
                        </div>
                   </li>

              `
})

//vue-component card
Vue.component('card', {
    props: ['cardprops'],
    template: `
                <div class="container-card">
                    <h4>Profile</h4>
                    <ul class="list-idol">
                        <li>Name : {{}}</li>
                        <li>Height : {{}}</li>
                        <li>Birthday : {{}}</li>
                    </ul>
                </div>
              `

})

//vue-component footer
var footervar = new Vue({
    el: '#footer-div',
    template: `
                <footer class="footer">
                    <hr class="hr-footer">
                    </hr>
                    <div class="wrapper-p">
                        <p class="footer-p">&copy; Wumpa Producer 23-03-2020 Shiny Colors Website Training</p>
                    </div>
                </footer>
              `
})

//Vue-3
var app3 = new Vue({
    el: '#app-vue3',
    data: {
        toggle_list: false,
        toggle_once: true,

        days : [
            { id: 0, text: 'Monday', image: 'img/wf1.jfif'},
            { id: 1, text: 'Tuesday', image: 'img/wf2.jfif'},
            { id: 2, text: 'Wednesday', image: 'img/wf3.jfif'},
            { id: 3, text: 'Thursday', image: 'img/wf4.jfif'},
            { id: 4, text: 'Friday', image: 'img/wf5.jfif'}
          ],
        
        maidsitem : [
            { id: 0, text: 'Maid 1', image: 'img/chara_kiriko.png'},
            { id: 1, text: 'Maid 2', image: 'img/chara_kogane.png'},
            { id: 2, text: 'Maid 3', image: 'img/chara_yuika.png'},
            { id: 3, text: 'Butler', image: 'img/chara_sakuya.png'},
            { id: 4, text: 'Vacuum Cleaner', image: 'img/chara_mamimi.png'}
        ],
        
          profile : [
              { id: 0, name: '', height: 1, birthday: ''},
              { id: 1, name: '', height: 1, birthday: ''},
              { id: 2, name: '', height: 1, birthday: ''},
              { id: 3, name: '', height: 1, birthday: ''},
              { id: 4, name: '', height: 1, birthday: ''}
        ],

    },

    methods : {
        OnClickEvent : function () {
            this.toggle_list = !this.toggle_list

            element = this.$refs.appvue3
            element.scrollIntoView()         
        },

        OnClickOnce : function () {
            console.log(!this.toggle_list)
            this.toggle_list = false
        }

        // ShowValue : function(value){
        //     console.log(value)
        // }
    }
    
})


// var app4 = new Vue ({
//     el: "#app-vue4",
//     data: {
//         wf1 : 'img/wf1.jfif'
//     }
// })

//Component-block

// javascript for all example disrective

// var vtoggle = new Vue ({
//     el: '#section-button',
//     data: {
//       toggle_list: false
//     }
// })

// list1 = document.querySelector('.ul-1').setAttribute("v-if", "toggle_list");
// list2 = document.querySelector('.ul-2').setAttribute("v-if", "toggle_list");
// console.log(toggle_list);
var exfunction = new Vue ({

})

var exmethod = new Vue ({

})

var excomputed = new Vue ({

})

var vtext = new Vue ({
    el : "#v-text-wrapper",
    data : {
        text : 'Magallan is cute penguin'
    }
})

var vbind = new Vue ({
    el : "#v-bind-wrapper",
    data : {
        hrefex : 'https://shinycolors.idolmaster.jp/idol/noctchill/',
        urlex : 'https://pbs.twimg.com/media/ETticZEVAAA-M8a.jpg',
        srcex : 'img/mano_src.png'
    }
})

var vhtml = new Vue ({
    el : "#v-html-wrapper",
    data : {
        content : `
                    <div>This is div
                    <h4>This is header</h4>
                    <p>This is paragraph </p>
                    </div> 
                  `
    }
})


Vue.component('exloop', {
    props: ['exloopprops'],
    template: `
                <li class="single-list-loop" v-bind:id="exloopprops.id">
                    <p>{{ exloopprops.name }}</p>
                    <p>{{ exloopprops.height}}</p>
                </li>
               `

})

Vue.component('exloopobject', {
    props: ['exprops','extitle','exname'],
    template: `
                <li class="multiple-object">
                    <span>Using v-for to get multiple object : name: {{ exprops.name }} title : {{ exprops.title }}</span>
                </li>

                <li class="single-object">
                    <span>Using v-bind to get single object index : name : {{ extitle }} title : {{ exname }}</span>
                </li>
               `
})

Vue.component('exsingleobject', {
    props: ['extitle','exname'],
    template: `
                <li class="single-object">
                    <span>Using v-bind to get single object index : name : {{ extitle }} title : {{ exname }}</span>
                </li>
               `
})

var  vloop = new Vue ({
    el : '#v-loop-wrapper',
    data : {
        listidol : [
            {id:1 ,name : 'Hinata Kaho', height : '160 cm' },
            {id:2 ,name : 'Shirase Sakuya', height : '172 cm'}
        ],

        listobject : [
        {
            id : 1,
            title : 'Slavemancer',
            name : 'Dealer',
            book : 'Kaching~'
        },

        {
            id : 2,
            title : 'Miku',
            name : 'Hatsune',
            book : 'Re Live'
        }
        
        ]

        }
})

//Route example

