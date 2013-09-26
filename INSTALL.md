# Installation

[Install the latest Raspberry PI Raspbian image](http://www.raspberrypi.org/downloads) using Win32DiskImager or dd on a Mac (`sudo dd bs=128m if=my-image.img of=/dev/rdisk1` where rdisk1 should be the SD card device as appropriate) to an SD card.

Insert the sd card and boot the device.
From the raspi-config application (which will automatically load on first boot):
* Expand the filesystem size to the size of your SD card.
* Enable ssh in the advanced menu so you can remotely shell into the device.

Reboot again, then login with the default credentials and change the default password.
Configure wifi if desired.  I use wireless protected setup to do this.  Press the button on your router, then execute: 
* `wpa_cli wps_pbc`

With a network connection established, let's get the basics updated, upgraded, and installed:
* `sudo apt-get update`
* `sudo apt-get upgrade`
* `sudo apt-get install git-core ntp`

And upgrade the firmware of your Raspberry Pi with 
* `sudo rpi-update`

Ok, we are ready to install node.js:
* `mkdir ~/dev`
* `mkdir ~/dev/node`
* `cd ~/dev/node`
* `wget http://nodejs.org/dist/v0.10.18/node-v0.10.18.tar.gz`
* `tar -zxf node-v0.10.18.tar.gz`
* `cd node-v0.10.18`
* `./configure`
* `make`
* `sudo make install`

Get this application on the device: 
* `git clone http://github.com/nitrogenjs/light`

And install the deps: 
* `npm install`

And you are ready to run the app:
* `node light.js`

See the scripts directory for a init.d script to start this on boot.

If you have issues installing this, please let us know about them through an issue on this project so we can correct them.