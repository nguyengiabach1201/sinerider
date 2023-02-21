const VOLCANO = (() => {
  const SLEDDER_START = -45
  return {
    name: 'Volcano',
    nick: 'VOLCANO',
    colors: Colors.biomes.volcano,
    runAsCutscene: true,
    axesEnabled: false,
    radius: 3,
    x: -40,
    y: 0,
    camera: {
      x: 2,
      offset: [0, 0.4],
      fov: 30,
    },
    requirements: ['TWO_BELOW'],
    defaultExpression:
      '\\frac{40}{1+\\left(\\frac{x-200}{80}\\right)^6}-\\frac{60}{1+\\left(\\frac{x-200}{30}\\right)^6}+\\frac{90}{1+e^{-\\frac{\\left(-x+60\\right)}{10}}}+\\left(\\frac{x-200}{60}\\right)^2',
    directors: [
      {
        type: 'tracking',
        smoothing: 0.08,
        minFov: 8,
        minFovMargin: 7,
        transitions: [
          {
            domain: [135, 250],
            properties: {
              minFov: 50,
              offset: [0, -0.3],
            },
          },
        ],
      },
    ],
    goals: [],
    sky: {
      asset: 'images.volcano_background_tall',
      margin: 1,
    },
    bubble: {
      sky: {
        asset: 'images.western_slopes_background',
        margin: 1,
      },
    },
    walkers: [
      {
        //  x: 191,
        x: SLEDDER_START - 10,
        //  x: -34.5,
        asset: 'images.sam_float',
        name: 'WALKER_1',
        transition: {
          name: 'SLEDDER_1',
          toggleRunning: true,
          xRequirements: [SLEDDER_START],
        },
        //  range: [-34, 1],
        transitionX: 0,
        speech: [
          {
            speakerX: 0,
            color: '#808080',
            content: 'Look, the finish line!',
            direction: 'up-up-left',
            x: -1,
            y: 1.2,
            deactivationThreshold: -82,
            domain: [-86, -82],
            distance: 1.5,
            repeatable: false,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: 'Just past that volcano!!',
            direction: 'up-left',
            domain: [-86, -82],
            distance: 1.6,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: "Shoot! That means they're ahead of us!",
            direction: 'up-up-left',
            domain: [-74, -70],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: "I guess it's really over then.",
            direction: 'up-up-left',
            x: -1,
            y: 1.2,
            domain: [-68, -64],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: 'May as well take our time now',
            direction: 'up-left',
            domain: [-68, -64],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: 'Stop stalling! Tell me your stupid idea already.',
            direction: 'up-up-left',
            domain: [-50, -46],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: 'Over it??',
            direction: 'up-up-left',
            domain: [-34, -30],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: 'That sounds dangerous',
            direction: 'up-up-left',
            domain: [-22, -18],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: "...let's go",
            direction: 'up-up-left',
            domain: [-10, -6],
            distance: 1.5,
          },
          // AFTER VOLCANO SEQUENCE

          {
            speakerX: 0,
            color: '#808080',
            content: 'THAT. WAS. AWESOME.',
            direction: 'up-up-left',
            domain: [400, 404],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: "oh my god I can't believe we made it.",
            direction: 'up-up-left',
            domain: [412, 416],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: "Well I'm sorry for your stomach.",
            direction: 'up-up-left',
            domain: [424, 428],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: "And I'm sorry I doubted you.",
            direction: 'up-up-left',
            domain: [430, 434],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: "Oh yeah you're right",
            direction: 'up-up-left',
            domain: [448, 452],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: "That's cool",
            direction: 'up-up-left',
            domain: [454, 458],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: "I am! It's so weird we're finally finished...",
            direction: 'up-up-left',
            domain: [466, 470],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: 'Can we go back to that canyon now?',
            direction: 'up-up-left',
            domain: [478, 482],
            distance: 1.5,
          },
          {
            speakerX: 0,
            color: '#808080',
            content: 'Yeah, that one.',
            direction: 'up-up-left',
            domain: [490, 494],
            distance: 1.5,
          },
        ],
        walkers: {
          x: -33,
          asset: 'images.benny_float',
          transition: {
            name: 'SLEDDER_1',
            xRequirements: [-33, -34.5],
            runningAfterTransition: true,
          },
          //  range: [-33, 0],
          transitionX: 0,
          speech: [
            {
              speakerX: 0,
              content: 'Oh that must be where the little people are going.',
              color: '#808080',
              direction: 'up-left',
              deactivationThreshold: '-23',
              domain: [-80, -76],
              distance: 1.5,
              repeatable: false,
            },
            {
              speakerX: 0,
              color: '#808080',
              content: 'I have a crazy idea',
              direction: 'up-up-left',
              domain: [-62, -58],
              distance: 1.5,
            },
            {
              speakerX: 0,
              color: '#808080',
              content: 'So utterly, indubitably insane it just might...',
              direction: 'up-up-left',
              domain: [-56, -52],
              distance: [1.5],
            },
            {
              speakerX: 0,
              color: '#808080',
              content: "We don't go around the volcano.",
              direction: 'up-up-left',
              domain: [-44, -40],
              distance: [1.5],
            },
            {
              speakerX: 0,
              color: '#808080',
              content: 'We go over it.',
              direction: 'up-up-left',
              domain: [-40, -36],
              distance: [1.5],
            },
            {
              speakerX: 0,
              color: '#808080',
              content: 'We jump it.',
              direction: 'up-up-left',
              domain: [-28, -24],
              distance: [1.5],
            },
            {
              speakerX: 0,
              color: '#808080',
              content: 'You want to win, right?',
              direction: 'up-up-left',
              domain: [-16, -12],
              distance: [1.5],
            },
            {
              speakerX: 0,
              color: '#808080',
              content: "Follow me, m'lady!",
              direction: 'up-up-left',
              domain: [-4, SLEDDER_START],
              distance: [1.5],
            },
            // AFTER VOLCANO SEQUENCE

            {
              speakerX: 0,
              color: '#808080',
              content: 'Really? I found it vaguely traumatizing...',
              direction: 'up-up-left',
              domain: [406, 410],
              distance: [1.5],
            },
            {
              speakerX: 0,
              color: '#808080',
              content: 'I think I left my stomach back there...',
              direction: 'up-up-left',
              domain: [418, 422],
              distance: [1.5],
            },
            {
              speakerX: 0,
              color: '#808080',
              content: '*burp*',
              direction: 'up-up-left',
              domain: [436, 440],
              distance: [1.5],
            },
            {
              speakerX: 0,
              color: '#808080',
              content: 'So wait, does this mean we won?',
              direction: 'up-up-left',
              domain: [442, 446],
              distance: [1.5],
            },
            {
              speakerX: 0,
              color: '#808080',
              content: 'I feel like you should be more excited',
              direction: 'up-up-left',
              domain: [460, 464],
              distance: [1.5],
            },
            {
              speakerX: 0,
              color: '#808080',
              content: "Well personally I'm relieved.",
              direction: 'up-up-left',
              domain: [472, 476],
              distance: [1.5],
            },
            {
              speakerX: 0,
              color: '#808080',
              content: "The one you didn't want to see?",
              direction: 'up-up-left',
              domain: [484, 488],
              distance: [1.5],
            },
            {
              speakerX: 0,
              color: '#808080',
              content: "This time we'll do it together.",
              direction: 'up-up-left',
              domain: [496, 500],
              distance: [1.5],
            },
          ],
        },
      },
    ],
    lava: {
      x: 155,
      y: 60,
      size: 90,
    },
    sprites: [
      {
        asset: 'images.rock_1',
        flipX: true,
        drawOrder: LAYERS.foreSprites,
        size: 3,
        x: SLEDDER_START,
        offset: [0, 0.6],
        anchored: true,
      },
      {
        asset: 'images.volcano_trees',
        flipX: true,
        drawOrder: LAYERS.foreSprites,
        size: 10,
        x: -93,
        offset: [0, 0.6],
        anchored: true,
      },
      {
        asset: 'images.volcano_trees',
        flipX: true,
        drawOrder: LAYERS.foreSprites,
        size: 10,
        x: -58,
        offset: [0, 0.6],
        anchored: true,
      },
      {
        asset: 'images.volcano_rock_4',
        flipX: true,
        drawOrder: LAYERS.foreSprites,
        size: 5,
        x: -88,
        offset: [0, 0],
        anchored: true,
      },
      {
        asset: 'images.volcano_rock_2',
        flipX: true,
        drawOrder: LAYERS.foreSprites,
        size: 2,
        x: -85,
        offset: [0, 0.3],
        anchored: true,
      },
      {
        asset: 'images.volcano_rock_1',
        flipX: true,
        drawOrder: LAYERS.foreSprites,
        size: 3,
        x: -53,
        offset: [0, 0.3],
        anchored: true,
      },
      {
        asset: 'images.volcano_trees',
        flipX: true,
        drawOrder: LAYERS.foreSprites,
        size: 10,
        x: -15,
        offset: [0, 0.6],
        anchored: true,
      },
      {
        asset: 'images.volcano_rock_1',
        flipX: true,
        drawOrder: LAYERS.foreSprites,
        size: 3,
        x: -8,
        offset: [0, 0.4],
        anchored: true,
      },
      {
        asset: 'images.volcano_rock_2',
        flipX: true,
        drawOrder: LAYERS.foreSprites,
        size: 3,
        x: -10,
        offset: [0, 0.4],
        anchored: true,
      },
      {
        asset: 'images.goalpost_left',
        drawOrder: LAYERS.backSprites,
        size: 8,
        x: 393.8,
        offset: [0, 0.25],
        anchored: true,
      },
      {
        asset: 'images.goalpost_right',
        drawOrder: LAYERS.foreSprites,
        size: 6,
        x: 393,
        offset: [0, 0.6],
        anchored: true,
      },
    ],
    sledders: [
      {
        name: 'SLEDDER_1',
        active: false,
        transition: {
          name: 'WALKER_1',
          // toggleRunning: true,
          xRequirements: [400],
        },
        x: 0,
        speech: [
          {
            speakerX: -25,
            content: "Follow me, m'lady!",
            direction: 'up-up-right',
            domain: [NINF, 0],
            distance: 1.8,
          },
        ],
      },
    ],
    sounds: [
      // {
      //   asset: 'sounds.music.volcano.start',
      //   loop: true,
      //   volume: 0.4,
      //   domain: [-50, -3, -5, -3],
      // },
      {
        asset: 'sounds.music.volcano.jump',
        loop: false,
        volume: 0.4,
        domain: [SLEDDER_START, -15, 200, 240],
        track: 'sledders',
      },
      // {
      //   asset: 'sounds.music.volcano.middle_buildup',
      //   loop: true,
      //   volume: 0.4,
      //   domain: [-3, 10, 100, 140],
      //   track: 'sledders'
      // },
      // {
      //   asset: 'sounds.music.volcano.jump',
      //   volume: 0.4,
      //   domain: [120, 150],
      //   track: 'sledders'
      // },
      {
        asset: 'sounds.music.volcano.middle_guitar',
        volume: 0.4,
        domain: [240, 320],
        track: 'sledders',
      },
    ],
  }
})()
