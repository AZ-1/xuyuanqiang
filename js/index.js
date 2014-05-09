	var show=false;
	function changeback(){
		var changeDiv=document.getElementById('changeTitle');
		var change=document.getElementById('change');
		var yellow=document.getElementById('yellow');
		var pink=document.getElementById('pink');
		var blue=document.getElementById('blue');
		var red=document.getElementById('red');
		var noteStyle=document.getElementsByClassName('noteStyle');
		
		if(!show){
			changeDiv.style.display='block';
			change.innerHTML='关闭主题';
			show=true;
		}
		else{
			changeDiv.style.display='none';
			change.innerHTML='展开主题';
			show=false;
		}
		yellow.onclick=function(){
			for(var i=0;i<noteStyle.length;i++)
				noteStyle[i].style.background='url(img/sp11.png) -100px -90px no-repeat';
		}
		red.onclick=function(){
			for(var i=0;i<noteStyle.length;i++)
			   noteStyle[i].style.background='url(img/sp11.png) -100px -380px no-repeat';
		}
		pink.onclick=function(){
			for(var i=0;i<noteStyle.length;i++)
				noteStyle[i].style.background='url(img/sp11.png) -370px -80px no-repeat';
		}
		blue.onclick=function(){
			for(var i=0;i<noteStyle.length;i++)
			   noteStyle[i].style.background='url(img/sp11.png) -380px -380px no-repeat';
		}
		/*changeDiv.onmouseout=function(){
			changeDiv.style.display='none';
		}*/
	}
	function newNote(){
		var self = this;
		var content=document.createElement('div');
		content.className='content';
		content.innerHTML='test'
		var close = document.createElement('img');
		close.src='img/deleteButton.png';
		close.className='close';
		var note = document.createElement('div');
		note.className='noteStyle';
		note.style.left = Math.round(Math.random() * 400) + 'px';
		note.style.top = Math.round(Math.random() * 500) + 'px';
		note.appendChild(content);
		note.appendChild(close);
		close.onclick=function(){
			document.body.removeChild(note);
		}
		var ok=false;
		self.onmousedown=function(e){
			var event=e||window.event;
			var ox=event.offsetX|| event.layerX;
			var oy=event.offsetY|| event.layerY;
			ok=true;
			this.onmouseover=function(e){
				if(ok){
					var ev=e||window.event;
					var cx=ev.clientX;
					var cy=ev.clientY;
					note.style.left=cx-ox+'px';
					note.style.top=cy-oy+'px';
					node.style.background='url(../img/sp11.png) -100px -90px no-repeat';

				}

			}
		}
		self.onmouseup=function(){
			if (ok) {
				ok=false;
			};
		}

		document.body.appendChild(note);
	}


