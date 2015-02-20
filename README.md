[![Build Status](https://travis-ci.org/kvimber/kev-mode.svg?branch=master)](https://travis-ci.org/kvimber/kev-mode)

This is a simple Starbound mod in order to get you past the hump of having to collect your own resources.  Once you've spent months playing these games, it just feels unnecessary to have to do this, especially if it's because of an update.


### Latest Stuff!

The current version of the starbound mod is 0.1.0.  You can get that directly from [this link](get/v0.1.0.zip), or find it at the [downloads page](downloads) under the tags tab.

Refer to [semver.org](http://semver.org/) for the versioning scheme rules.


### Setup

* download the latest version zip from the Latest Stuff section above.  It should be named `kvimber-kev-mode-<hash_value>.zip`.
* place it in your mods directory within Starbound's local files (on my mac this is under `giraffe_storage/mods`
* remove any older project folders
* unzip the file in this directory
* run the game, and you should see the folder name listed on the menu screen as an asset location

At this point, you should be good to go!


### What is changed here?

For the most part, I've just made it super easy to get materials for building things.  To start off, you need one coal and the stone furnace.  You can build two things from the coal: 100 glass, or 100 copper bars.

From now on, it goes down a chain of what materials you can build, following this pattern

    1 coal         --> 100 copper bars
    1 copper bar   --> 100 iron bars
    1 iron bar     --> 100 silver bars
    1 silver bar   --> 100 gold bars
    1 goal bar     --> 100 platinum bars
    1 platinum bar --> 100 titanium bars

The iron crafting table isn't actually something that you know how to build right off the bat.  I've moved some recipes into the players known space off the bat, so that you can just jump to building later things.

The other location where I've done similar work to the stone furnace is the Magnetic Crucible.  There, iron makes steel, steel makes uranium rods, and titanium and uranium rods make durasteel bars.  Then there's another chain starting from durasteel that goes through the advanced materials that I will not go into here.  It should go through all of the useful materials in the Crucible, however.
