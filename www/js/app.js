//THIS CODE SHOULD BE PART OF A FILE WHICH IS LOADED BEFORE jQueryMobile

/**
* Create couple of jQuery Deferred Objects to catch the 
* firing of the two events associated with the loading of
* the two frameworks.
*/
var gapReady = $.Deferred();
var jqmReady = $.Deferred();

//Catch "deviceready" event which is fired when PhoneGap is ready
document.addEventListener("deviceReady", deviceReady, false);

//Resolve gapReady in reponse to deviceReady event
function deviceReady()
{
	gapReady.resolve();
}

/**
* Catch "mobileinit" event which is fired when a jQueryMobile is loaded.
* Ensure that we respond to this event only once.
*/
$(document).one("mobileinit", function(){
	jqmReady.resolve();
});

/**
* Run your App Logic only when both frameworks have loaded
*/
$.when(gapReady, jqmReady).then(myAppLogic);

// App Logic
function myAppLogic()
{
$( ".selector" ).dialog( "close" );
var devicePlatform = device.platform;
var element = document.getElementById('myos');
        element.innerHTML = devicePlatform;
		
	if(device.platform == 'android' || device.platform == 'Android' || device.platform == 'WinCE' || device.platform == 'wince' || device.platform == 'Win32NT' || device.platform == 'win32nt')
	{
		var nottios = true;
	}
	else
	{
		var nottios = false;
	}
	
	if(nottios)
	{
		$('.isioslink').remove();
	}
	else
	{
		$('.notioslink').remove();
	}
}