

const app={
    init(){
        this.burgerMenu=document.querySelector('.nav-button');
        this.leMain=document.querySelector('.main');
        document.documentElement.classList.add('js-enabled');
        this.burgerMenu.addEventListener('click',() => { this.f_burger() });


    },
    f_burger(){
        if(this.leMain.classList.contains('is-opened')){
            this.leMain.classList.remove('is-opened');
        }
        else{
            this.leMain.classList.add('is-opened');
        }



        //or
        //leMain.classList.toggle('is-opened')


    }


}
app.init();