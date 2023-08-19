// Code Keypad Component Here

function Keypad (){

    function handleKeypad(){
        console.log("Entering password...");
    }
    return (
        <div>
             
            <input type="password" onChange={handleKeypad}/>
            
        </div>
    )
}

export default Keypad;