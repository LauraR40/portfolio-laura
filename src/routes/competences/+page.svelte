<script>
  import CV from "$components/CV.svelte";
  import SkillTree from "$components/competences/SkillTree.svelte";
  import Graph from "$components/competences/Graph.svelte";
  import CVUpload from "$components/competences/CVUpload.svelte";

  let categories = [
    {
      name: "Programming Languages",
      icon: "/icons/home.svg",
      skills: [
        { name: "JavaScript", icon: "/icons/js.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "Java", icon: "/icons/java.svg" },
      ],
    },
    {
      name: "Frameworks",
      icon: "/icons/home.svg",
      skills: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Vue", icon: "/icons/vue.svg" },
        { name: "Svelte", icon: "/icons/svelte.svg" },
      ],
    },
    {
      name: "DevOps",
      icon: "/icons/home.svg",
      skills: [
        { name: "Docker", icon: "/icons/docker.svg" },
        { name: "Kubernetes", icon: "/icons/home.svg" },
      ],
    },
    {
      name: "Design",
      icon: "/icons/home.svg",
      skills: [
        { name: "Figma", icon: "/icons/home.svg" },
        { name: "Dribble", icon: "/icons/home.svg" },
      ],
    },
    {
      name: "Audiovisuel",
      icon: "/icons/home.svg",
      skills: [
        { name: "DaVinci Resolve", icon: "/icons/home.svg" },
        { name: "Photoshop", icon: "/icons/home.svg" },
        { name: "Affinity", icon: "/icons/home.svg" },
        { name: "Canva", icon: "/icons/home.svg" },
        { name: "PowerPoint ?", icon: "/icons/home.svg" },
      ],
    },
  ];
</script>

<!-- <SkillTree {categories} /> -->
<CVUpload />
<Graph />
<CV />
