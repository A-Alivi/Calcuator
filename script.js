
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


// $(document).ready(function()
// {

    
//     var str1 = ""
//     $("#one").click(function(){

//         $(".screen").text("1")
//         str1 += $(".screen").text()
//     })

//         $("#two").click(function(){
//         $(".screen").text("2")
//         str1.concat("Abdul")
//         console.log(str1.length)

//     })
//         $("#three").click(function(){
//         $(".screen").text("3")
//         str1.concat($(".screen").text())
//         console.log(str1.length)

//     })
//         $("#four").click(function(){
//         $(".screen").text("4")
//         str1.concat($(".screen").text())
//         console.log(str1.length)
//     })
//         $("#five").click(function(){
//         $(".screen").text("5")
//         str1.concat($(".screen").text())
//         console.log(str1.length)
//     })
//         $("#six").click(function(){
//         $(".screen").text("6")
//         str1.concat($(".screen").text())
//         console.log(str1.length)
//     })
//         $("#seven").click(function(){
//         $(".screen").text("7")
//         str1.concat($(".screen").text())
//         console.log(str1.length)
//     })
//         $("#eight").click(function(){
//         $(".screen").text("8")
//         str1.concat($(".screen").text())
//         console.log(str1.length)
//     })
//         $("#nine").click(function(){
//         $(".screen").text("9")
//         str1.concat($(".screen").text())
//         console.log(str1.length)
//     })
//         $("#10").click(function(){
//         $(".screen").text("10")
//         str1.concat($(".screen").text())
//         console.log(str1.length)
//     })
//         $("#equal").click(function(){
//         $(".screen").text("=")
//         str1.concat($(".screen").text())
//         console.log(str1.length)
//     })
//         $("#add").click(function(){
//         $(".screen").text("+")
//         str1.concat($(".screen").text())
//         console.log(str1.length)
//     })
//         $("#zero").click(function(){
//         $(".screen").text("0")
//         str1.concat($(".screen").text())
//         console.log(str1.length)
//     })

// })


