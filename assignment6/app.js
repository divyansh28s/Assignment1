const inp = document.getElementById('screen');
const list = document.getElementById('list');
const addbtn = document.getElementById('add');

let i = 0;

addbtn.addEventListener('click', (e)=>{
    const todoText = [];
    const inpText = [];

    if(e.which === 1){
        
        inpText[i] = inp.value;
        const li=document.createElement('input');
        const d = document.createElement('div');
        const delbtn = document.createElement('button');
        delbtn.innerHTML='<i class="fas fa-trash"></i>';
        const updbtn = document.createElement('button');
        updbtn.innerHTML='<i class="fas fa-edit"></i>';
        const upbtn = document.createElement('button');
        upbtn.innerHTML='<i class="fas fa-arrow-alt-circle-up"></i>';
        const dwnbtn = document.createElement('button');
        dwnbtn.innerHTML='<i class="fas fa-arrow-alt-circle-down"></i>';
        li.disabled=true;
        d.setAttribute('class','abc');
        li.setAttribute('class','list-group-item bg-secondary text-white lit col-11');
        delbtn.setAttribute('class','btn bg-danger ab');
        updbtn.setAttribute('class','btn bg-primary ab');
        upbtn.setAttribute('class',' btn bg-success ab');
        dwnbtn.setAttribute('class','btn bg-warning  ab');
        li.value = inpText[i];
        todoText[i] = li.value;
        list.append(d);
        d.append(li);
        inp.value="";
        i++;
        console.log(i);         
        // li.after(d);
        li.after(delbtn)
        li.after(updbtn)
        li.after(dwnbtn)
        li.after(upbtn)
        updbtn.addEventListener('click',()=>{
                li.setAttribute('class','list-group-item bg-white text-dark lit col-11');
                let save = document.createElement('button');
                save.innerHTML='<i class="fas fa-save"></i>';
                save.setAttribute('class','btn btn-primary text-dark sv');
                delbtn.after(save);
                li.disabled=false;
                
                save.addEventListener('click', ()=>{
                    li.setAttribute('class','list-group-item bg-secondary text-white lit col-11');
                    li.disabled=true;
                    save.remove();
                })
        })
        delbtn.addEventListener('click',()=>{
            li.remove();
            updbtn.remove();
            delbtn.remove();
            upbtn.remove();
            dwnbtn.remove();
        })
        upbtn.addEventListener('click',function (e){
            let lists = this.parentElement;
            let vists = lists.previousElementSibling;
            if(vists != null){
                
                
                // lists.before(lists.previousElementSibling());
                vists.before(lists);
                console.log(vists);
            }
        })
        dwnbtn.addEventListener('click' , function (e){
            let lists = this.parentElement;
            let vists = lists.nextElementSibling;
            if(vists != null){
                vists.after(lists);
            }
        })
    }
    
})
