#[cfg(test)]
mod tests {
    use crate::Vector3D;

    #[test]
    fn vector3d_set() {
        let mut f = Vector3D {
            x: 0f64,
            y: 0f64,
            z: 0f64,
        };

        f.set(1.2f64, 22.00003f64, -103.004050006f64);

        assert_eq!(f.x, 1.2f64);
        assert_eq!(f.y, 22.00003f64);
        assert_eq!(f.z, -103.004050006f64);
    }

    #[test]
    fn vector_add() {
        let mut f = Vector3D {
            x: 0.00001f64,
            y: 0.000002f64,
            z: 0.0000003f64,
        };
        let g = Vector3D {
            x: 1f64,
            y: 2f64,
            z: 3f64,
        };
        f.add(g);


        assert_eq!(f.x, 1.00001f64);
        assert_eq!(f.y, 2.000002f64);
        assert_eq!(f.z, 3.0000003f64);
    }

    #[test]
    fn vector_subtract() {
        let mut f = Vector3D {
            x: 0.00001f64,
            y: 0.000002f64,
            z: 0.0000003f64,
        };
        let g = Vector3D {
            x: 1f64,
            y: 2f64,
            z: 3f64,
        };
        f.subtract(g);


        assert_eq!(f.x, -0.99999f64);
        assert_eq!(f.y, -1.999998f64);
        assert_eq!(f.z, -2.9999997f64);
    }

    #[test]
    fn vector_scale_by() {
        let mut f = Vector3D {
            x: 1f64,
            y: 2f64,
            z: 3f64,
        };

        f.scale_by(6f64);


        assert_eq!(f.x, 6f64);
        assert_eq!(f.y, 12f64);
        assert_eq!(f.z, 18f64);
    }

    #[test]
    fn vector_scale() {
        let mut f = Vector3D {
            x: 1f64,
            y: 2f64,
            z: 3f64,
        };

        f.scale(10f64, 3f64, 5f64);


        assert_eq!(f.x, 10f64);
        assert_eq!(f.y, 6f64);
        assert_eq!(f.z, 15f64);
    }

    #[test]
    fn vector_size() {
        let f = Vector3D {
            x: 12.43f64,
            y: -2.12f64,
            z: 3.6f64,
        };

        assert_eq!(f.size(), 13.113325283847725f64);
    }

    #[test]
    fn vector_normalize() {
        let mut f = Vector3D {
            x: 5f64,
            y: 2f64,
            z: 3f64,
        };
        f.normalize();

        assert_eq!(f.x, 0.8111071056538127f64);
        assert_eq!(f.y, 0.3244428422615251f64);
        assert_eq!(f.z, 0.48666426339228763f64);
    }

    #[test]
    fn test_pointer() {
        let mut x = Vector3D { x: 56f64, y: 0f64, z: 0f64 };
        print!("{}\n", x.x);
        fx(&mut x);
        print!("{}\n", x.x);
    }

    fn fx(x: &mut Vector3D) {
        x.x = 4f64
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
    pub fn create(x: f64, y: f64, z: f64) -> Vector3D {
        Vector3D { x, y, z }
    }
    pub fn get_x(&self) -> f64 { self.x }
    pub fn get_y(&self) -> f64 { self.y }
    pub fn get_z(&self) -> f64 { self.z }

    pub fn set(&mut self, x: f64, y: f64, z: f64) {
        self.x = x;
        self.y = y;
        self.z = z;
    }

    pub fn move_by(&mut self, vector: Vector3D) {
        self.set(vector.get_x(), vector.get_y(), vector.get_z())
    }

    pub fn add(&mut self, vector: Vector3D) {
        self.x += vector.x;
        self.y += vector.y;
        self.z += vector.z;
    }

    pub fn subtract(&mut self, vector: Vector3D) {
        self.x -= vector.x;
        self.y -= vector.y;
        self.z -= vector.z;
    }

    pub fn scale_by(&mut self, factor: f64) {
        return self.scale(factor, factor, factor);
    }

    pub fn size(&self) -> f64 {
        let x2 = self.x.powf(2f64);
        let y2 = self.y.powf(2f64);
        let z2 = self.z.powf(2f64);

        return (x2 + y2 + z2).sqrt();
    }

    pub fn normalize(&mut self) {
        self.scale_by(1f64 / self.size());
    }

    pub fn scale(&mut self, x: f64, y: f64, z: f64) {
        self.x *= x;
        self.y *= y;
        self.z *= z;
    }

    pub fn clone(&self) -> Vector3D {
        Vector3D {
            x: self.x,
            y: self.y,
            z: self.z,
        }
    }
}

#[wasm_bindgen]
pub struct Particle {
    old_pos: Vector3D,
    pos: Vector3D,
    velocity: Vector3D,
    visible: bool,
    locked: bool,
    restitution: f64,
    friction: f64,
    radius: f64,
}

#[wasm_bindgen]
impl Particle {
    pub fn create(pos: &mut Vector3D, radius: f64) -> Particle {
        Particle {
            pos: pos.clone(),
            old_pos: pos.clone(),
            velocity: Vector3D { x: 0.0, y: 0.0, z: 0.0 },
            visible: false,
            locked: false,
            restitution: 0.8,
            friction: 0.1,
            radius,
        }
    }

    pub fn get_x(&self) -> f64 { self.pos.x }
    pub fn get_y(&self) -> f64 { self.pos.y }
    pub fn get_z(&self) -> f64 { self.pos.z }

    pub fn get_restitution(&self) -> f64 { self.restitution }
    pub fn get_friction(&self) -> f64 { self.friction }
    pub fn get_radius(&self) -> f64 { self.radius }

    pub fn set_restitution(&mut self, value: f64) {
        self.restitution = value;
    }
    pub fn set_friction(&mut self, value: f64) {
        self.friction = value;
    }
    pub fn set_radius(&mut self, value: f64) {
        self.radius = value;
    }

    pub fn update(&mut self) {
        if !self.locked {
            self.velocity.move_by(self.pos.clone());
            self.velocity.subtract(self.old_pos.clone());
            self.old_pos.move_by(self.pos.clone());
            self.pos.add(self.velocity.clone())
        }
    }

    pub fn collide_ground(&mut self, ground_y: f64) {
        if self.pos.y > ground_y - self.radius {
            self.pos.y = ground_y - self.radius;
            self.old_pos.y = self.get_y() + (self.velocity.get_y() * self.restitution).floor();
            self.old_pos.x += (self.get_x() - self.old_pos.x) * self.friction;
            self.old_pos.z += (self.get_z() - self.old_pos.z) * self.friction;
        }
    }

    pub fn accelerate(&mut self, x: f64, y: f64, z: f64) {
        self.accelerate_by(Vector3D { x, y, z });
    }

    pub fn gravitate(&mut self, x: f64, y: f64, z: f64) {
        self.gravitate_by(Vector3D { x, y, z });
    }

    pub fn accelerate_by(&mut self, force: Vector3D) {
        if !self.locked {
            self.old_pos.add(force);
        }
    }

    pub fn gravitate_by(&mut self, gravity: Vector3D) {
        if !self.locked {
            self.accelerate_by(gravity)
        }
    }
}

