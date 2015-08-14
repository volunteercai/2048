$(function(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			$('#game-pane').append('<div class="cell" id="cell-'+i+'-'+j+'"></div>');
			$('#cell-'+i+'-'+j).css('left',getLeft(j))
							  .css('top',getTop(i));
		}
	}
	newGame();
	$(document).keydown(function(event){
		if(event.keyCode==38||event.keyCode==40||event.keyCode==37||event.keyCode==39){
			//38上
			var numberCells = $('.number-cell');
			if(event.keyCode==38){
				numberCells.each(function(){
					var t = parseInt(getTop(0));
					var i = getIbyId(this.id);
					var j = getJbyId(this.id);
					var temp = cells[i][j];
					cells[i][j]=0;
					cells[(t-20)/120][j]=temp;
					$(this).animate({
						top:t+'px'
					},50);
				});
			}
			//40下
			if(event.keyCode==40){
				numberCells.each(function(){
					var t = parseInt(getTop(3));
					var i = getIbyId(this.id);
					var j = getJbyId(this.id);
					var temp = cells[i][j];
					cells[i][j]=0;
					cells[(t-20)/120][j]=temp;
					$(this).animate({
						top:t+'px'
					},50);
				});
			}
			//37左
			if(event.keyCode==37){
				numberCells.each(function(){
					var l = parseInt(getLeft(0));
					var i = getIbyId(this.id);
					var j = getJbyId(this.id);
					var temp = cells[i][j];
					cells[i][j]=0;
					cells[(l-20)/120][j]=temp;
					$(this).animate({
						left:l+'px'
					},50);
				});
			}
			//39右
			if(event.keyCode==39){
				numberCells.each(function(){
					var l = parseInt(getLeft(3));
					console.log(l);
					var i = getIbyId(this.id);
					var j = getJbyId(this.id);
					var temp = cells[i][j];
					cells[i][j]=0;
					cells[(l-20)/120][j]=temp;
					$(this).animate({
						left:l+'px'
					},50);
				});
			}
			//randomOneNumber();
			//updateNumberCells();
			return false;
		}
	});
});

function newGame(){
	init();
	randomOneNumber();
	randomOneNumber();
	updateNumberCells();
}

function init(){
	for(var i=0;i<4;i++){
		cells[i]=new Array();
	}
	score = 0;
	$('#score').text(score);
}

function updateNumberCells(){
	$('.number-cell').remove();
	for(i=0;i<4;i++){
		for(j=0;j<4;j++){
			if(cells[i][j]){
				var number = cells[i][j];
				$('#game-pane').append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
				$('#number-cell-'+i+'-'+j)
						 .css('width','100px')
						 .css('height','100px')
						 .css('left',getLeft(j))
						 .css('top',getTop(i))
						 .css('background-color',getBgColor(number))
						 .css('color',getNumberColor(number))
						 .text(number);
			}
		}
	}
}