// Gmail Inbox Count in Signature
// Made by Hamish Macpherson
// (http://hami.sh) - 2011

// ==UserScript==
// @name           Gmail Inbox Count in Signature
// @namespace      http://hami.sh/
// @description    Allows you to have your unread Inbox count auto-inserted into your signature
// @include        http://mail.google.com/*
// @include        https://mail.google.com/*
// ==/UserScript==

var allBody = document.evaluate("//body[@class='editable  LW-yrriRe']", null, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

if (allBody.snapshotItem(0)) 
{

	var parentDocument = unsafeWindow.parent.parent.document;
	var linkNodesSnapshot = parentDocument.evaluate('//link', parentDocument, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	var inboxCount = "0";
	
	if (linkNodesSnapshot)
	{
		for (var i=0 ; i < linkNodesSnapshot.snapshotLength; i++)  
		{  
			var linkTag = linkNodesSnapshot.snapshotItem(i);
			var href = linkTag.href; 
			if (linkTag.rel == "icon")
			{
				var href = linkTag.href;
				var countRegExp = /unreadcountfavicon\/(\d+).png/;
				var matches = countRegExp.exec(href);
				if (matches)
				{
					inboxCount = matches[1];
					GM_setValue("sig", inboxCount);
				}
			} 
		}
	}
	
	allBody.snapshotItem(0).innerHTML = (allBody.snapshotItem(0).innerHTML).replace("%UNREAD%", inboxCount);
}