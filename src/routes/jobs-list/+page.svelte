<script lang="ts">
  import JobsList from "$lib/components/JobsList.svelte";

  export let data: {
    jobs: any;
    percentageWithoutSalary: number;
  };

  const { jobs } = data;
</script>

<svelte:head>
  <title>Jobs list</title>
  <meta name="description" content="Job listings" />
</svelte:head>

<section class="section">
  <JobsList {jobs} />
</section>

<style lang="scss" scoped>
  $charcoal: #231f20;

  .section {
    flex: 1;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: #0f0d0e;

    background-image: repeating-linear-gradient(
        -45deg,
        $charcoal,
        $charcoal 1px,
        transparent 1px,
        transparent 30px
      ),
      repeating-linear-gradient(
        45deg,
        $charcoal,
        $charcoal 1px,
        transparent 1px,
        transparent 30px
      ),
      repeating-linear-gradient(
        to bottom,
        $charcoal,
        $charcoal 1px,
        transparent 1px,
        transparent 21px
      );
  }
</style>
