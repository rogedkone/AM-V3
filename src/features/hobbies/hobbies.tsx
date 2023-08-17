import {ReactComponent as Aiogram} from '@shared/assets/svg/hobbies/aiogram.svg'
import {ReactComponent as Blender} from '@shared/assets/svg/hobbies/blender.svg'
import {ReactComponent as DiscordJS} from '@shared/assets/svg/hobbies/discordjs.svg'
import {ReactComponent as DrawMe} from '@shared/assets/svg/hobbies/drawme.svg'
import {ReactComponent as FireBase} from '@shared/assets/svg/hobbies/firebase.svg'
import {ReactComponent as ObsidianMD} from '@shared/assets/svg/hobbies/obsidian.svg'
import {ReactComponent as Python} from '@shared/assets/svg/hobbies/python.svg'
import {ReactComponent as Telegraf} from '@shared/assets/svg/hobbies/telegraf.svg'
import {getStore} from "@shared/store";
import {svg} from "@shared/styles";
import styles from "./hobbies.module.css";

export const Hobbies = () => {
    const icons = [Blender, Python, ObsidianMD, FireBase, DrawMe, Aiogram, Telegraf, DiscordJS]
    const {colorized} = getStore('app').useState()
    return (
        <div className={`${styles.hobbies} ${colorized ? styles.colorized : ''}`}>
            {icons.map((Icon, idx) => <Icon className={[6].includes(idx) ? svg.stroke : svg.fill}
                                            key={idx + '-' + Icon}/>)}
        </div>
    );
};
