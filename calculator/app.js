(function(){

    let input= document.querySelector('.input');
    let buttons= document.querySelectorAll('.btn');
    let clear= document.querySelector('.btn-clear');
    let equal= document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value= e.target.dataset.num || e.target.dataset.operator;
            input.value += value;
        });
    });

    equal.addEventListener('click', function(e){
        if(input.value == ''){
            alert("Enter Something");
        }else{
           let a = input.value;
           let b = eval(a);
           input.value = b;
        }
    });

    clear.addEventListener('click', function(e){
        input.value = "";
    })
})();