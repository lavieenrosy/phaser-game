import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';
import Player from '../prefabs/world/Player';
import NPC from '../prefabs/world/NPC';
import Door from '../prefabs/world/Door';


class WorldScene extends JSONLevelScene {
  constructor(key = 'WorldScene') {
    super(key);

    this.prefab_classes = {
      player: Player.prototype.constructor,
      npc: NPC.prototype.constructor,
      door: Door.prototype.constructor
    }

  }

  preload () {
    for (let npc_message_name in this.level_data.npc_messages) {
      this.load.text(npc_message_name, this.level_data.npc_messages[npc_message_name]);
    }
  }

  create () {
    this.map = this.add.tilemap(this.level_data.map.key);

    let tileset_index = 0;
    this.tilesets = {};
    this.map.tilesets.forEach(function (tileset) {
      let map_tileset = this.map.addTilesetImage(tileset.name, this.level_data.map.tilesets[tileset_index]);
      this.tilesets[this.level_data.map.tilesets[tileset_index]] = map_tileset;
      tileset_index += 1;
    }, this);

    this.layers = {};
    this.map.layers.forEach(function (layer) {
      this.layers[layer.name] = this.map.createStaticLayer(layer.name, this.tilesets[layer.properties.tileset]);
      if (layer.properties.collision) {
          this.map.setCollisionByExclusion([-1], true, layer.name);
      }
    }, this);

    super.create();

    this.map.objects.forEach(function (object_layer) {
      object_layer.objects.forEach(this.create_object, this);
    }, this);

  }
//   <article class="game__status-bar">
//   <table id="statusbar" class="game__table">
//     <!-- status bar renders here -->
//       <!-- <tr>
//         <td>Player: Andrea</td>
//         <td>Level: 1</td>
//         <td>Money: $2000</td>
//         <td>Popularity: 9</td>
//         <td>Score: 2250</td>
//       </tr> -->
//     </table>
// </article>

  addStatusBar () {
    console.log('whats this?', this)

    let newTable = document.createElement("table");
    let newRow = document.createElement("tr");
    let newCol = document.createElement("td");
    let nameCol = document.createTextNode("Player: " + this.name);
    let levelCol = document.createTextNode("Level: " + this.level);
    let moneyCol = document.createTextNode("Money: " + this.money);
    let popCol = document.createTextNode("Popularity: " + this.popularity);
    let scoreCol = document.createTextNode("Score: " + this.score);
    let statusBar = document.querySelector('#statusbar');

    newTable.setAttribute("id", "statusbar");
    newTable.setAttribute("class", "game__table");
    newRow.appendChild(newCol);
    newCol.appendChild(nameCol);
    newCol.appendChild(levelCol);
    newCol.appendChild(moneyCol);
    newCol.appendChild(popCol);
    newCol.appendChild(scoreCol);
    statusBar.appendChild(newTable);
    
  }

  update() {
    this.addStatusBar();
  }


  create_object (object) {
    let position = {x: object.x + (object.width / 2), y: object.y + (object.height / 2)};
    if (this.prefab_classes.hasOwnProperty(object.type)) {
        let prefab = new this.prefab_classes[object.type](this, object.name, position, object.properties);
    }
  }

}

export default WorldScene;