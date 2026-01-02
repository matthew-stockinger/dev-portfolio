<script>
	import { HeroSection, AboutMeSection } from '$components';

	let { data } = $props();
	let { workExperience } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
