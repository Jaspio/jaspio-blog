---
id: 48
title: 'Too many connections on Linksys router'
date: '2006-10-26T00:53:14+01:00'
author: Jaspio
excerpt: ''
guid: 'http://www.jaspio.net/wordpress/archives/2006/10/26/too-many-connections-on-linksys-router/'
permalink: /too-many-connections-on-linksys-router/
categories:
    - Browsing
    - 'Note to Self'
format: false
---

The last couple of weeks, I've been having major issues with my broadband router.

My Linksys WRT54G router with the excellent [DD-WRT](http://www.dd-wrt.com) opensource firmware just kept on crashing and stifling my internet connections.

After perusing the various newgroups, I found the answer. It turns out that many routers tend to go haywire when the MTU is not set correctly. It turns out that [the auto setting just doesn't work correctly](http://linksys.custhelp.com/cgi-bin/linksys.cfg/php/enduser/std_adp.php?p_faqid=1655 "Linksys article on auto MTU bug").  
I then followed [Linksys' advice on finding the right MTU setting](http://linksys.custhelp.com/cgi-bin/linksys.cfg/php/enduser/std_adp.php?p_faqid=386 "Linksys on finding optimal MTU setting") an entered this into the router.

I no longer have 400 of 500 connections on my router anymore!