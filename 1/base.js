var cells = new Array();
var score = 0;

function getLeft(j){
	return 120*j+20+'px';
}

function getTop(i){
	return 120*i+20+'px';
}

function getBgColor(number){
	switch(number){
		case 2:return '#eee4da';
		case 4:return '#ede0c8';
		case 8:return '#f2b179';
		case 16:return '#f59563';
		case 32:return '#f67e5f';
		case 64:return '#f65e3b';
		case 128:return '#edcc61';
		case 512:return '#9c0';
		default:return '#33b5e5';
	}
}

function getNumberColor(number){
	if(number<=4){
		return '#776e65';
	}
	return '#000';
}

function randomOneNumber(){
	if(nospace()){
		return false;
	}
	do{
		//生成两个0-3的随机数
		var i = Math.floor(Math.random()*4);
		var j = Math.floor(Math.random()*4);
		//判断这个位置是否可用
		if(!hasNumber(i,j)){
			cells[i][j]= Math.random()<0.5 ? 2:4;
			return true;
		}
	}while(true);
	return false;
}

function nospace(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(!cells[i][j]){
				return false;
			}
		}
	}
	return true;
}

function hasNumber(i,j){
	if(cells[i][j]){
		return true;
	}

	return false;
}

function popShowCell(i,j,number){
	$('#number-cell-'+i+'-'+j).animate({
		width:'100px',
		height:'100px',
		left:getLeft(j),
		top:getTop(i)
	},50,function(){
		$(this).text(number);
	});
}

function getIbyId(id){
	return parseInt(id.split('-')[2]);
}

function getJbyId(id){
	return parseInt(id.split('-')[3]);
}
