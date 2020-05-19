---
type: game
creation: 2019-04-01
description: Pop Some Pimples!
icon: ../../images/games/PopIt.png
name: Pop It!
source: https://github.com/tubbycatgames/PopIt
play: https://tubbycatgames.itch.io/pop-it
video: https://youtu.be/wCIjCLxLC0g
---

Pop It! was made for the 2019 Toy Jam organized by [Philly Game Mechanics](https://www.phillygamemechanics.com/)

The theme for the jam was making games that could exist simply as toys instead of
games.

A friend of mine had an idea of a simulator where you graphically break a
foot. I thought that was a bit much but had seen a lot of pimple popping
videos in the past and thought that it would be an interesting approach to make
a toy where all you do is pop pimples.

I decided to limit the toy to only having four visible game objects. A plane
for the skin, a sphere for the base, a capsule for the pimple head, and
a particle emitter for the eruption spray.

Local developer [Gary DiCiano](https://github.com/GarissonFord) wrote a script
to pick randomized colors and set it up in the game to generate skin, pimple,
and pus tones.

I had only developed touch based games minimally, so wanted to focus on input controls.
I created a system that would detect pinch gestures on the pimple, and scale its different
components up and down to simulate a pimple about to burst. On bursting it fires off a sound
event, particle emitter, and makes a new pimple.

Local sound designer [Alex Cole](https://www.alexcolesound.com/) provided dozens of pimple
pop sounds of varying wetness, duration, and intensity. This provides most of the viscerality
to the pop effect.
