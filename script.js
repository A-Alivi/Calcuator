
let str1 = "";
let result = ""



function handleClick(id)
{
    str1  = str1+ id;
    
    $(document).ready(function(){
        
        $(".screen").text(str1);

    
    })

}


function calculate()
{   
    
        result = eval(str1);
        str1 = "";

        $(document).ready(function(){
            
            $(".screen").text(result);

        })
    
    
}

function clearScreen()
{
    str1 = "";
    result = "";
    $(document).ready(function(){
        
        $(".screen").text("");

    })
    
}




