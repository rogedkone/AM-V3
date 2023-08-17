import {ReactComponent as Camping} from '@shared/assets/svg/interests/camping.svg'
import {ReactComponent as Civilization} from '@shared/assets/svg/interests/civilization.svg'
import {ReactComponent as Curse} from '@shared/assets/svg/interests/curse.svg'
import {ReactComponent as Factorio} from '@shared/assets/svg/interests/factorio.svg'
import {ReactComponent as Forest} from '@shared/assets/svg/interests/forest.svg'
import {ReactComponent as Garrys} from '@shared/assets/svg/interests/garrys.svg'
import {ReactComponent as Genshin} from '@shared/assets/svg/interests/genshin.svg'
import {ReactComponent as Heroes} from '@shared/assets/svg/interests/heroes.svg'
import {ReactComponent as Minecraft} from '@shared/assets/svg/interests/minecraft.svg'
import {ReactComponent as Nerf} from '@shared/assets/svg/interests/nerf.svg'
import {ReactComponent as Nexus} from '@shared/assets/svg/interests/nexus.svg'
import {ReactComponent as Quake} from '@shared/assets/svg/interests/quake.svg'
import {ReactComponent as Reading} from '@shared/assets/svg/interests/reading.svg'
import {ReactComponent as Teach} from '@shared/assets/svg/interests/teach.svg'
import {ReactComponent as TeamBuilding} from '@shared/assets/svg/interests/teambuild.svg'
import {ReactComponent as Warframe} from '@shared/assets/svg/interests/warframe.svg'
import {getStore} from "@shared/store";
import {svg} from "@shared/styles";
import styles from "./interests.module.css";

export const Interests = () => {
    const icons = [Camping, Civilization, Curse, Factorio, Forest, Garrys, Genshin, Heroes, Minecraft, Nerf, Nexus, Quake, Reading, Teach, TeamBuilding, Warframe]
    const {colorized} = getStore('app').useState()
    return (
        <div className={`${styles.interests} ${colorized ? styles.colorized : ''}`}>
            {icons.map((Icon, idx) => <Icon className={[4, 6, 8].includes(idx) ? svg.stroke : svg.fill}
                                            key={idx + '-' + Icon}/>)}
        </div>
    );
};
