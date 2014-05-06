var nodeId=0;//便签ID，全局，若产生一个note ，则加一，并赋值给新标签的id
var nodeLength=0;//便签的个数
var cookieLength=0;
function newNote(){
	var self = this;
	var content=document.createElement('div');
	content.className='content';
	var close = document.createElement('img');
	close.src='deleteButton.png';
	close.className='close';
	var note = document.createElement('div');
	node.className='noteStyle';
	node.left = Math.round(Math.random() * 400) + 'px';
    node.top = Math.round(Math.random() * 500) + 'px';
	node.appendChild(content);
	node.appendChild(close);
	document.body.appendChild(node);
}
