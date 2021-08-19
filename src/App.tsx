import React, { useRef, useState } from 'react';
import './App.css';
import { Canvas, useFrame, Vector3 } from '@react-three/fiber';
import {BufferGeometry} from "three";
import * as THREE from 'three'

function App() {
	const Shape = ({
		position,
		rotation,
	}: {
		position: Vector3;
		rotation: number[];
	}) => {
		const ref = useRef({ position: { x: 0, y: 0, z: 0 } });
		useFrame((state, delta) => {
			ref.current.position.x += rotation[0] / 100;
			ref.current.position.y += rotation[1] / 100;
			ref.current.position.z += rotation[2] / 100;
		});

		const initialColor = '#eff200';
		const activeColor = '#aa33ff';
		const [color, setColor] = useState(initialColor);
		const [permanentColor, setPermanentColor] = useState(false);

		return (
			<mesh
				ref={ref}
				position={position}
				onPointerOver={() => setColor(activeColor)}
				onPointerOut={() => setColor(initialColor)}
				onClick={() => {
					setPermanentColor(true);
				}}
			>
				<meshPhongMaterial color={permanentColor ? activeColor : color} />
				<sphereBufferGeometry args={[0.1]} />
			</mesh>
		);
	};

	const renderShapes = () => {
		const shapesArray = [];
		let index = 0;

		for (let i = 0; i < 1500; i++) {
			shapesArray.push(
				<Shape
					key={index++}
					position={
						i % 2
							? [
									Math.random(),
									Math.random(),
									Math.random(),
							  ]
							: i % 3 ? [
									-Math.random(),
									-Math.random(),
									-Math.random(),
							  ] : i % 4 ? [
								-Math.random(),
								Math.random(),
								Math.random(),
							] : [
								Math.random(),
								-Math.random(),
								+Math.random(),
							]
					}
					rotation={[
						Math.random() / Math.random() / 100,
						Math.random() / Math.random() / 100,
						Math.random() / Math.random() / 100,
					]}
				/>
			);
		}

		return shapesArray;
	};

	return (
		<div className='App'>
			<Canvas>
				<ambientLight
				/>
				<pointLight color={'#ffffff'} position={[0, 0, 0]} />
				{renderShapes()}
			</Canvas>
		</div>
	);
}

export default App;
