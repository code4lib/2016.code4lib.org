---
layout: presentation
speakers:
- 3649696289
- 0
- 0
- 0
- 0
type: workshop
date: 2016-03-07
categories: workshops
slugTitle: hands-on-fedora-4
title: Hands-On Fedora 4
---

This workshop is a hands-on introduction to:

* the core Fedora 4 RESTful services
* the external integration components

In this session, you will work on your own laptops with a provided Vagrant image through a series of exercises that demonstrate how to use Fedora 4's core services, how to use external services, and how to think about adding new external integrations.

The workshops will include several hands-on sections using a Fedora 4 virtual machine image, so please follow these instructions to get the VM up and running on your laptop *before* the workshop. Let me know if you run into any problems - we are doing this in advance so we do not have to troubleshoot problems at the workshop.

NOTE: The VM uses 2GB of RAM, so you will need a laptop with at least 4GB of RAM to run it. Depending on your laptop manufacturer, you may also need to enable virtualization in the BIOS.

1. Download and install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. Download and install [Vagrant](http://www.vagrantup.com/downloads.html)
3. Download and unzip the [4.4.0 release of the Fedora 4 VM](https://github.com/fcrepo4-exts/fcrepo4-vagrant/archive/c4l-2016.zip)
4. Using a Command Line Interface, navigate to the VM directory from step 3 and run the command: vagrant up
    a. Note that this step will take a while as the VM downloads and installs a full virtual environment
5. Test the VM by opening your web browser and navigating to: [http://localhost:8080/fcrepo](http://localhost:8080/fcrepo)
    a. The administrator username/password is fedoraAdmin/secret3

We will also be making use of the SSH command - if you are running Mac OSX or Linux you can already run this command, but if you are on Windows you will need an SSH client like [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

That is it! Please let me know if you run into any problems.

Regards,
Andrew
