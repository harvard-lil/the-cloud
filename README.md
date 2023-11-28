# The Cloud
Repo for the Cloud app with Python 3.7

- [The Cloud](#the-cloud)
  - [For Makers](#for-makers)
    - [Materials](#materials)
    - [Build](#build)
      - [Pump](#pump)
      - [Clouds](#clouds)
  - [For Developers](#for-developers)
    - [Poetry](#poetry)
    - [Docker](#docker)
    - [Raspberry Pi](#raspberry-pi)

## For Makers

This project was created with the intention of making it possible for others to create and run their own clouds. The code is here and open for those who'd like to fork and modify.

### Materials

To build the clouds and pumps themselves, you'll need some materials. You do not need to get these specific items for the most part, just something similar. You can purchase from any proprietor:

* A [smart WiFi outlet from Kasa](https://www.amazon.com/gp/product/B091FXH2FR/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&th=1). Unlike the other items, this must be a Kasa brand smart outlet, because we're using the [Python Kasa API](https://github.com/python-kasa/python-kasa).
* An [air pump](https://www.coleman.com/sleeping-bags-beds/airbeds-pumps/quickpump-120v-pump-with-extension-hose/SAP_2000021141.html)
* A [check valve](https://www.amazon.com/gp/product/B092THK2F9/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&th=1)
* A way [to attach the check valve](https://www.amazon.com/gp/product/B09BHWMSTD/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&th=1) to the pump.
* [Foam tape](https://www.lowes.com/pd/Frost-King-10-ft-x-3-4-in-Black-Rubber-Foam-Window-Weatherstrip/3047980) to make a tighter seal between the balloon and pump.
* Some [giant balloons](https://www.amazon.com/gp/product/B08233XMST/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&th=1)
* [Spray glue](https://www.michaels.com/product/scotch-super-77-multipurpose-spray-adhesive-10218960)
* [Fiber stuffing](https://www.michaels.com/product/supreme-fiber-fill-by-loops-threads-10436592)

### Build

#### Pump
To create the pump, attach the open side of the check valve to the end of your air pump hose. It may be easier to do if you remove the check valve cap completely by cutting it off. You can screw the valve into the hose and then use the foam tape to create a base where they meet.

![Check valve attached to pump hose with foam tape](cloud/static/images/check-valve.JPG)

You may want to cut the foam tape so it tapers to an even surface.

![Foam tape tapers where it meets the tape below](cloud/static/images/tapered-foam.JPG)

You should now have a pump that allows air to be blown through the hose but does not allow it to travel back.

#### Clouds

To make the clouds, put the opening of a balloon around the mouth of your pump, making sure it reaches past the foam tape. You can secure it with some string in a [clove hitch knot](https://www.netknots.com/rope_knots/clove-hitch).

![The balloon pulled over the foam secured with a clove hitch know](cloud/static/images/balloon-attached.jpg)

Blow the balloon up until it reaches about a foot and a half diameter. Glue fiber to the balloon with spray glue. You should do this outside or in a well-ventilated area, using appropriate safety equipment. Let it dry blown up, then you can take the balloon off the pump and let it deflate.

![A deflated cloud balloon](cloud/static/images/deflated-cloud.JPG)

You'll want to set up the app with the balloon deflated.

## For Developers

### Poetry
You can run locally with Poetry by first [installing the dependencies specified](https://python-poetry.org/docs/basic-usage/#installing-dependencies) and then using the [poetry run](https://python-poetry.org/docs/basic-usage/#using-poetry-run) command:

`cd cloud`  
`poetry run python app.py`

### Docker

You can run locally with Docker:

```
cd cloud
docker build -t cloud .
docker run -p 5000:5000 cloud
```

or to run detached

`docker run -dp 5000:5000 cloud`

### Raspberry Pi

To run open to the internet, you can use a [Raspberry Pi](https://www.raspberrypi.org). You'll have to install Poetry to install dependencies as indicated above. Copy the code from this repository (with or without changes) to your Pi.

The Pi will need two network interfaces, one wireless, for connection to the smart outlet, and the other either wireless or wired, for connection to the internet. It may be simpler to use an Ethernet connection for the latter. Exposing the service running on the Pi to the outside world can be accomplished various ways. Where you control the router at the edge of your network, you could use port forwarding to direct incoming traffic to the Pi. In its current deployment, without that control, we're using a [Cloudflare tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/). [ngrok](https://ngrok.com/) is another possibility.

[Back to top](#the-cloud)
