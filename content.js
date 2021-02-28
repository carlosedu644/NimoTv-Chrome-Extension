
// //nimo tv why u look like shit
 function removeTheThing(){

	var tagsToRemove = ['nimo-room__rank n-as-rel', 'nimo-room__gift-shop','nimo-iframe__wrap', 'nimo-gift-banner n-as-abs n-as-of-hidden n-as-no-evt n-fx-col n-fx-sn n-as-padh n-as-bd-box'];
	var i;
	
	for(i=0;i<tagsToRemove.length; i++){

	var paras = document.getElementsByClassName(tagsToRemove[i]);


	while(paras[0]) {
    	paras[0].parentNode.removeChild(paras[0]);

    
		}
	}
}
setTimeout(removeTheThing, 2000);
