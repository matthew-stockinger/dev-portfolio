<script>
	import { HeroSection, AboutMeSection } from '$components';
	
	let { data } = $props();

	$inspect(data);
</script>

<HeroSection />
<AboutMeSection />
