const display = document.getElementById('display'),
equal = document.getElementById('equal'),
buttons = Array.from(document.querySelectorAll('.button'));

buttons.map(button=> {
    button.addEventListener('click', (e) => {
        // console.log(e.target.innerText); << Console logs content of button.
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                if(display.innerText){
                    try{
                        display.innerText = eval(display.innerText);
                    }
                    catch(error){
                        alert(`JavaScript couldn't calculate "${display.innerText}".`);
                        display.innerText = '';
                        break;
                    }
                }
                break;
            default: 
                display.innerText += e.target.innerText;
        }
    });
});

document.addEventListener('keydown', (e)=>{
    // console.log(e.key) Console logs key press values
    switch(e.key){
        case 'Backspace':
            if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);
            }
            break;
        case 'Enter':
            if(display.innerText){
                display.innerText = eval(display.innerText);
            }
            break;
        case 'Escape':
            display.innerText = '';
            break;
        case 'Shift':
            break;
    
        default:
            display.innerText += e.key;
    }
});