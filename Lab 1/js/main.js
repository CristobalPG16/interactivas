/*
            comentario
         */
         //comentario
        
        //const a = 12;
        //let b = 21;

        //console.log("value -> " + b);

        //var c = 10;
        /*
        tipos de datos
            primitivos: number, string, boolean, simbolos, null, undefined
            objeto: propiedades y métodos
        */

        //let name = "JS";
        //let status = true;

        /* 
        operadores 
            = asignar un valor
            + suma en números, concatenación en strings
            - resta de números
            / división en números
            % operador de módulo
            NaN Not a Number
            * multiplicar números
            ** exponencial en números ej: 2 ** 2
            precedencia
                * / %
                + -
                =
        */

        /*
        comparadores
        < menor que
        > mayor que
        >= mayor igual
        <= menor igual
        === igualdad
        !== diferente de
        */

        /*
        condicionales
            if(condicion){
                //realizar acciones
            }

            if(condicion){
                //realizar acciones
            }else{
                //realizar otras acciones
            }

            if(condicion){
                //realizar acciones
            }else if(otra condicion){
                //realizar otras acciones
            }else{
                //realizar acciones por defecto
            }
        */

        /*
            Arrays
            const items = [];
            const elements = Array();
            -> length cantidad de elementos del array
            -> push agregar elemento al array
            -> pop remueve elemento del array
            -> shift remueve elemento del inicio
        */
        /*const items = [2, 4, 7];
        items.push(10);
        console.log(items);
        items.shift();
        console.log(items);*/

        /*
        while(condicion){
            acciones a realizar
            acciones sobre la condición
        }
        -> break se utiliza para interrumpir el ciclo

        do{
            acciones a realizar
            acciones sobre la condición
        }while(conición)

        for(contador condicion accion sobre contador){
            acciones a realizar
        }
        -> break

        for(const val of list){
            console.log(val);
        }

       
        const items = [2, 4, 7];

        let len = items.length;
        for(let i=0; i<len; i++){
            console.log(items[i]);
        }

        
        for (const val of items) {
            //console.log(val);
        }
        */

        /*
        funciones
        function nombre(params){
            acciones
        }
        -> return para retornar

        funciones de tipo Arrow/flecha
        ()=>{
            acciones
        }

        let data = (params)=>{
            acciones
        }

        */

        /*
        Objetos
        const obj = {};
        const obj = new Object()
        -> propiedades
            delete
        -> métodos
        */
        
        /*window.onload = (event) =>{
            console.log("loaded");
        }*/

        const copy = [

            { intro:"A multi-talented freelance web desiger & front-end developer" },
            { transform: "I transform ideas into digital solutions that help clients better connect with their audiences.I believe having a clean and minimal design is the best way to make websites elegant and functional..."},
            { simply:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
            { popular: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
            { passages: "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        ];

        let hasChanged;
        function change(){
            console.log("change");
            let title = document.body.getElementsByTagName('h1')[0];
            let btn = document.body.getElementsByTagName('button')[0];

            if(hasChanged){
                hasChanged = false;
                title.textContent = "A multi-talented freelance web desiger & front-end developer";
                btn.textContent = "Change this text";
            }else{
                hasChanged = true;
                title.textContent = "This is a new title now!";
                btn.textContent = "Back to default text"
            }
        }

        function openMobileMenu(){
            console.log("tap - menu");

            let nav = document.body.getElementsByClassName('top-nav')[0];

            nav.style.left = "0";
        }

        function closeMobileMenu(){
             let nav = document.body.getElementsByClassName('top-nav')[0];

             nav.style.left = "-25em";
        }

        function checkForm() {

            let hasErrors;

            let name = document.getElementById('contact_name');
            if (validator.isEmpty(name.value)) {
                name.classList.add("error");
                let msg = document.createElement("span");
                msg.innerHTML = "This field is required";
                showErrorMsg(name, msg);
                hasErrors = true;
            }

            let email = document.getElementById('contact_email');
            if (!validator.isEmail(email.value)) {
                console.log("not an email");
                email.classList.add("error");
                let msg = document.createElement("span");
                msg.innerHTML = "Valid email is required";
                showErrorMsg(email, msg);
                hasErrors = true;
            }

            let comment = document.getElementById('contact_message');
            if (validator.isEmpty(comment.value)) {
                comment.classList.add("error");
                let msg = document.createElement("span");
                msg.innerHTML = "This field is required";
                showErrorMsg(comment, msg);
                hasErrors = true;
            }

            if (hasErrors) {
                return false;
            } else { return true; }
        }

        function showErrorMsg(referenceNode, newNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            hideError(referenceNode);
        }

        

        function hideError(el) {
            el.addEventListener("blur", (event) => {
                el.classList.remove("error");
                if (el.nextElementSibling !== null) {
                    el.nextElementSibling.remove();
                }
            });
        }

        document.addEventListener('DOMContentLoaded', (event) =>{

            //console.log("DOM loaded");

            /*let el = document.body.getElementsByClassName('top-bar')[0];
            el.style.background = "red";*/

            /*let title = document.body.getElementsByTagName('h1')[0];
            title.textContent = "This is a new title now!";*/

            /*let about = document.body.getElementsByClassName('about-section')[0];
            about.insertAdjacentHTML('beforeend', "<p class='about-text'>I transform ideas into digital solutions that help clients better connect with their audiences. I believe having a clean and minimal design is the best way to make websites elegant and functional...</p>");*/

            let title = document.body.getElementsByTagName('h1')[0];
            title.textContent = copy[0].intro;
            AOS.init();

        });

        //for(let i=0; i<100000000; i++){ }

        //timers
        /*setTimeout(() => {
            console.log('time out');
        }, 1000);*/

        /*let interval = 1;
        let animate = setInterval(() => {
            
            if(interval < 10){
                console.log("interval");
                interval++;
            }else{
                clearInterval(animate);
            }
        }, 1000);*/