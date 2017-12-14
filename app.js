var budgetController = (function(){
    
    //Some code
    
})();



var UIController = (function(){
    
    var DOMstrings = {
        inputType:'.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };
    
    return{
        getinput: function(){
            return{
                
             type : document.querySelector(DOMstrings.inputType).value,//will be either inc or exp
             description : document.querySelector(DOMstrings.inputDescription).value,
             value : document.querySelector(DOMstrings.inputValue).value
            };              
        },
        
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
    
})();


var controller = (function(budgetCtrl, UICtrl){
    
    var DOM = UICtrl.getDOMstrings();
    
    var ctrlAddItem = function(){
        
        //Get value from the fields
        var input = UICtrl.getinput();
        console.log(input);
        //Add item to budgetController
        //Add new item to UI
        //Calculate the budget
        //Display the budget
    }    
    document.querySelector(DOM.inputButton).addEventListener('click',ctrlAddItem);
    
    document.addEventListener('keypress',function(event){
        
        if(event.keyCode === 13 || event.which === 13){
            
            ctrlAddItem();
        }
        
        
    });
    
})(budgetController, UIController);