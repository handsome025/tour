var findItem = []
var findBrain = []
var url = window.location.href
var source = ued.query("source")
var count2 = 0
var is_repeat = false
function findIcon(arg){
	if(arg == "certification"){
		$("#"+arg).addClass('icon4')
	}
	$("#"+arg).attr("src","static/"+arg+"2.png")
	$('.pano').addClass('none')
	$("."+arg).removeClass('none').removeClass('bounceOut').addClass('bounceIn').siblings('.pano').addClass('bounceOut')

	// var clone = $("."+arg).clone(true)
	// $("."+arg).after(clone)
	// $("."+arg)[1].addClass('fr')

    $("#certification_")[0].pause();
    $("#pasture_")[0].pause();
    $("#milk_")[0].pause();
    console.info(88888888)
	var target = $("#"+arg+"_")
	if(target.length != 0){
		target[0].play();
	}
	 
	// ready()
	console.info(33333333333)

	var item = findItem.toString()
	if(item.indexOf(arg) == -1){ 
		findItem.push(arg)
	}
	var timeout
	// clearTimeout(timeout)
	timeout = setTimeout(function(){
		console.info(555555555)
		$('.pano').removeClass('bounceIn').addClass("bounceOut")
		if(findItem.length == 3 && url.indexOf("/brain1.html") != -1){
			// $(".brain_finish").removeClass('none')
			if (window.orientation === 180 || window.orientation === 0) { 
                $(".brain_finish1").removeClass("none")
            } 
            if (window.orientation === 90 || window.orientation === -90 ){ 

                $(".brain_finish").removeClass("none")
            }
		}
	},8000)
	$(".font_prom").find("span").text(findItem.length)
	if(url.indexOf("/farm1.html") != -1 && findItem.length == 4){
		// if(findItem.length == 4){
			setTimeout(function(){
				window.location.href = window.location.origin + "/html/campaign/brain1.html?source="+source
			},10000)
		// }
	}
	if(url.indexOf("/farmline1.html") != -1 && findItem.length == 4){
		// if(findItem.length == 4){
			setTimeout(function(){
				window.location.href = window.location.origin + "/html/campaign/brain1.html?source="+source
			},10000)
		// }
	}
	var count1 = 1
	
	// var change
	if(url.indexOf("/brain1.html") != -1){
		// clearInterval(change)
		if(arg=='brain2'){
			setInterval(function(){
				// $(".king .brain_"+count2).removeClass('none').siblings('.bar1').addClass('none')
				if(is_repeat && count2 >= 4){
					$(".king2 .brain_4").removeClass('none').addClass('rotate').siblings('.bar1').addClass('none').removeClass('rotate')
					count2 = 4
				}else{
					$(".king2 .brain_"+count2).removeClass('none').siblings('.bar1').addClass('none')
					count2++
				}
			},600)
			is_repeat = true
		}else{ 
			// is_repeat = false
			change = setInterval(function(){
				$(".king4 .brain_"+count1).removeClass('none').siblings('.bar1').addClass('none')
				count1++
				if(count1 == 5){
					count1 = 1
				}
			},600)
		}
		
		if(findItem.length == 3){
			var time = setTimeout(function(){
				// $(".brain_finish").addClass('none')
				window.location.href = window.location.origin + "/html/campaign/lottery.html?source="+source
			},15000)
		}
	}

}
ready()
function ready(){
	wx.ready(function(){
		$("#certification_")[0].play();
	    $("#certification_")[0].pause();
	    $("#pasture_")[0].play();
	    $("#pasture_")[0].pause();
	    $("#milk_")[0].play();
	    $("#milk_")[0].pause();
	    $("#kingdom_")[0].play();
	    $("#kingdom_")[0].pause();
	})
}
