import {useState} from "react";
import { motion } from "framer-motion"


export default function SquareButton(props) {
    const [enabled, setEnabled] = useState(false);

    return (
        <motion.div className={"border-slate-800 border-4 rounded-xl h-32 text-black font-medium p-2"
        + (enabled ? " bg-slate-700 text-white" : "")}
        onClick={() => setEnabled(!enabled)}
        whileHover={{scale: 1.1}}
        >
            {props.text}
            {props.icon}
        </motion.div>
    )
}