import {
    ContactsSection,
    EducationSection,
    ExperienceSection,
    HobbiesSection,
    InterestsSection,
    LanguagesSection,
    SkillsSection,
    SoftSkillsSection
} from '@widgets';
import { Controls, Navigation } from '@features';
import { About, Personal } from '@entities';
import styles from './welcome.module.css';

export const Welcome = () => {
	const isMobile = true;
	return <div className={styles.welcome}>
		{isMobile && <div>
			<Navigation />
			<Controls />
			<Personal />
			<About />
			<SkillsSection />
			<HobbiesSection />
			<SoftSkillsSection />
			<InterestsSection />
			<EducationSection />
			<ExperienceSection />
			<LanguagesSection />
			<ContactsSection />
		</div>}
		{!isMobile && <div></div>}


	</div>;

};
