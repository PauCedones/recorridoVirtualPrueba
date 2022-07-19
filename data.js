var APP_DATA = {
  "scenes": [
    {
      "id": "0-comedor",
      "name": "comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.9810776225521085,
        "pitch": 0.44311872535401164,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.427419369195393,
          "pitch": 0.1609413563933515,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": -3.0573928248083586,
          "pitch": 0.19112269060205378,
          "rotation": 0,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bao",
      "name": "baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.3160077623801385,
        "pitch": 0.2826131115709334,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.2941938005525415,
          "pitch": 0.5614166094136888,
          "rotation": 0,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.5732983612175637,
        "pitch": 0.34606614390452606,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.8611898558233406,
          "pitch": 0.12989646925070808,
          "rotation": 0,
          "target": "0-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dormipapas",
      "name": "dormiPapas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.903127681857079,
        "pitch": 0.3155636534926547,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.853635739337033,
          "pitch": 0.13894989568183647,
          "rotation": 0,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dormipau",
      "name": "dormiPau",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.6122442375556147,
        "pitch": 0.36758423982185207,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.65893345571639,
          "pitch": 0.23980380510248267,
          "rotation": 0,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pasillo",
      "name": "pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.89335608099557,
        "pitch": 0.21805530971305842,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.9827774942293726,
          "pitch": 0.42617621082294477,
          "rotation": 0,
          "target": "4-dormipau"
        },
        {
          "yaw": 0.4199945753375314,
          "pitch": 0.1754742695461129,
          "rotation": 0,
          "target": "3-dormipapas"
        },
        {
          "yaw": 0.8239299072551969,
          "pitch": 0.09384808925761234,
          "rotation": 0,
          "target": "1-bao"
        },
        {
          "yaw": -2.210096346613822,
          "pitch": 0.17915233692389165,
          "rotation": 0,
          "target": "0-comedor"
        },
        {
          "yaw": -2.398583371762072,
          "pitch": 0.001455681132640052,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
