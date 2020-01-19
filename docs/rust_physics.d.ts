/* tslint:disable */
/* eslint-disable */
/**
*/
export class Particle {
  free(): void;
/**
* @param {Vector3D} pos 
* @param {number} radius 
* @returns {Particle} 
*/
  static create(pos: Vector3D, radius: number): Particle;
/**
* @returns {number} 
*/
  get_x(): number;
/**
* @returns {number} 
*/
  get_y(): number;
/**
* @returns {number} 
*/
  get_z(): number;
/**
* @returns {boolean} 
*/
  is_locked(): boolean;
/**
*/
  lock(): void;
/**
*/
  unlock(): void;
/**
* @returns {number} 
*/
  get_restitution(): number;
/**
* @returns {number} 
*/
  get_friction(): number;
/**
* @returns {number} 
*/
  get_radius(): number;
/**
* @returns {number} 
*/
  get_velocity(): number;
/**
* @returns {number} 
*/
  get_direction(): number;
/**
*/
  reset(): void;
/**
* @param {number} value 
*/
  set_restitution(value: number): void;
/**
* @param {number} value 
*/
  set_friction(value: number): void;
/**
* @param {number} value 
*/
  set_radius(value: number): void;
/**
*/
  update(): void;
/**
* @param {number} width 
* @param {number} height 
* @param {number} depth 
*/
  collide_walls(width: number, height: number, depth: number): void;
/**
* @param {number} x 
* @param {number} y 
* @param {number} z 
*/
  accelerate(x: number, y: number, z: number): void;
/**
* @param {number} x 
* @param {number} y 
* @param {number} z 
*/
  gravitate(x: number, y: number, z: number): void;
/**
* @param {Vector3D} force 
*/
  accelerate_by(force: Vector3D): void;
/**
* @param {Vector3D} gravity 
*/
  gravitate_by(gravity: Vector3D): void;
}
/**
*/
export class Vector3D {
  free(): void;
/**
* @param {number} x 
* @param {number} y 
* @param {number} z 
* @returns {Vector3D} 
*/
  static create(x: number, y: number, z: number): Vector3D;
/**
* @returns {number} 
*/
  get_x(): number;
/**
* @returns {number} 
*/
  get_y(): number;
/**
* @returns {number} 
*/
  get_z(): number;
/**
* @param {number} x 
* @param {number} y 
* @param {number} z 
*/
  set(x: number, y: number, z: number): void;
/**
* @param {Vector3D} vector 
*/
  move_by(vector: Vector3D): void;
/**
* @param {Vector3D} vector 
*/
  add(vector: Vector3D): void;
/**
* @param {Vector3D} vector 
*/
  subtract(vector: Vector3D): void;
/**
* @param {Vector3D} vector 
* @returns {Vector3D} 
*/
  diff(vector: Vector3D): Vector3D;
/**
* @param {number} factor 
*/
  scale_by(factor: number): void;
/**
* @returns {number} 
*/
  size(): number;
/**
* @returns {number} 
*/
  angle(): number;
/**
*/
  normalize(): void;
/**
* @param {number} x 
* @param {number} y 
* @param {number} z 
*/
  scale(x: number, y: number, z: number): void;
/**
* @returns {Vector3D} 
*/
  clone(): Vector3D;
}

/**
* If `module_or_path` is {RequestInfo}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {RequestInfo | BufferSource | WebAssembly.Module} module_or_path
*
* @returns {Promise<any>}
*/
export default function init (module_or_path?: RequestInfo | BufferSource | WebAssembly.Module): Promise<any>;
        