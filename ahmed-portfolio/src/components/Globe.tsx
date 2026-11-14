"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
function Earth(){const ref=useRef<THREE.Group>(null);useFrame((_,d)=>{if(ref.current)ref.current.rotation.y+=d*.12;});return <group ref={ref}><mesh><icosahedronGeometry args={[1.15,3]}/><meshBasicMaterial color="#29c8ff" wireframe transparent opacity={.55}/></mesh><mesh><sphereGeometry args={[1.1,24,24]}/><meshBasicMaterial color="#0a5a99" wireframe transparent opacity={.18}/></mesh></group>}
export default function Globe(){return <div className="globe"><Canvas camera={{position:[0,0,3.4]}}><ambientLight intensity={1}/><pointLight position={[2,2,2]} color="#22d3ee" intensity={8}/><Earth/></Canvas></div>}
