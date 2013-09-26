# Building an image to run Nitrogen on your Raspberry PI.

1. [Install the latest Raspberry PI Raspbian image](http://www.raspberrypi.org/downloads) using Win32DiskImager or dd on a Mac (`sudo dd bs=128m if=my-image.img of=/dev/rdisk1` where rdisk1 should be the SD card device as appropriate) to an SD card.

2. Insert the sd card and boot the device.
3. From the raspi-config application (which will automatically load on first boot):
3a. Expand the filesystem size to the size of your SD card.
3b. Enable ssh in the advanced menu so you can remotely shell into the device.

4. Reboot again, then login with the default credentials and change the default password.
5. Configure wifi if desired.  I use wireless protected setup to do this.  Press the button on your router, then execute: `wpa_cli wps_pbc` from your shell prompt.

6. With a network connection established, let's get the basics updated, upgraded, and installed:
6a. `sudo apt-get update`
6b. `sudo apt-get upgrade`
6c. `sudo apt-get install git-core ntp`

7. And upgrade the firmware of your Raspberry Pi with `sudo rpi-update`

8. Ok, we are ready to install node.js:
8a. `mkdir ~/dev`
8b. `mkdir ~/dev/node`
8c. `cd ~/dev/node`
8d. `wget http://nodejs.org/dist/v0.10.18/node-v0.10.18.tar.gz`
8e. `tar -zxf node-v0.10.18.tar.gz`
8f. `cd node-v0.10.18`
8g. `./configure`
8h. `make`
8i. `sudo make install`

9. Get this application on the device: `git clone http://github.com/nitrogenjs/light`
10. And install the deps: `npm install` 