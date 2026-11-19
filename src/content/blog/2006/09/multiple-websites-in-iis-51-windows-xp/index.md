---
id: 43
title: 'Multiple websites in IIS 5.1 (Windows XP)'
date: '2006-09-18T16:54:42+01:00'
author: Jaspio
excerpt: ''
guid: 'http://www.jaspio.net/wordpress/archives/2006/09/18/multiple-websites-in-iis-51-windows-xp/'
permalink: /multiple-websites-in-iis-51-windows-xp/
categories:
    - 'Gadgets &amp; Tools'
    - 'Note to Self'
format: false
---

IIS is easy to use for MS development.  
Sadly, the most annoying thing about IIS 5.1 is that you are only allowed to run one website.

But wouldn't it be nice to have multiple setups for different types of websites?

Thanks to the admin scripts in the Inetpub-folder folder of IIS you can!

To be able to add multiple sites we use the **adsutil.vbs** file.  
(the file is located in the folder **C:/Inetpub/AdminScripts**).  
  
Here's an overview of its usage:

Show a list of current setups  
**adsutil.vbs enum w3svc /p**

Create a clean setup in a new website (make sure the sitenumber is free!):  
**adsutil.vbs create\_vserv W3SVC/2**

Copy an existing setup to a new site (including Virtual Directories!):  
**adsutil.vbs copy W3SVC/1 W3SVC/2**

Delete a setup:  
**adsutil.vbs delete W3SVC/2**

================

You could also use the the free [IIsAdmin.NET tool](http://www.codeproject.com/csharp/IIsAdminNet.asp "Homepage of IIsAdmin.NET"), but this only creates empty sites and can't copy settings from one site to another.