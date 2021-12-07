---
title: "Background Data Resampling for Outlier-Aware Classification"
collection: publications
permalink: /publication/2020-ood-resample_cvpr20
year: 2020
venue: 'Conference on Computer Vision and Pattern Recognition (CVPR)'
paperurl: '/files/publications/ood-resample.pdf'
authors: 'Yi Li and Nuno Vasconcelos'
---

<a href='/files/publications/ood-resample.pdf'>Paper</a>

Yi Li and Nuno Vasconcelos

Published in *Conference on Computer Vision and Pattern Recognition (CVPR)*, 2020

**Abstract**: The problem of learning an image classifier that allows detection of out-of-distribution (OOD) examples, with the help of auxiliary background datasets, is studied. While training with background has been shown to improve OOD detection performance, the optimal choice of such dataset remains an open question, and challenges of data imbalance and computational complexity make it a potentially inefficient or even impractical solution. Targeted at balancing between efficiency and detection quality, a dataset resampling approach is proposed for obtaining a compact yet representative set of background data points. The resampling algorithm takes inspiration from prior work on hard negative mining, performing an iterative adversarial weighting on the background examples and using the learned weights to obtain the subset of desired size. Experiments on different datasets, model architectures and training strategies validate the universal effectiveness and efficiency of adversarially resampled background data. Code is available at https://github.com/JerryYLi/bg-resample-ood/.
