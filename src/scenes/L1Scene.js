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
      this.map = this.add.tilemap('level_tilemap');
      this.tiles = this.map.addTilesetImage('terrain', 'map_tileset');
      this.backgroundLayer = this.map.createStaticLayer('background', this.tiles, 0, 0);
      this.roadLayer = this.map.createStaticLayer('roads', this.tiles, 0, 0);
      this.buildingLayer = this.map.createStaticLayer('buildings', this.tiles, 0, 0);
    }

}

export default L1Scene;

