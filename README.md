# Gmail Unread Count in Signature

## About

This userscript replaces any occurance of `%UNREAD%` in your Gmail signature with the number of unread emails in your Inbox. It was made in response to [this mission on Coffee and Power](http://beta.coffeeandpower.com/#mission_id=1851).

## Screenshot

<img src="http://labs.hami.sh/gmail-inbox-signature/screen1.png" width="751" height="672" />

## Requirements

Right now this only works in Firefox with the [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) extension. Although Google Chrome supports user scripts, it does not support some of the features required for this script to function, namely [unsafeWindow](http://wiki.greasespot.net/UnsafeWindow). There are some [workarounds](http://wiki.greasespot.net/Category:Coding_Tips:Interacting_With_The_Page) which I might explore when I have more time.

## Installation

1. Enable the "Unread message icon" in [Gmail Labs](https://mail.google.com/mail/#settings/labs) -- the script will **NOT** work without this turned on. <img src="http://labs.hami.sh/gmail-inbox-signature/screen2.png" width="729" height="149" />

2. Then just download the `*.user.js` file and open it in Firefox. Greasemonkey will prompt you for installation. Reload Gmail. Then add `%UNREAD%` to your Gmail signature and it should be replaced by the number of unread messages when you compose a new message, or a reply.