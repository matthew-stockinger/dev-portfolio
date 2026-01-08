<script>
	import { HeroSection, AboutMeSection, MyWorkSection } from '$components';

	let { data } = $props();
	// svelte-ignore state_referenced_locally
	let { workExperience, projects } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />