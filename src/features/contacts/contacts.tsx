import {ReactComponent as Discord} from '@shared/assets/svg/contacts/discord.svg'
import {ReactComponent as Email} from '@shared/assets/svg/contacts/email.svg'
import {ReactComponent as Github} from '@shared/assets/svg/contacts/github.svg'
import {ReactComponent as LinkedIn} from '@shared/assets/svg/contacts/linkedin.svg'
import {ReactComponent as Map} from '@shared/assets/svg/contacts/map.svg'
import {ReactComponent as YaMusic} from '@shared/assets/svg/contacts/music.svg'
import {ReactComponent as Phone} from '@shared/assets/svg/contacts/phone.svg'
import {ReactComponent as Telegram} from '@shared/assets/svg/contacts/telegram.svg'
import {ReactComponent as Vk} from '@shared/assets/svg/contacts/vk.svg'
import {getStore} from "@shared/store";
import {svg} from '@shared/styles'
import styles from "./contacts.module.css";

export const Contacts = () => {
    const icons = [Phone, Telegram, Email, LinkedIn, Vk, Github, Discord, YaMusic, Map]
    const {colorized} = getStore('app').useState()
    return (
        <div className={`${styles.contacts} ${colorized ? styles.colorized : ''}`}>
            {icons.map((Icon, idx) => <Icon
                className={[0, 1, 2, 4, 6, 7].includes(idx) ? svg.stroke : svg.fill}
                key={idx + '-' + Icon}/>)}
        </div>
    );
};
