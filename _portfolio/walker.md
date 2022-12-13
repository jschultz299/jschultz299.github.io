---
layout: post
title: Smart Walker
feature-img: "assets/img/portfolio/walker/features/feature.png"
header_feature_image_responsive: true
img: "assets/img/portfolio/walker/thumbnails/thumbnail.gif"
date: July 14, 2019
order: 2
tags: [Assistive Technology, Stability and Posture, Visual Feedback, Mobility Aids, Kinematics, Gait, Engineering, Research]
---

More than 6.5 million people use walkers or other mobility aids in the United States[^1], and yet, few people are trained how to properly use their walkers. Poor posture when ambulating with a walker has been observed in many individuals, and is a likely cause for trips and falls among elderly adults[^2]. In this project, I developed an assistive device that monitors a person's posture and presents visual feedback to them so that they can learn to walk upright when using their walker.

I completed this project as an undergraduate researcher at the University of Dayton, in collaboration with a multidisciplinary team of researchers and faculty. I was the technical lead on the project, and mentored 2 other undergraduate students along the way. The work was supported by the <a href="https://udayton.edu/stem-catalyst/index.php" target="_blank">UD STEM Catalyst Initiative</a>, from which we were awarded funding based on a grant proposal I contributed to. Check out the video below showcasing this work!

<div class="video_container" align="middle">
    <iframe src="https://www.youtube.com/embed/yrZyfk3cpro" class="video" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>

<br>

The three primary metrics we used to assess a person's posture were:
<ol>
    <li>The distance between their pelvis and the walker</li>
    <li>The flexion angle of their trunk</li>
    <li>The flexion angle of their elbows</li>
</ol>

The posture monitor was attached to the front crossbar of the person's rollator walker and was equipped with an ultrasonic rangefinder. If the rangefinder detected motion outside of a certain range, the user received feedback in the form of a red light. If the user maintained an acceptable distance from the walker, the light was green.

Here are a few pictures of early prototypes:

{% include aligner.html images="portfolio/walker/prototype_parts.JPG,portfolio/walker/prototype_base.JPG,portfolio/walker/prototype_lid.JPG" column=3%}

The device was controlled with an Arduino microcontroller and programmed using the Arduino IDE. Here are some images of early prototype testing:

{% include aligner.html images="portfolio/walker/arduino_output.JPG,portfolio/walker/prototype_red.JPG,portfolio/walker/prototype_green.JPG" column=3%}

We completed an initial round of testing with a few participants and gathered feedback on overall device design, usability, durability, and preferences. Based on this initial feedback, we made some upgrades to the device.

Primary upgrades included reducing the form factor, improving the asthetics, reducing the feedback sources, and adding a charging system. Additionally, we introduced features such as a low-power laser pointer to help with device alignment, a bluetooth transmitter to send and receive data collection signals, and an SD card to log data. You can see our improved system with full schematic below:

{% include aligner.html images="portfolio/walker/monitor-labeled.png,portfolio/walker/wiring-diagram.png" column=2%}

Once we settled on a device design, we recruited elderly individuals from local retirement communities to participant in a study. We first had a qualified Physical Therapist on our research team set up participants properly with their walkers. We then positioned and aligned the posture monitor device. 

We had participants complete standard 10 meter walks as well as complete a custom obstacle course with and without receiving feedback from the device. We used an XSens motion capture suit to measure kinematic data such as trunk angle and elbow flexion angles, as well as trunk distance from the walker using the posture monitor. The goal was to determine if the presence of visual feedback from the device improved these three metrics.

Here is a figure of a participant's XSens avatar without visual feedback (left) and with visual feedback (right):

{% include aligner.html images="portfolio/walker/results-xsens.jpg" column=1%}

Without feedback, participants tended to let the walker get too far out in front of them, which typically resulted increased trunk angle and increased elbow extension, however this was not the case for every participant.

More interestingly, below are the trunk distance results for a typical trial for the 10 meter walks and the obstacle course:

{% include aligner.html images="portfolio/walker/results-10m.png,portfolio/walker/results-obstacle.png" column=2%}

It is clear that the inclusion of the visual feedback had a significant impact on the trunk distance. Points shown in green were considered an acceptable distance away from the walker while points shown in red were considered outside the stability region. This was also found to be consistent across participants in the percentage of time they were within the stability region during the task:

{% include aligner.html images="portfolio/walker/results-decrease.png," column=1%}

While we did observe a consistent decrease in the trunk distance with the inclusion of the visual feedback from the posture monitor, the change in elbow flexion and trunk angle was not consistent across participants. Therefore, we concluded that the posture monitor alone was not sufficient to improve someone's posture.

However, the monitor could serve as a great reminder tool if someone was trained how to properly use their walker. Additionally, if another sensor could be included to better measure trunk or elbow flexion angle, this may serve as a more appropriate tool for improving overall ambulation biomechanics for elderly individuals.

For more information on the project, especially experimental design and statistics, please see our publication presenting our work in the Journal of Assistive Technology <a href="https://www.tandfonline.com/doi/abs/10.1080/10400435.2019.1637380" target="_blank">here</a>. Full citation below.

> Golembiewski, C., <b>Schultz, J.</b>, Reissman, T., Merriman, H., Walsh-Messinger, J., Jackson, K., & Bigelow, K. E. (2021). The effects of a positional feedback device on rollator walker use: a validation study. Assistive Technology, 33(6), 318-325. <a href="https://doi.org/10.1080/10400435.2019.1637380" target="_blank">DOI: 10400435.2019.1637380</a>.

<hr/>

<p>
    <a id="References"></a>
    <strong><u><font size="+3">References</font></u></strong>
</p>

[^1]: 
    {% include citation.html key="kaye2000mobility" %}

[^2]: 
    {% include citation.html key="liu2009assessment" %}
