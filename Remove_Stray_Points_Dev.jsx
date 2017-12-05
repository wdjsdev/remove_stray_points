function container()
{
	var valid = true;
	eval("#include \"/Volumes/Customization/Library/Scripts/Script Resources/Data/Utilities_Container.js\"");
	eval("#include \"/Volumes/Customization/Library/Scripts/Script Resources/Data/Batch_Framework.js\"");

	function removeStrayPoints()
	{
		var docRef = app.activeDocument;
		unlockDoc(docRef);
		docRef.selection = null;
		app.executeMenuCommand("Stray Points menu item");
		app.executeMenuCommand("clear");

		properTemplateSetup(docRef);
	}

	var readMeMsg = "Removed stray points from these documents.";

	batchInit(removeStrayPoints,readMeMsg);

	if(errorList.length)
	{
		sendErrors(errorList);
	}


}
container();