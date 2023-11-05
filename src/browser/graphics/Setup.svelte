<script lang="ts">
  import { runDataArray } from '../store/speedcontrol'
  $: runNames = $runDataArray.map(runDatum => runDatum.game)
</script>

<div>
  <ul>
    {#each runNames as runName}
      <li>{runName}</li>
    {/each}
  </ul>
</div>
