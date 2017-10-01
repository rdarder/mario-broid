import * as pixi from 'pixi.js'

const renderer = pixi.autoDetectRenderer(
    window.innerHeight * 0.8,
    window.innerHeight * 0.8
)

document.getElementById("canvas")!.appendChild(renderer.view)

const stage = new pixi.Container()
renderer.render(stage)
