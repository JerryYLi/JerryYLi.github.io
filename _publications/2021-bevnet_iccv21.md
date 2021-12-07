---
title: "BEV-Net: Assessing Social Distancing Compliance by Joint People Localization and Geometric Reasoning"
collection: publications
permalink: /publication/2021-bevnet_iccv21
year: 2021
venue: 'International Conference on Computer Vision (ICCV)'
paperurl: '/files/publications/bevnet.pdf'
authors: 'Zhirui Dai, Yuepeng Jiang, Yi Li, Bo Liu, Antoni B. Chan and Nuno Vasconcelos'
---

<a href='/files/publications/bevnet.pdf'>Paper</a>

Zhirui Dai, Yuepeng Jiang, Yi Li, Bo Liu, Antoni B. Chan and Nuno Vasconcelos

Published in *International Conference on Computer Vision (ICCV)*, 2021

**Abstract**: Social distancing, an essential public health measure to limit the spread of contagious diseases, has gained significant attention since the outbreak of the COVID-19 pandemic. In this work, the problem of visual social distancing compliance assessment in busy public areas, with wide field-of-view cameras, is considered. A dataset of crowd scenes with people annotations under a bird&apos;s eye view (BEV) and ground truth for metric distances is introduced, and several measures for the evaluation of social distance detection systems are proposed. A multi-branch network, BEV-Net, is proposed to localize individuals in world coordinates and identify high-risk regions where social distancing is violated. BEV-Net combines detection of head and feet locations, camera pose estimation, a differentiable homography module to map image into BEV coordinates, and geometric reasoning to produce a BEV map of the people locations in the scene. Experiments on complex crowded scenes demonstrate the power of the approach and show superior performance over baselines derived from methods in the literature. Applications of interest for public health decision makers are finally discussed. Datasets, code and pretrained models are publicly available at https://github.com/daizhirui/BEVNet/.
