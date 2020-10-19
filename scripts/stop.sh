#!/bin/bash

if forever list | grep \'spell-bot\'; then forever stop spell-bot; fi