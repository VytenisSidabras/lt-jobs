<script lang="ts">
  export let jobs = [] as any[];

  let currentlyOpenJob = null;
</script>

<div class="job-list">
  <h1 class="job-list__heading">Jobs list</h1>
  <div class="job-list__grid">
    <ul class="job-list__jobs">
      {#each jobs as job}
        <li class="job-list__card" on:click={() => (currentlyOpenJob = job)}>
          <p class="job-list__title">
            {job.title}
          </p>
          <p class="job-list__company">
            {job.company}
          </p>
          <p class="job-list__salary">
            {#if job.salaryFrom === "N/A"}
              No salary data
            {:else}
              From: {job.salaryFrom} To: {job.salaryTo}
            {/if}
          </p>
          <button
            class="job-list__check-button"
            on:click={() => (currentlyOpenJob = job)}
          >
            Check

            <!-- svg icon to right -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="job-list__chevron-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </li>
      {/each}
    </ul>
    {#if currentlyOpenJob}
      <iframe
        src={currentlyOpenJob.link}
        class="job-list__iframe"
        frameborder="0"
        allowfullscreen
      />
    {/if}
  </div>
</div>

<style lang="scss" scoped>
  .job-list {
    min-height: 100%;
    color: lightgray;

    &__heading {
      font-size: 1.5rem;
      color: white;
      text-transform: uppercase;
      display: flex;
      justify-content: flex-start;
      letter-spacing: 3.5px;
      padding: 1rem;
    }

    &__grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }

    &__jobs {
      list-style: none;
      padding: 0.5rem 0.5rem 0 1rem;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
      height: 100%;
      max-height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
    }

    &__card {
      position: relative;
      background: white;
      width: 100%;
      height: auto;
      box-sizing: border-box;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        margin-left: 1rem;
        width: calc(100% - 1rem);
        background: #fafafc;
        cursor: pointer;
      }
    }

    &__title {
      width: 75%;
      font-size: 1.1rem;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.7);
    }

    &__company {
      font-size: 0.9rem;
      color: rgba(0, 0, 0, 0.5);
      margin-bottom: 1.5rem;
    }

    &__salary {
      position: absolute;
      left: 0;
      bottom: 0;
      text-align: center;
      border-bottom-left-radius: 8px;
      border-top-right-radius: 8px;
      background: rgba(blue, 0.8);
      color: white;
      padding: 0.5rem;
      font-size: 0.8rem;
      min-width: 30%;
    }

    &__check-button {
      position: absolute;
      right: 0;
      bottom: 0;
      text-align: center;
      border-bottom-right-radius: 8px;
      border-top-left-radius: 8px;
      background: rgba(blue, 0.8);
      color: white;
      padding: 0.5rem 0.5rem 0.5rem 1rem;
      font-size: 0.8rem;
      width: auto;
      border: none;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;

      &:hover {
        background: rgba(blue, 0.9);
        cursor: pointer;
        outline: none;

        &:focus {
          outline: none;
        }
      }
    }

    &__iframe {
      width: 100%;
      height: 100%;
      padding: 0 1rem 1rem 0;
      box-sizing: border-box;
    }
  }
</style>
