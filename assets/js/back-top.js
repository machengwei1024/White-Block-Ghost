window.onload = function() {
			var btn = document.getElementById("back-btn");
			var clientheight = document.documentElement.clientHeight;
			var timer = null;
			var isTop = true;
			window.onscroll = function(){
				var osTop = document.documentElement.scrollTop || document.body.scrollTop;
				if (osTop >= clientheight * 0.5) {	
					btn.style.display = "block";
				}else{
					btn.style.display = "none";
				}

				if (!isTop) {
					clearInterval(timer);
				}
			}
			btn.onclick = function(){
				timer = setInterval(function(){
					var osTop = document.documentElement.scrollTop || document.body.scrollTop;
					var ispeed = Math.floor(-osTop / 10);
					document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
						isTop = true;
					if (osTop <= 0) {
						clearInterval(timer);
					}
				},30)
			}
		}