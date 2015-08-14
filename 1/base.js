var cells = new Array(4);
var score = 0;
var overFlag = false;

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

function changeCells(key){
	//38上//40下//37左//39右
	switch(key){
		case 38:upAction(); break;
		case 40:downAction(); break;
		case 37:leftAction(); break;
		case 39:rightAction(); break;
		default:return;
	}
}

function upAction(){
	$('.number-cell').each(function(){
		//向上偏移找到相同的数值就相加并且停留在把那个位置		
		var i = getIbyId(this.id);
		var j = getJbyId(this.id);
		var temp = cells[i][j];
		if(temp){
			moveCell(i,j,temp,-1,1,0);
		}
	});
}

function downAction(){
	$('.number-cell').each(function(){
		//向上偏移找到相同的数值就相加并且停留在把那个位置		
		var i = getIbyId(this.id);
		var j = getJbyId(this.id);
		var temp = cells[i][j];	
		if(temp){
			moveCell(i,j,temp,+1,1,3);
		}
	});
}

function leftAction(){
	$('.number-cell').each(function(){
		//向上偏移找到相同的数值就相加并且停留在把那个位置		
		var i = getIbyId(this.id);
		var j = getJbyId(this.id);
		var temp = cells[i][j];		
		if(temp){
			moveCell(i,j,temp,-1,2,0);
		}
	});
}

function rightAction(){
	$('.number-cell').each(function(){
		//向上偏移找到相同的数值就相加并且停留在把那个位置		
		var i = getIbyId(this.id);
		var j = getJbyId(this.id);
		var temp = cells[i][j];
		if(temp){
			moveCell(i,j,temp,+1,2,3);
		}
	});
}

/**
type = 1;上下type = 2;左右
*/
function moveCell(i,j,temp,offset,type,end){
	if(type==1){
		while(i!=end){		
			i+=offset;
			n = cells[i][j];
			if(n){
				if(n==temp){
					temp += n;						
					cells[i][j]=temp;
					break;	
				}else{			
					break;
				}
			}else{
				cells[i-offset][j]=null;
				cells[i][j]=temp;
				continue;
			}
		}	
	}else if (type==2) {
		while(j!=end){
			j+=offset;
			n = cells[i][j];
			if(n){
				if(n==temp){
					temp += n;						
					cells[i][j]=temp;
					break;	
				}else{					
					break;
				}
			}else{
				cells[i][j-offset]=null;
				cells[i][j]=temp;
				continue;
			}
		}	
	};	
}