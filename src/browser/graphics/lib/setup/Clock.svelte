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
