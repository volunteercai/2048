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
			changeCells(event.keyCode);
			setTimeout(function(){
				updateNumberCells();
				randomOneNumber();
				$('#score').text(score);				
			},40);
			return false;
		}
	});
});

function newGame(){
	init();
	updateNumberCells();
	randomOneNumber();
	randomOneNumber();
}

function init(){
	for(var i=0;i<4;i++){
		cells[i]=new Array(4);
	}
	score = 0;
	$('#score').text(score);
	overFlag=false;
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
				if(number>=1024){
					$('#number-cell-'+i+'-'+j).css('font-size','40px');
				}
			}
		}
	}
}