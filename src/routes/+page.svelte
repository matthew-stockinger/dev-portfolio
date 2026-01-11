<script>
	import {
		HeroSection,
		AboutMeSection,
		MyWorkSection,
		SkillsSection,
		ContactSection
	} from '$components';

	let { data } = $props();
	// svelte-ignore state_referenced_locally
	let { workExperience, projects, skills } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
<ContactSection />
