// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
};

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(wrapper="*") {
    const innerFunction = function(msg="special"){
        return `You are ${wrapper}${msg}${wrapper}!`
    }
    return innerFunction;
};