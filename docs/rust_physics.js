
let wasm;

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}
/**
*/
export class Particle {

    static __wrap(ptr) {
        const obj = Object.create(Particle.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_particle_free(ptr);
    }
    /**
    * @param {Vector3D} pos
    * @param {number} radius
    * @returns {Particle}
    */
    static create(pos, radius) {
        _assertClass(pos, Vector3D);
        var ret = wasm.particle_create(pos.ptr, radius);
        return Particle.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    get_x() {
        var ret = wasm.particle_get_x(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_y() {
        var ret = wasm.particle_get_y(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_z() {
        var ret = wasm.particle_get_z(this.ptr);
        return ret;
    }
    /**
    * @returns {boolean}
    */
    is_locked() {
        var ret = wasm.particle_is_locked(this.ptr);
        return ret !== 0;
    }
    /**
    */
    lock() {
        wasm.particle_lock(this.ptr);
    }
    /**
    */
    unlock() {
        wasm.particle_unlock(this.ptr);
    }
    /**
    * @returns {number}
    */
    get_restitution() {
        var ret = wasm.particle_get_restitution(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_friction() {
        var ret = wasm.particle_get_friction(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_radius() {
        var ret = wasm.particle_get_radius(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_velocity() {
        var ret = wasm.particle_get_velocity(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_direction() {
        var ret = wasm.particle_get_direction(this.ptr);
        return ret;
    }
    /**
    */
    reset() {
        wasm.particle_reset(this.ptr);
    }
    /**
    * @param {number} value
    */
    set_restitution(value) {
        wasm.particle_set_restitution(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set_friction(value) {
        wasm.particle_set_friction(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set_radius(value) {
        wasm.particle_set_radius(this.ptr, value);
    }
    /**
    */
    update() {
        wasm.particle_update(this.ptr);
    }
    /**
    * @param {number} width
    * @param {number} height
    * @param {number} depth
    */
    collide_walls(width, height, depth) {
        wasm.particle_collide_walls(this.ptr, width, height, depth);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    accelerate(x, y, z) {
        wasm.particle_accelerate(this.ptr, x, y, z);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    gravitate(x, y, z) {
        wasm.particle_accelerate(this.ptr, x, y, z);
    }
    /**
    * @param {Vector3D} force
    */
    accelerate_by(force) {
        _assertClass(force, Vector3D);
        var ptr0 = force.ptr;
        force.ptr = 0;
        wasm.particle_accelerate_by(this.ptr, ptr0);
    }
    /**
    * @param {Vector3D} gravity
    */
    gravitate_by(gravity) {
        _assertClass(gravity, Vector3D);
        var ptr0 = gravity.ptr;
        gravity.ptr = 0;
        wasm.particle_accelerate_by(this.ptr, ptr0);
    }
}
/**
*/
export class Vector3D {

    static __wrap(ptr) {
        const obj = Object.create(Vector3D.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_vector3d_free(ptr);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @returns {Vector3D}
    */
    static create(x, y, z) {
        var ret = wasm.vector3d_create(x, y, z);
        return Vector3D.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    get_x() {
        var ret = wasm.vector3d_get_x(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_y() {
        var ret = wasm.vector3d_get_y(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_z() {
        var ret = wasm.vector3d_get_z(this.ptr);
        return ret;
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    set(x, y, z) {
        wasm.vector3d_set(this.ptr, x, y, z);
    }
    /**
    * @param {Vector3D} vector
    */
    move_by(vector) {
        _assertClass(vector, Vector3D);
        var ptr0 = vector.ptr;
        vector.ptr = 0;
        wasm.vector3d_move_by(this.ptr, ptr0);
    }
    /**
    * @param {Vector3D} vector
    */
    add(vector) {
        _assertClass(vector, Vector3D);
        var ptr0 = vector.ptr;
        vector.ptr = 0;
        wasm.vector3d_add(this.ptr, ptr0);
    }
    /**
    * @param {Vector3D} vector
    */
    subtract(vector) {
        _assertClass(vector, Vector3D);
        var ptr0 = vector.ptr;
        vector.ptr = 0;
        wasm.vector3d_subtract(this.ptr, ptr0);
    }
    /**
    * @param {Vector3D} vector
    * @returns {Vector3D}
    */
    diff(vector) {
        _assertClass(vector, Vector3D);
        var ptr0 = vector.ptr;
        vector.ptr = 0;
        var ret = wasm.vector3d_diff(this.ptr, ptr0);
        return Vector3D.__wrap(ret);
    }
    /**
    * @param {number} factor
    */
    scale_by(factor) {
        wasm.vector3d_scale_by(this.ptr, factor);
    }
    /**
    * @returns {number}
    */
    size() {
        var ret = wasm.vector3d_size(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    angle() {
        var ret = wasm.vector3d_angle(this.ptr);
        return ret;
    }
    /**
    */
    normalize() {
        wasm.vector3d_normalize(this.ptr);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    scale(x, y, z) {
        wasm.vector3d_scale(this.ptr, x, y, z);
    }
    /**
    * @returns {Vector3D}
    */
    clone() {
        var ret = wasm.vector3d_clone(this.ptr);
        return Vector3D.__wrap(ret);
    }
}

function init(module) {
    if (typeof module === 'undefined') {
        module = import.meta.url.replace(/\.js$/, '_bg.wasm');
    }
    let result;
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    if ((typeof URL === 'function' && module instanceof URL) || typeof module === 'string' || (typeof Request === 'function' && module instanceof Request)) {

        const response = fetch(module);
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            result = WebAssembly.instantiateStreaming(response, imports)
            .catch(e => {
                return response
                .then(r => {
                    if (r.headers.get('Content-Type') != 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                        return r.arrayBuffer();
                    } else {
                        throw e;
                    }
                })
                .then(bytes => WebAssembly.instantiate(bytes, imports));
            });
        } else {
            result = response
            .then(r => r.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes, imports));
        }
    } else {

        result = WebAssembly.instantiate(module, imports)
        .then(result => {
            if (result instanceof WebAssembly.Instance) {
                return { instance: result, module };
            } else {
                return result;
            }
        });
    }
    return result.then(({instance, module}) => {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;

        return wasm;
    });
}

export default init;

