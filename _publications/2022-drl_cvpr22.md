---
title: "Improving Video Model Transfer with Dynamic Representation Learning"
collection: publications
permalink: /publication/2022-drl_cvpr22
year: 2022
venue: 'Conference on Computer Vision and Pattern Recognition (CVPR)'
paperurl: '/files/publications/drl.pdf'
authors: 'Yi Li and Nuno Vasconcelos'
---

<a href='/files/publications/drl.pdf'>Paper</a>

Yi Li and Nuno Vasconcelos

Published in *Conference on Computer Vision and Pattern Recognition (CVPR)*, 2022

**Abstract**: Temporal modeling is an essential element in video understanding. While deep convolution-based architectures have been successful at solving large-scale video recognition datasets, recent work has pointed out that they are biased towards modeling short-range relations, often failing to capture long-term temporal structures in the videos, leading to poor transfer and generalization to new datasets. In this work, the problem of dynamic representation learning (DRL) is studied. We propose dynamic score, a measure of video dynamic modeling that describes the additional amount of information learned by a video network that cannot be captured by pure spatial student through knowledge distillation. DRL is then formulated as an adversarial learning problem between the video and spatial models, with the objective of maximizing the dynamic score of learned spatiotemporal classifier. The quality of learned video representations are evaluated on a diverse set of transfer learning problems concerning many-shot and few-shot action classification. Experimental results show that models learned with DRL outperform baselines in dynamic modeling, demonstrating higher transferability and generalization capacity to novel domains and tasks.