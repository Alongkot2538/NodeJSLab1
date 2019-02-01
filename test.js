var net = require('net');
var HOST = 'coc.waterphuket.com';
var PORT = 6969;
var client = new net.Socket();
//var num=1;
var i 
var client = new net.Socket();
var num = (Math.random() *21).toFixed(0)

client.connect(PORT, HOST, function() 
{
 	console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 	client.write("5735512161");
 	//client.write((Math.random() * 21).toFixed(0));
 	//client.write(num);
});

client.on('data',function(data)
{

	console.log('server: '+ data);
for( i=0;i<=21;i++){
	
	if(data == "WRONG")
	{
		console.log('Sever: '+data);
		client.wrtie(""+i);

	}
	else (data == "BINGO")
	{
		//client.wrtie(""+i);
		client.destroy()
	}

	}
});