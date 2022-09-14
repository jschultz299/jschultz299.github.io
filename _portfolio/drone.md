---
layout: post
title: Drone
feature-img: "assets/img/portfolio/drone/features/feature.jpg"
header_feature_image_responsive: true
img: "assets/img/portfolio/drone/thumbnails/thumbnail_800x600.gif"
date: August 16, 2016
tags: [Mechatronics, Aviation, Engineering, 3D Printing]
---

{% assign date = include.date | default: "today" | date: "%B %-d, %Y" %}
{% assign x = date | date: "%Y" | minus: 2016 %}

<!-- ![image]({{ page.img | relative_url }}) -->

<section class="post-content">
<p>
    <em>*Disclaimer: This project was finished {{x}} years ago, thus a lot of the referenced components may be discontinued. Feel free to leave a comment and suggest alternatives!</em>
</p>

<hr/>

<p>
    Back in 2016, every kid wanted to build a drone, and I was no exeption. I wanted to learn how to 3D print, however, so I combined the two interests and set out to build a quadcopter with a 3D printed frame.
</p>

<p>
    The primary components you need for a quadcopter are:
    <ul>
        <li>Frame</li>
        <li>Motors</li>
        <li>Electronic Speed Controllers (ESC)</li>
        <li>Flight Controller</li>
        <li>Battery</li>
        <li>Power Distribution Board (PDB)</li>
        <li>Propellors</li>
        <li>Radio and Receiver</li>
    </ul>
</p>

<p>
    <strong><u><font size="+3">3D Printed Frame</font></u></strong>
</p>

<p>
    There are many standard quadcopter frames you can buy, but it's quite easy to design and 3D print your own! To design the frame, I used SolidWorks, but Autodesk's Fusion 360 is a great tool as well. When designing the parts, make sure to mark out where the motor holes need to be! Once I had the parts sketched out in SolidWorks, I printed them out. You just have to keep in mind there is a delicate balance between durability and weight. The drone will inevitably crash, so it needs to hold up. On the other hand, the heavier it is, the more thrust it will require to get it off the ground, and thus more power. In any event, here are how the parts came out!
</p>

{% include aligner.html images="portfolio/drone/frame-disassembled.jpg,portfolio/drone/frame-assembled.jpg" %}

<p>
    <strong><u><font size="+3">Motors</font></u></strong>
</p>

<p>
    There are tons of quadcopter motors out there, and it can be a bit overwhelming to figure out which ones you need. However, there are many great resources and tutorials out there to help you get started. The motors I ended up using were two sets of <a href="https://hobbyking.com/en_us/dys-1306-3100kv-bx-series-set-of-two-cw-ccw-motors.html">DYS BX series 1306-3100KV </a> quadcopter motors. 
</p>

<p>
    <strong><u><font size="+3">Electronic Speed Controllers (ESC)</font></u></strong>
</p>

<p>
    An electronic speed controller's function is exactly that, to control the speed of the motors. The motors need to spin a certain speed according to how much you push on the throttle. They need to be programmed to produce the appropriate amount of thrust when needed, but we will talk about that more later. The ESCs I chose were the <a href="https://hobbyking.com/en_us/turnigy-multistar-10a-v2-esc-with-blheli-and-2a-lbec-2-3s-v.html">Turnigy Multistar 10A V2</a> with BLHeli pre-installed. 
</p>

<p>
    <strong><u><font size="+3">Flight Controller</font></u></strong>
</p>

<p>
    The flight controller is where the magic happens. This is what takes the commands issued by the pilot and tells the ESCs how much power to send the motors. Agian, there are many options available, but I ended up using a <a href="https://hobbyking.com/en_us/afroflight-naze32-rev6-flight-controller-acro.html">Naze32 Rev 6</a> flight controller. To program the flight controller, I used <a href="https://betaflight.com/"> BetaFlight Configurator</a>.
</p>

<p>
    <strong><u><font size="+3">Battery</font></u></strong>
</p>

<p>
    To power the quadcopter, we need a battery. Here again we must consider the tradeoff of power capacity vs weight. The larger the battery, the more power it can produce (generally), but also the more it weighs. Lithium polymer batteries are a great solution because of their high power density and high discharge rate. INSERT NOTE ABOUT SAFETY HERE!!!!!
</p>

<p>
    <center><strong><font size="+5">Happy Building!</font></strong></center>
</p>

<!-- {% include aligner.html images="portfolio/drone/showcase.jpg" %} -->
<!-- ![Travel]({{ "/assets/img/portfolio/drone/showcase.jpg" | relative_url}}) -->

<p align="center">
    <img src="../assets/img/portfolio/drone/showcase.jpg" width="100%" />
</p>

</section>
