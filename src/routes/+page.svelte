<script lang="ts">
  import BaseAnalytics from "$lib/components/BaseAnalytics.svelte";

  export let data: {
    jobs: any;
    percentageWithoutSalary: number;
  };

  const { percentageWithoutSalary } = data;
</script>

<svelte:head>
  <title>Offer analytics</title>
  <meta name="description" content="Job posting analytics" />
</svelte:head>

<section class="section">
  <h1 class="section__text">What's being offered?</h1>
  <BaseAnalytics {percentageWithoutSalary} />
</section>

<style lang="scss">
  .section {
    flex: 1;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: block;
    padding: 2rem;
    color: black;

    &__text {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
</style>
