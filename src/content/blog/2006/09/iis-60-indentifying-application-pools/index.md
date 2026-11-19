---
id: 46
title: 'IIS 6.0 &#8211; Indentifying application pools'
date: '2006-09-27T10:19:08+01:00'
author: Jaspio
excerpt: ''
guid: 'http://www.jaspio.net/wordpress/archives/2006/09/27/iis-60-indentifying-application-pools/'
permalink: /iis-60-indentifying-application-pools/
categories:
    - 'Gadgets &amp; Tools'
    - 'Note to Self'
format: false
---

Ever wanted to know which application pool was behind that one w3p.exe process that always clogs up your Windows 2003 server?

Now you can by running a simple IIS script.  
On the console, enter the following command:

**cscript %systemroot%system32iisapp.vbs**

This script wil then print out a list of all the running application pools and their corresponding process ID.

I made a batch file for on my desktop that paused the script so that the popupped window doesn't disappear straight away.