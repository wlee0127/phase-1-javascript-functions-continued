// code your solution here
function saturdayFun(arg1) {
    if (arg1===undefined) {
        return "This Saturday, I want to roller-skate!"
    } else {
        return `This Saturday, I want to ${arg1}!`
    }
}

function mondayWork(arg2) {
    if (arg2===undefined) {
        return "This Monday, I will go to the office."
    } else {
        return `This Monday, I will ${arg2}.`
    }

}

    function wrapAdjective(arg1) {
            return function(arg2) {
                return `You are ${arg1}${arg2}${arg1}!`   
            }
        
    }

    wrapAdjective("||")("a hard worker")
    
