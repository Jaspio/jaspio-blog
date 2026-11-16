---
id: 50
title: 'How to Block IE 7 from Auto-Installing'
date: '2006-11-01T09:48:34+01:00'
author: Jaspio
excerpt: ''
guid: 'http://www.jaspio.net/wordpress/archives/2006/11/01/how-to-block-ie-7-from-auto-installing/'
permalink: /how-to-block-ie-7-from-auto-installing/
categories:
    - Browsing
    - 'Gadgets &amp; Tools'
    - 'Note to Self'
format: false
---

Supporting many legacy web applications and systems can be a pain if you are suddenly forced to install a complete new browser platform.

As of October 2006, Microsoft is pushing the installation of Internet Explorer version 7 as a critical update. This means that it will push through most people's Windows Update settings.

Although the user still has to accept the installation of IE7 per se, it's still annoying to have the setup popup on your screen when you are not really interested in it.

<span class="comment-data"></span>

**How to prevent the update package from being installed**

Its a simple matter of creating and setting a single registry key:

**HLM/SOFTWARE/Microsoft/Internet Explorer/Setup/7.0** then add the DWORD value \[DoNotAllowIE70\] and set it to "1" (true).

Thanks to Amit <span class="comment-data">Agarwal</span>'s [great article on Blocking IE7](http://labnol.blogspot.com/2006/10/how-to-block-ie-7-from-auto-installing.html "Amit's article on Blocking IE7")<span class="comment-data">.</span>