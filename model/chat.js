jQuery(document).ready(function($) {
	var socket=io.connect('http://localhost:8080');
	socket.emit('joinuser', 'is connect');
	socket.on('joinserver',function(data){
		var d=new Date().toLocaleTimeString();

		console.log(d);
		$('<p>').text(d+':'+data.txt)
		.appendTo("#messages");
		$("#users").empty();
		data.mas.forEach(function(item){
			$('<p>').text(item).appendTo('#users')
		})
	})
	// $.get('/getuser', function(data){
	// 	console.log(data);
	// 	$('#user').text("Привіт "+data)
	// })
	$('#logout').click(function(){
		$.get('/logout', function(data){
			console.log('logout'+ data);
			location.reload();
		})
	})

	$('#btn').click(function(){
		// alert('Hello')

		let txt=$('#txt').val();
		if(!txt) return;
		$('#txt').val('')
		socket.emit('msg', txt);


	})
	socket.on('mesegserver',function(data){
		var d=new Date().toLocaleTimeString();
		$("<p>").text(d+':'+data.user+':'+data.txt).appendTo("#messages")
		// $("#messages").append("<p class='msg'>").children('p:last').text(data);
	})
	// socket.on('usersonline', function(data){
	// 	console.log(data);
	// 	data.forEach(function(user){
	// 		$('<div class=users>').text(user+'  online').appendTo('#users')
	// 	})
		
	// })
});