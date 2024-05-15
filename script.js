



function sqrt(variable){

    let result;

  parseInt(variable);

    try{
        if( variable < 0){
            throw new Error("The value must be greater than ZERO.");
        }
        result = Math.sqrt(variable);
        console.log(`The result is: ${result}`);
    }catch(error){
        console.log("An error occurred:", error.message);
    }
}
sqrt(-4);