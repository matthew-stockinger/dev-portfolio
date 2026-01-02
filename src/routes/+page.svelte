<script>
	import { HeroSection, AboutMeSection } from '$components';

	let { data } = $props();
	// svelte-ignore state_referenced_locally
	let { workExperience } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
