import { type Component, onMount } from "solid-js";
import Blockly from "blockly";
import toolbox from "./toolbox.json";

import styles from "./BlocklyWorkspace.module.css";

const BlocklyWorkspace: Component = () => {
	const blocklyDiv = <div class={styles.blocklyDiv}>{toolbox as any}</div>;

	onMount(() => {
		Blockly.inject(blocklyDiv as Element, {
			//@ts-ignore
			toolbox,
		});
	});

	return blocklyDiv;
};

export default BlocklyWorkspace;
