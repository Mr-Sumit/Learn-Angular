app.directive('draggable',function(){
    return function(scope,element){

        var ele = element[0];
        ele.draggable = true;
        ele.addEventListener('dragstart',function(e){
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('Text',this.id);
            this.classList.add('drag');
            return false;
        },false);
        ele.addEventListener('dragend',function(e){
            this.classList.remove('drag');
            return false;
        },false);
    };
});

