import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab.js';
import TextPrefab from '../prefabs/TextPrefab.js';

class L1Scene extends JSONLevelScene {
    constructor() {
        super('L1Scene');

        this.prefab_classes = {
            player: Prefab.prototype.constructor,
        }
    }

    create () {

      // render the map. i.e. this.add.tilemap('level_tilemap')

      this.map = this.add.tilemap(this.level_data.map.key);

      // loop through each tileset in the map.tilesets array and add the tileset's data to the map (the data is coming from the json file from Tile). i.e. this.tiles = this.map.addTilesetImage('terrain', 'map_tileset')

      let index = 0;
      this.tilesets = {};

      this.map.tilesets.forEach((tileset) => {
          let map_tileset = this.map.addTilesetImage(tileset.name, this.level_data.map.tilesets[index]);
          this.tilesets[this.level_data.map.tilesets[index]] = map_tileset;
          index += 1;
      });

      // create static layers i.e. this.map.createStaticLayer('background', this.tiles, 0, 0)

      this.layers = {};

      this.map.layers.forEach(function (layer) {
          this.layers[layer.name] = this.map.createStaticLayer(layer.name, this.tilesets[layer.properties.tileset]);
          console.log("this.layers: ", this.layers);
          if (layer.properties.collision) { // collision layer
              this.map.setCollisionByExclusion([-1], true, layer.name);
          }
      }, this);

      // create objects

      super.create();

      this.map.objects.forEach(function (object_layer) {
          console.log(this.map)
          object_layer.objects.forEach(this.create_object, this);
      }, this);
    }

    create_object(object) {
      // tiled coordinates starts in the bottom left corner
      let position = {"x": object.x + (object.width / 2), "y": object.y + (object.height / 2)};
      // create object according to its type
      if (this.prefab_classes.hasOwnProperty(object.type)) {
          let prefab = new this.prefab_classes[object.type](this, object.name, position, object.properties);
      }
    }

}

export default L1Scene;

