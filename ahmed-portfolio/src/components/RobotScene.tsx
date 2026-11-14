"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
function Robot() {
 const group = useRef<THREE.Group>(null);
 useFrame((state, delta) => { if (group.current) { group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, state.pointer.x * .35, 3, delta); group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -state.pointer.y * .12, 3, delta); } });
 return <group ref={group} position={[0,-.15,0]}>
  <mesh position={[0,1.05,0]}><sphereGeometry args={[.58,48,48]}/><meshPhysicalMaterial color="#111326" metalness={.88} roughness={.2} clearcoat={1}/></mesh>
  <mesh position={[0,1.12,.48]}><boxGeometry args={[.67,.22,.12]}/><meshBasicMaterial color="#65eaff"/></mesh>
  <mesh position={[0,.1,0]}><capsuleGeometry args={[.48,.95,8,24]}/><meshPhysicalMaterial color="#17182d" metalness={.8} roughness={.26}/></mesh>
  {[-.68,.68].map((x)=><group key={x} position={[x,.05,0]}><mesh><capsuleGeometry args={[.16,.78,6,16]}/><meshStandardMaterial color="#252842" metalness={.8}/></mesh><mesh position={[0,-.48,.03]}><sphereGeometry args={[.2,24,24]}/><meshBasicMaterial color="#a855f7"/></mesh></group>)}
  {[-.25,.25].map(x=><mesh key={x} position={[x,-.85,0]}><capsuleGeometry args={[.19,.75,6,16]}/><meshStandardMaterial color="#20233c" metalness={.8}/></mesh>)}
 </group>;
}
export default function RobotScene(){return <div className="scene"><Canvas camera={{position:[0,.5,4.4],fov:42}}><ambientLight intensity={1.2}/><pointLight position={[3,3,3]} intensity={35} color="#8b5cf6"/><pointLight position={[-3,1,2]} intensity={22} color="#22d3ee"/><Float speed={1.2} rotationIntensity={.15} floatIntensity={.3}><Robot/></Float><Sparkles count={65} scale={4.5} size={2} speed={.3} color="#9d8cff"/><OrbitControls enableZoom={false} enablePan={false} minPolarAngle={1.1} maxPolarAngle={2}/></Canvas></div>}
