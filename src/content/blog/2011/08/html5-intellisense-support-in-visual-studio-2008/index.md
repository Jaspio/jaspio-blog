---
id: 130
title: 'HTML5 IntelliSense support in Visual Studio 2008'
date: '2011-08-13T17:01:11+01:00'
author: Jaspio
excerpt: ''
guid: 'http://jaspio.net/?p=130'
permalink: /html5-intellisense-support-in-visual-studio-2008/
wp-syntax-cache-content:
    - ''
categories:
    - ASP.NET
    - 'Visual Studio .NET'
format: false
---

[![HTML5 Logo](./HTML5_Logo_128.png "HTML5 Logo")](http://www.w3.org/html/logo/) As the ASP.NET scene is getting more involved in all the talk about [HTML5](http://www.w3.org/html/logo/ "HTML5 Homepage"), I've discovered that I have become a second class citizen in the world of .NET. As a developer in a small firm, I don't have access to the latest and greatest tools or the room to implement new technologies. We still build our webapps with ASP.NET Web Forms, VB.NET 3.5 and Visual Studio 2008. In the meantime, Microsoft have come along with many new innovations and tools I've had to miss out on: .NET 4.0, Visual Studio 2010, ASP.NET MVC, NuGet, ASP.NET Websites with Razor. These tools are all great and "nice to have" but a little more difficult to integrate into our current environment. One thing I really do miss though is support for HTML 5.

<!--more-->

Back in 2010, [Mikhail Arkhipov](http://blogs.msdn.com/b/mikhailarkhipov/ "Mikhail Arkhipov's MSDN blog") published a premiliminary version of [HTML5 intellisense support for Visual Studio](http://visualstudiogallery.msdn.microsoft.com/d771cbc8-d60a-40b0-a1d8-f19fc393127d "HTML 5 Intellisense for Visual Studio 2010 and 2008") through the Visual Studio Gallery. It helped developers get started with marking up HTML with the new tags and it was a great gift. I especially liked that this pack was made available for Visual Studio 2008 aswell as the latest and greatest Visual Studio 2010. As more of the standard solidified, this first version needed an update. This lead to to a bunch of Microsofties (unofficially) releasing the [Web Standards Update for Microsoft Visual Studio 2010 SP1](http://visualstudiogallery.msdn.microsoft.com/a15c3ce9-f58f-42b7-8668-53f6cdc2cd83), leaving us 2k8 devs in the cold. As I really liked the look of all the IntelliSense features ([Scott Hanselman wrote a great overview here](http://www.hanselman.com/blog/AnnouncingTheWebStandardsUpdateHTML5SupportForTheVisualStudio2010Editor.aspx)) I decided to hack the new update and integrate it into my Visual Studio 2008 environment. Here are the steps how I did it: 

1. Download the "[Web Standards Update for Microsoft Visual Studio 2010 SP1](http://visualstudiogallery.msdn.microsoft.com/a15c3ce9-f58f-42b7-8668-53f6cdc2cd832%29)" from the Visual Studio Gallery
2. Extract the files from the MSI package from the command prompt, type: 
    
    ```
    msiexec /a "Web Standards Update.msi" /qb TARGETDIR=C:\temp\html5
    ```
3. Copy the HTML IntelliSense schema's to to the Visual Studio folder: 
    
    ```
    copy "c:\temp\html5\Program Files Folder\Microsoft Visual Studio 10.0\Common7\Packages\schemas\html*.xsd" "c:\Program Files (x86)\Microsoft Visual Studio 9.0\Common7\Packages\schemas\html"
    ```
4. Copy the CSS IntelliSense schema's to to the Visual Studio folder (depending on your locale: mine is 1033): 
    
    ```
    copy "c:\temp\html5\Program Files Folder\Microsoft Visual Studio 10.0\Common7\Packages\1033\schemas\CSS\css30.xml" "c:\Program Files (x86)\Microsoft Visual Studio 9.0\Common7\Packages\1033\schemas\css"
    ```
5. With Visual Studio shutdown, add the following registry entries:**64Bit:**
    
    ```
    Windows Registry Editor Version 5.00
    [HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\VisualStudio\9.0\Packages\{1B437D20-F8FE-11D2-A6AE-00104BCC7269}\Schemas\Schema 23] "File"="html\html_5.xsd"
    "Friendly Name"="HTML5"
    "URI"="http://schemas.microsoft.com/intellisense/html-5"
    ```
    
    ```
    Windows Registry Editor Version 5.00
    [HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\VisualStudio\9.0\Packages\{A764E895-518D-11d2-9A89-00C04F79EFC3}\Schemas\Schema 5]
    "File"="css30.xml"
    "Friendly Name"="CSS 3.0"
    ```
    
    **32Bit:**
    
    ```
    Windows Registry Editor Version 5.00
    [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\VisualStudio\9.0\Packages\{1B437D20-F8FE-11D2-A6AE-00104BCC7269}\Schemas\Schema 23]
    "File"="html\html_5.xsd"
    "Friendly Name"="HTML5"
    "URI"="http://schemas.microsoft.com/intellisense/html-5"
    ```
    
    ```
    Windows Registry Editor Version 5.00
    [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\VisualStudio\9.0\Packages\{A764E895-518D-11d2-9A89-00C04F79EFC3}\SchemasSchema 5]
    "File"="css30.xml"
    "Friendly Name"="CSS 3.0"
    ```
6. Restart Visual Studio.

You will now be able to use HTML5 and CSS 3 in VS 2k8! Let's code like the best of 'em! Added bonus: also get basic SVG IntelliSense support by extracting the SVG.xsd file from this package on the Visual Studio Gallery and adding it to the html folder: [SVG Intellisense schema for Visual Studio 2010 and 2008](http://visualstudiogallery.msdn.microsoft.com/22479d6b-42d5-499f-b501-18e90e579540)