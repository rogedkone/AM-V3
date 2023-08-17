import {ReactComponent as Ant} from '@shared/assets/svg/skills/ant.svg'
import {ReactComponent as Bootstrap} from '@shared/assets/svg/skills/bootstrap.svg'
import {ReactComponent as CoreUI} from '@shared/assets/svg/skills/coreui.svg'
import {ReactComponent as Electron} from '@shared/assets/svg/skills/electron.svg'
import {ReactComponent as Figma} from '@shared/assets/svg/skills/figma.svg'
import {ReactComponent as Fsd} from '@shared/assets/svg/skills/fsd.svg'
import {ReactComponent as GitFlow} from '@shared/assets/svg/skills/gitflow.svg'
import {ReactComponent as Js} from '@shared/assets/svg/skills/js.svg'
import {ReactComponent as Koa} from '@shared/assets/svg/skills/koa.svg'
import {ReactComponent as Miro} from '@shared/assets/svg/skills/miro.svg'
import {ReactComponent as Mui} from '@shared/assets/svg/skills/mui.svg'
import {ReactComponent as NoSql} from '@shared/assets/svg/skills/nosql.svg'
import {ReactComponent as Notion} from '@shared/assets/svg/skills/notion.svg'
import {ReactComponent as OAuth} from '@shared/assets/svg/skills/oauth.svg'
import {ReactComponent as OpenApi} from '@shared/assets/svg/skills/openapi.svg'
import {ReactComponent as PostCSS} from '@shared/assets/svg/skills/postcss.svg'
import {ReactComponent as PullState} from '@shared/assets/svg/skills/pullstate.svg'
import {ReactComponent as ReactSvgIcon} from '@shared/assets/svg/skills/react.svg'
import {ReactComponent as Redux} from '@shared/assets/svg/skills/redux.svg'
import {ReactComponent as Rest} from '@shared/assets/svg/skills/rest.svg'
import {ReactComponent as Sass} from '@shared/assets/svg/skills/sass.svg'
import {ReactComponent as Sql} from '@shared/assets/svg/skills/sql.svg'
import {ReactComponent as Styled} from '@shared/assets/svg/skills/styled.svg'
import {ReactComponent as Tailwind} from '@shared/assets/svg/skills/tailwind.svg'
import {ReactComponent as Ts} from '@shared/assets/svg/skills/ts.svg'
import {ReactComponent as Unix} from '@shared/assets/svg/skills/unix.svg'
import {ReactComponent as Vite} from '@shared/assets/svg/skills/vite.svg'
import {ReactComponent as Webpack} from '@shared/assets/svg/skills/webpack.svg'
import {getStore} from "@shared/store";
import {svg} from '@shared/styles'
import styles from "./skills.module.css";

export const Skills = () => {
    const icons = [Js, Ts, Bootstrap, Figma, Sql, Koa, Tailwind,
        ReactSvgIcon, Fsd, Mui, Notion, NoSql, Electron, PostCSS, Redux, PullState, Ant, Miro, OAuth, Rest, Sass, Webpack,
        Vite, CoreUI, GitFlow, Unix, OpenApi, Styled]
    const {colorized} = getStore('app').useState()
    return (
        <div className={`${styles.skills} ${colorized ? styles.colorized : ''}`}>
            {icons.map((Icon, idx) => <Icon className={[4, 11, 18, 25].includes(idx) ? svg.stroke : svg.fill}
                                            key={idx + '-' + Icon}/>)}
        </div>
    );
};
