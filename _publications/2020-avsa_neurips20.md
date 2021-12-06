---
title: "Learning Representations from Audio-Visual Spatial Alignment"
collection: publications
permalink: /publication/2020-avsa_neurips20
year: 2020
venue: 'Conference on Neural Information Processing Systems (NeurIPS)'
paperurl: '/files/publications/avsa.pdf'
authors: 'Yi Li, Pedro Morgado and Nuno Vasconcelos'
---

<a href='/files/publications/avsa.pdf'>Paper</a>

Authors: Yi Li, Pedro Morgado and Nuno Vasconcelos

Abstract: We introduce a novel self-supervised pretext task for learning representations from audio-visual content. Prior work on audio-visual representation learning leverages correspondences at the video level. Approaches based on audio-visual correspondence (AVC) predict whether audio and video clips originate from the same or different video instances. Audio-visual temporal synchronization (AVTS) further discriminates negative pairs originated from the same video instance but at different moments in time. While these approaches learn high-quality representations for downstream tasks such as action recognition, their training objectives disregard spatial cues naturally occurring in audio and visual signals. To learn from these spatial cues, we tasked a network to perform contrastive audio-visual spatial alignment of 360° video and spatial audio. The ability to perform spatial alignment is enhanced by reasoning over the full spatial content of the 360° video using a transformer architecture to combine representations from multiple viewpoints. The advantages of the proposed pretext task are demonstrated on a variety of audio and visual downstream tasks, including audio-visual correspondence, spatial alignment, action recognition, and video semantic segmentation.
