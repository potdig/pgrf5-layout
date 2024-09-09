<script>
  import { onMount } from 'svelte'
  let date = new Date()
  $: hour = date.getHours()
  $: min = date.getMinutes()
  $: formattedMin = min < 10 ? `0${min}` : min
  $: colon = date.getMilliseconds() > 500 ? ':' : ' '

  onMount(() => {
    const interval = setInterval(() => {
      date = new Date()
    }, 100)
  })
</script>

<p>
  {`${hour}${colon}${formattedMin}`}
</p>

<style>
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 2;
    grid-column: 9;
    color: black;
    font-family: 'Nova Mono', sans-serif;
    font-size: 3.6em;
  }
</style>
