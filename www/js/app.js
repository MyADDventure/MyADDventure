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
$.mobile.buttonMarkup.hoverDelay = 40;
var devicePlatform = device.platform;
		
	if(devicePlatform == 'android' || devicePlatform == 'Android' || devicePlatform == 'WinCE' || devicePlatform == 'wince' || devicePlatform == 'Win32NT' || devicePlatform == 'win32nt')
	{
		var notios = true;
	}
	else
	{
		var notios = false;
	}
	
	if(notios)
	{
		$('.isioslink').remove();
	}
	else
	{
		$('.notioslink').remove();
	}

}