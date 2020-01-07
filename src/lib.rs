

#[cfg(test)]
mod tests {
    use crate::Vector3D;

    #[test]
    fn vector3d_set() {
        let f = Vector3D {
            x: 0f64,
            y: 0f64,
            z: 0f64,
        };

        let f = f.set(1.2f64, 22.00003f64, -103.004050006f64);

        assert_eq!(f.x, 1.2f64);
        assert_eq!(f.y, 22.00003f64);
        assert_eq!(f.z, -103.004050006f64);
    }

    #[test]
    fn vector_add() {
        let f = Vector3D {
            x: 0.00001f64,
            y: 0.000002f64,
            z: 0.0000003f64,
        };
        let g = Vector3D {
            x: 1f64,
            y: 2f64,
            z: 3f64,
        };
        let f = f.add(g);


        assert_eq!(f.x, 1.00001f64);
        assert_eq!(f.y, 2.000002f64);
        assert_eq!(f.z, 3.0000003f64);
    }

    #[test]
    fn vector_subtract(){
        let f = Vector3D {
            x: 0.00001f64,
            y: 0.000002f64,
            z: 0.0000003f64,
        };
        let g = Vector3D {
            x: 1f64,
            y: 2f64,
            z: 3f64,
        };
        let f = f.subtract(g);


        assert_eq!(f.x,-0.99999f64);
        assert_eq!(f.y, -1.999998);
        assert_eq!(f.z, -2.9999997);
    }
}

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Vector3D {
    x: f64,
    y: f64,
    z: f64,
}

#[wasm_bindgen]
impl Vector3D {

    pub fn set(&self, x: f64, y: f64, z: f64) -> Vector3D {
        return Vector3D {
            x,
            y,
            z,
        };
    }

    pub fn add(&self, vector: Vector3D) -> Vector3D {
        return Vector3D {
            x: self.x + vector.x,
            y: self.y + vector.y,
            z: self.z + vector.z,
        };
    }

    pub fn subtract(&self, vector: Vector3D) -> Vector3D {
        return Vector3D {
            x: self.x - vector.x,
            y: self.y - vector.y,
            z: self.z - vector.z,
        };
    }

    pub fn scale_by(&self, factor: f64) -> Vector3D {
        return self.scale(factor, factor, factor);
    }

    pub fn size(&self) -> f64 {
        let x2 = self.x.powf(2f64);
        let y2 = self.y.powf(2f64);
        let z2 = self.z.powf(2f64);

        return (x2 + y2 + z2).sqrt();
    }

    pub fn normalize(&self) -> Vector3D {
        return self.scale_by(1f64 / self.size());
    }

    pub fn scale(&self, x: f64, y: f64, z: f64) -> Vector3D {
        return Vector3D {
            x: self.x * x,
            y: self.y * y,
            z: self.z * z,
        };
    }
}
